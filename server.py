#!/usr/bin/env python3
"""
Serves the course AND forwards writing-judge requests to the Anthropic API,
so the API key stays on this machine and never reaches the browser.

Works with whichever provider you have a key for — Anthropic, Google Gemini,
or any OpenAI-compatible endpoint (including a local LM Studio or Ollama).
The first key found decides the provider, unless AI_PROVIDER says otherwise.

Keys are read from, in order:
  1. the environment
  2. deutsch-kurs/.env
  3. ../backend/.env          (the key this project already uses)

Recognised:  ANTHROPIC_API_KEY · GEMINI_API_KEY · OPENAI_API_KEY
Optional:    AI_PROVIDER (anthropic|gemini|openai) · AI_MODEL · OPENAI_BASE_URL

No third-party packages are needed — only the standard library.

    ./serve.sh            # or: python3 server.py [port]

GET  /api/judge  -> {"ready": true|false}   (does a key exist?)
POST /api/judge  -> forwards the body to the Messages API, returns {"text": ...}
"""
import json
import os
import sys
import urllib.error
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HERE = Path(__file__).resolve().parent
MAX_BODY = 256 * 1024

DEFAULT_MODELS = {
    "anthropic": "claude-sonnet-5-5",
    "gemini": "gemini-2.5-flash",
    "openai": "gpt-4o-mini",
}


def read_env_file(path: Path) -> dict:
    out = {}
    try:
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            out[k.strip()] = v.strip().strip('"').strip("'")
    except OSError:
        pass
    return out


def setting(name: str) -> str:
    """Environment first, then this folder's .env, then the backend's."""
    value = os.environ.get(name, "").strip()
    if value:
        return value
    for candidate in (HERE / ".env", HERE.parent / "backend" / ".env"):
        value = read_env_file(candidate).get(name, "").strip()
        if value:
            return value
    return ""


def resolve_provider():
    """Returns (provider, key) for whichever key is present, or ("", "")."""
    wanted = setting("AI_PROVIDER").lower()
    found = {
        "anthropic": setting("ANTHROPIC_API_KEY"),
        "gemini": setting("GEMINI_API_KEY") or setting("GOOGLE_API_KEY"),
        "openai": setting("OPENAI_API_KEY"),
    }
    if wanted in found and found[wanted]:
        return wanted, found[wanted]
    for name in ("anthropic", "gemini", "openai"):
        if found[name]:
            return name, found[name]
    return "", ""


def api_key() -> str:
    return resolve_provider()[1]


def build_request(provider, key, payload):
    """Same incoming payload whatever the provider; each one gets its own shape."""
    model = setting("AI_MODEL") or payload.get("model") or DEFAULT_MODELS[provider]
    system = payload.get("system", "")
    user = "".join(
        m.get("content", "") for m in payload.get("messages", []) if m.get("role") == "user"
    )
    max_tokens = int(payload.get("max_tokens") or 2000)

    if provider == "anthropic":
        return (
            "https://api.anthropic.com/v1/messages",
            {"Content-Type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01"},
            {"model": model, "max_tokens": max_tokens, "system": system,
             "messages": [{"role": "user", "content": user}]},
        )
    if provider == "gemini":
        return (
            "https://generativelanguage.googleapis.com/v1beta/models/%s:generateContent?key=%s"
            % (model, key),
            {"Content-Type": "application/json"},
            {"systemInstruction": {"parts": [{"text": system}]},
             "contents": [{"role": "user", "parts": [{"text": user}]}],
             "generationConfig": {"responseMimeType": "application/json",
                                  "maxOutputTokens": max_tokens}},
        )
    base = (setting("OPENAI_BASE_URL") or "https://api.openai.com/v1").rstrip("/")
    return (
        base + "/chat/completions",
        {"Content-Type": "application/json", "Authorization": "Bearer " + key},
        {"model": model, "response_format": {"type": "json_object"},
         "messages": [{"role": "system", "content": system},
                      {"role": "user", "content": user}]},
    )


def extract_text(provider, data):
    if provider == "anthropic":
        return "".join(b.get("text", "") for b in data.get("content", []))
    if provider == "gemini":
        cands = data.get("candidates") or [{}]
        parts = (cands[0].get("content") or {}).get("parts") or []
        return "".join(p.get("text", "") for p in parts)
    choices = data.get("choices") or [{}]
    return (choices[0].get("message") or {}).get("content", "")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(HERE), **kw)

    def log_message(self, fmt, *args):  # one tidy line per request
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def _json(self, code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path.split("?")[0] == "/api/judge":
            prov, key = resolve_provider()
            self._json(200, {"ready": bool(key), "provider": prov or None, "model_proxy": True})
            return
        super().do_GET()

    def do_POST(self):
        if self.path.split("?")[0] != "/api/judge":
            self._json(404, {"error": "unknown endpoint"})
            return

        provider, key = resolve_provider()
        if not key:
            self._json(503, {"error": (
                "No API key found. Put ANTHROPIC_API_KEY, GEMINI_API_KEY or OPENAI_API_KEY "
                "in deutsch-kurs/.env (or backend/.env) and restart this server — or use the "
                "copy-and-paste route on the writing page, which needs no key at all."
            )})
            return

        try:
            length = int(self.headers.get("Content-Length") or 0)
        except ValueError:
            length = 0
        if length <= 0 or length > MAX_BODY:
            self._json(400, {"error": "missing or oversized request body"})
            return

        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            self._json(400, {"error": "request body was not valid JSON"})
            return

        url, headers, out = build_request(provider, key, payload)
        req = urllib.request.Request(
            url, data=json.dumps(out).encode("utf-8"), headers=headers, method="POST"
        )
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "replace")[:500]
            self._json(e.code, {"error": "%s API error %s: %s" % (provider, e.code, detail)})
            return
        except urllib.error.URLError as e:
            self._json(502, {"error": "Could not reach the %s API: %s" % (provider, e.reason)})
            return

        self._json(200, {"text": extract_text(provider, data), "provider": provider})


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8010
    prov, key = resolve_provider()
    print("Deutschkurs  →  http://localhost:%d/" % port)
    if key:
        print("AI correction: %s (%s)" % (prov, setting("AI_MODEL") or DEFAULT_MODELS[prov]))
    else:
        print("AI correction: no key — the offline check and the copy-and-paste route still work")
    print("Ctrl+C to stop.")
    ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()


if __name__ == "__main__":
    main()
