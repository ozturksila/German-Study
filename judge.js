/* =========================================================
   The writing judge.

   Correction never depends on having an API key. There are five
   routes, and the page falls back down the list:

   1. LOCAL PROXY  — ./serve.sh runs server.py, which holds the key
      on disk (deutsch-kurs/.env or backend/.env) and forwards.
      Works with Anthropic, Gemini, any OpenAI-compatible endpoint,
      or a local Ollama model.
   2. BROWSER KEY  — paste a key into the settings dialog. Stored in
      this browser only. Anthropic, Gemini or OpenAI-compatible.
   3. LOCAL MODEL  — Ollama on this machine. No key, no account,
      no data leaving the computer.
   4. COPY & PASTE — no API at all. The page builds the full marking
      prompt, you paste it into whatever chat you already use
      (Gemini, ChatGPT, Claude), paste the answer back, and the page
      renders it exactly like an API response.
   5. OFFLINE ONLY — checker.js runs in the browser and reports on
      length, structure, register, repetition and task coverage.
      This one always runs, whatever else is configured.
   ========================================================= */
window.JUDGE = (function () {
  const PROXY_URL = '/api/judge';
  const STORE = 'dk_judge_cfg';

  // Each route knows how to build a request and how to read the answer back.
  const PROVIDERS = {
    proxy:  { label: 'Local server (key stays on disk)', needsKey: false },
    manual: { label: 'Copy & paste into my own chat (no API)', needsKey: false },
    ollama: { label: 'Local model via Ollama (no key, offline)', needsKey: false,
              defaultModel: 'llama3.1', defaultBase: 'http://localhost:11434' },
    anthropic: { label: 'Anthropic API key in this browser', needsKey: true,
                 defaultModel: 'claude-sonnet-5-5' },
    gemini: { label: 'Google Gemini API key in this browser', needsKey: true,
              defaultModel: 'gemini-2.5-flash' },
    openai: { label: 'OpenAI-compatible endpoint', needsKey: true,
              defaultModel: 'gpt-4o-mini', defaultBase: 'https://api.openai.com/v1' },
    none:   { label: 'No AI — offline check only', needsKey: false }
  };

  let proxyAvailable = null; // null = not probed yet

  function esc(s) { return DK.esc(s); }
  function cfg() {
    try { return Object.assign({ provider: 'auto', key: '', model: '', base: '' }, JSON.parse(localStorage.getItem(STORE) || '{}')); }
    catch (e) { return { provider: 'auto', key: '', model: '', base: '' }; }
  }
  function setCfg(c) {
    try { localStorage.setItem(STORE, JSON.stringify(Object.assign(cfg(), c))); } catch (e) { /* storage blocked */ }
  }
  function provider() {
    const c = cfg();
    if (c.provider && c.provider !== 'auto') return c.provider;
    return proxyAvailable === true ? 'proxy' : 'none';
  }
  function storedKey() { return cfg().key || ''; }
  function modelFor(p) { return cfg().model || (PROVIDERS[p] && PROVIDERS[p].defaultModel) || ''; }
  function baseFor(p) { return cfg().base || (PROVIDERS[p] && PROVIDERS[p].defaultBase) || ''; }

  async function probeProxy() {
    if (proxyAvailable !== null) return proxyAvailable;
    try {
      const r = await fetch(PROXY_URL, { method: 'GET' });
      const j = await r.json();
      proxyAvailable = !!j.ready;
    } catch (e) {
      proxyAvailable = false;
    }
    return proxyAvailable;
  }

  function configured() {
    const p = provider();
    if (p === 'none') return false;
    if (PROVIDERS[p] && PROVIDERS[p].needsKey) return !!storedKey();
    return true;   // proxy, ollama and manual need no key
  }
  function isManual() { return provider() === 'manual'; }

  /* ---------- the prompts ---------- */
  // What the model is told each level means, so it marks to that level and
  // not to some absolute idea of "good German".
  const LEVEL_SPEC = {
    a1: {
      name: 'A1 (Breakthrough)',
      expect: 'Very short, simple connected sentences. Present tense, basic word order, familiar everyday vocabulary. Repetition and simple connectors (und, aber, denn) are entirely normal at this level.',
      tolerate: 'Missing or wrong articles, case errors, and limited vocabulary are expected and should not be marked harshly. Do not demand subordinate clauses.',
      push: 'Correct verb position (second idea), correct present-tense endings, and capitalised nouns.'
    },
    a2: {
      name: 'A2 (Waystage)',
      expect: 'Several connected sentences on familiar topics, simple past (Perfekt), basic subordinate clauses with weil/dass, and simple comparison.',
      tolerate: 'Occasional case and adjective-ending errors; limited range of connectors.',
      push: 'Verb-final word order in subordinate clauses, correct Perfekt auxiliaries (haben vs sein), and accusative/dative distinction with common verbs.'
    },
    b1: {
      name: 'B1 (Threshold)',
      expect: 'A clear, connected text with a recognisable structure, opinions with reasons, and a reasonable range of connectors (deshalb, obwohl, trotzdem, während).',
      tolerate: 'Errors in complex structures, as long as meaning stays clear. Some repetition of connectors.',
      push: 'Consistent tense use, relative clauses, correct adjective endings, and a clear beginning-middle-end.'
    },
    b2: {
      name: 'B2 (Vantage)',
      expect: 'A well-structured argumentative or formal text. Clear position, supporting arguments and a counter-argument, consistent register, varied connectors, and some complex syntax (relative clauses, passive, Konjunktiv II, nominalisation).',
      tolerate: 'Occasional slips in rare structures and in idiom, as long as they do not obscure the argument.',
      push: 'Register consistency (no spoken-German fillers in a formal text), precise connectors, varied sentence openings rather than always subject-first, and genuine counter-argument rather than a list of opinions.'
    },
    c1: {
      name: 'C1 (Effective Operational Proficiency)',
      expect: 'A fluent, well-organised text with controlled register, nominal style where appropriate, extended attributes, hedging, and clear thematic progression across paragraphs.',
      tolerate: 'Rare idiomatic slips.',
      push: 'Stylistic precision, avoidance of learner-typical overuse (sehr, viel, Ich denke dass), textual cohesion, and deliberate register choice.'
    },
    c2: {
      name: 'C2 (Mastery)',
      expect: 'Near-native precision: deliberate word choice between near-synonyms, controlled modal particles, idiomatic phrasing, and an argument structured at publishable standard.',
      tolerate: 'Almost nothing — mark the remaining non-native markers explicitly.',
      push: 'Connotation, rhythm, economy, and the last residual markers of a non-native writer.'
    }
  };

  function systemPrompt(ctx) {
    const spec = LEVEL_SPEC[ctx.levelCode] || LEVEL_SPEC.b1;
    return [
      'You are an experienced German teacher (DaF) marking a learner\'s written work.',
      '',
      'THE LEVEL YOU ARE MARKING TO: ' + spec.name + '.',
      'What a text at this level should look like: ' + spec.expect,
      'What you should NOT punish at this level: ' + spec.tolerate,
      'What you SHOULD push the learner on at this level: ' + spec.push,
      '',
      'Mark against this level, not against native-speaker German. A text that fully meets ' + spec.name +
      ' deserves top scores even if a C1 writer would have written it differently.',
      '',
      'THE UNIT THIS TASK BELONGS TO: "' + ctx.unit + '".',
      ctx.grammarFocus && ctx.grammarFocus.length
        ? 'The unit practises: ' + ctx.grammarFocus.join('; ') + '. Pay particular attention to whether the learner used these, and say so.'
        : '',
      ctx.textType ? 'Expected text type: ' + ctx.textType + '. Judge register and conventions against that text type.' : '',
      'Expected length: ' + ctx.minWords + '–' + ctx.maxWords + ' words. Note it if the text is clearly short or long, and let it affect the task score only.',
      '',
      'Write every note, explanation and verdict in ENGLISH, so a learner at this level can understand the feedback.',
      'Quote German in the corrections exactly as the learner wrote it.',
      'Be specific and kind. Never invent errors. If something is correct but unidiomatic, say so and mark it as a suggestion, not an error.',
      '',
      'Reply with RAW JSON only — no markdown fence, no commentary before or after. Use exactly this shape:',
      '{',
      '  "level_estimate": "<the CEFR level this text actually reads at, e.g. B1+ or B2>",',
      '  "verdict": "<two or three sentences: does it fulfil the task, and what is the single most useful thing to fix>",',
      '  "scores": {',
      '    "task": {"score": 0-5, "note": "<did it answer the task, cover the bullet points, hit the length>"},',
      '    "structure": {"score": 0-5, "note": "<organisation, paragraphs, connectors, flow>"},',
      '    "vocabulary": {"score": 0-5, "note": "<range and precision for this level>"},',
      '    "grammar": {"score": 0-5, "note": "<accuracy, weighted for this level>"},',
      '    "register": {"score": 0-5, "note": "<formality and text-type conventions>"}',
      '  },',
      '  "strengths": ["<2-4 concrete things the learner did well, quoting their German>"],',
      '  "corrections": [{"original": "<the learner\'s exact words>", "corrected": "<the fix>", "why": "<short reason in English>"}],',
      '  "improvements": ["<2-4 specific, actionable next steps for this level>"],',
      '  "improved_version": "<the learner\'s own text rewritten at the top of this level, keeping their ideas and roughly their length>"',
      '}',
      '',
      'Give at most 12 corrections — the most important ones, ordered by how much they matter.'
    ].filter(Boolean).join('\n');
  }

  function userPrompt(ctx) {
    return 'TASK THE LEARNER WAS GIVEN:\n' + ctx.task + '\n\nTHE LEARNER\'S TEXT:\n"""\n' + ctx.text + '\n"""';
  }

  function parseJson(raw) {
    let t = String(raw).trim();
    if (t.indexOf('```') === 0) t = t.replace(/^```(json)?/i, '').replace(/```$/, '').trim();
    const a = t.indexOf('{'), b = t.lastIndexOf('}');
    if (a > 0 || b < t.length - 1) t = t.slice(a, b + 1);
    return JSON.parse(t);
  }

  /* ---------- the full prompt as plain text, for copy & paste ---------- */
  function promptText(ctx) {
    return systemPrompt(ctx) + '\n\n' + userPrompt(ctx);
  }

  /* ---------- the call ---------- */
  async function check(ctx) {
    const p = provider();
    if (p === 'none') { const e = new Error('offline'); e.code = 'offline'; throw e; }
    if (p === 'manual') { const e = new Error('manual'); e.code = 'manual'; throw e; }

    const sys = systemPrompt(ctx), usr = userPrompt(ctx);

    if (p === 'proxy') {
      const r = await fetch(PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: modelFor('anthropic'), max_tokens: 2000, system: sys, messages: [{ role: 'user', content: usr }] })
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || ('proxy returned ' + r.status));
      return parseJson(j.text);
    }

    if (p === 'ollama') {
      const r = await fetch(baseFor('ollama').replace(/\/$/, '') + '/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: modelFor('ollama'), stream: false, format: 'json',
          messages: [{ role: 'system', content: sys }, { role: 'user', content: usr }]
        })
      });
      if (!r.ok) throw new Error('Ollama returned ' + r.status + '. Is it running? (ollama serve)');
      const j = await r.json();
      return parseJson(j.message && j.message.content);
    }

    if (p === 'gemini') {
      const key = storedKey();
      if (!key) { const e = new Error('no-key'); e.code = 'no-key'; throw e; }
      const url = 'https://generativelanguage.googleapis.com/v1beta/models/' +
        encodeURIComponent(modelFor('gemini')) + ':generateContent?key=' + encodeURIComponent(key);
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: sys }] },
          contents: [{ role: 'user', parts: [{ text: usr }] }],
          generationConfig: { responseMimeType: 'application/json', maxOutputTokens: 2400 }
        })
      });
      const j = await r.json();
      if (!r.ok) throw new Error((j.error && j.error.message) || ('Gemini returned ' + r.status));
      const cand = (j.candidates && j.candidates[0]) || {};
      return parseJson(((cand.content && cand.content.parts) || []).map(function (x) { return x.text || ''; }).join(''));
    }

    if (p === 'openai') {
      const key = storedKey();
      if (!key) { const e = new Error('no-key'); e.code = 'no-key'; throw e; }
      const r = await fetch(baseFor('openai').replace(/\/$/, '') + '/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
        body: JSON.stringify({
          model: modelFor('openai'),
          response_format: { type: 'json_object' },
          messages: [{ role: 'system', content: sys }, { role: 'user', content: usr }]
        })
      });
      const j = await r.json();
      if (!r.ok) throw new Error((j.error && j.error.message) || ('API returned ' + r.status));
      return parseJson(j.choices[0].message.content);
    }

    // anthropic, browser key
    const key = storedKey();
    if (!key) { const e = new Error('no-key'); e.code = 'no-key'; throw e; }
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({ model: modelFor('anthropic'), max_tokens: 2000, system: sys, messages: [{ role: 'user', content: usr }] })
    });
    const j = await r.json();
    if (!r.ok) throw new Error((j.error && j.error.message) || ('API returned ' + r.status));
    return parseJson(j.content.map(function (c) { return c.text || ''; }).join(''));
  }

  /* ---------- copy & paste route: no API, no key, any chat UI ---------- */
  function manualHtml(ctx) {
    return '<div class="manual-judge">' +
      '<h5>📋 Correction by copy &amp; paste</h5>' +
      '<p class="note">No API, no key. Copy the marking prompt, paste it into whatever chat you already use — ' +
      'Gemini, ChatGPT, Claude, anything — then paste its answer back here. ' +
      'The prompt already contains your text and the CEFR criteria for ' + esc(ctx.level) + '.</p>' +
      '<div class="mj-row">' +
      '<button class="check-btn" onclick="JUDGE.copyPrompt()">📋 Copy the marking prompt</button>' +
      '<button class="reset-btn" onclick="JUDGE.showPrompt()">👁 Show it</button>' +
      '<span class="judge-status" id="mjCopied"></span>' +
      '</div>' +
      '<pre class="mj-prompt" id="mjPrompt" hidden></pre>' +
      '<p class="note" style="margin-top:12px">Then paste what it replies — the whole thing, JSON or not:</p>' +
      '<textarea id="mjPaste" class="mj-paste" placeholder=\'{ "level_estimate": … }\'></textarea>' +
      '<div class="mj-row"><button class="check-btn" onclick="JUDGE.acceptPaste()">✓ Show it as feedback</button>' +
      '<span class="judge-status" id="mjStatus"></span></div>' +
      '</div>';
  }
  let lastPrompt = '';
  function rememberPrompt(ctx) { lastPrompt = promptText(ctx); return lastPrompt; }
  async function copyPrompt() {
    const el = document.getElementById('mjCopied');
    try {
      await navigator.clipboard.writeText(lastPrompt);
      if (el) el.textContent = '✓ copied — paste it into your chat';
    } catch (e) {
      showPrompt();
      if (el) el.textContent = 'could not copy automatically — select the text below';
    }
  }
  function showPrompt() {
    const pre = document.getElementById('mjPrompt');
    if (!pre) return;
    pre.textContent = lastPrompt;
    pre.hidden = !pre.hidden;
  }
  function acceptPaste() {
    const ta = document.getElementById('mjPaste');
    const st = document.getElementById('mjStatus');
    try {
      const f = parseJson(ta.value);
      if (window.onManualFeedback) window.onManualFeedback(f);
      if (st) st.textContent = '';
    } catch (e) {
      if (st) st.textContent = 'That did not parse as JSON. Paste the whole reply, including the { }.';
    }
  }

  /* ---------- settings ---------- */
  function setupHtml() {
    return '<div class="judge-setup">' +
      '<strong>🤖 AI correction is not set up yet — and it is optional.</strong>' +
      '<p>The offline check above already runs with no account at all. For feedback on <em>meaning</em> ' +
      'you have four routes, including two that need no API key:</p>' +
      '<ul class="goals">' +
      '<li><strong>Copy &amp; paste</strong> — the page writes the marking prompt, you paste it into Gemini, ChatGPT or Claude and paste the answer back. No key, no cost beyond what you already pay.</li>' +
      '<li><strong>A local model</strong> — Ollama on this machine. No key, nothing leaves the computer.</li>' +
      '<li><strong>Key on disk</strong> — put <code>ANTHROPIC_API_KEY</code> (or <code>GEMINI_API_KEY</code>) in <code>deutsch-kurs/.env</code> and run <code>./serve.sh</code>.</li>' +
      '<li><strong>Key in this browser</strong> — quickest, least private.</li>' +
      '</ul>' +
      '<button class="check-btn" onclick="JUDGE.askKey()">Choose how to correct</button>' +
      '</div>';
  }
  function errorHtml(e) {
    if (e && (e.code === 'no-key' || e.code === 'offline')) return setupHtml();
    return '<div class="judge-setup"><strong>🤖 The correction could not be fetched.</strong>' +
      '<p>' + esc(e && e.message ? e.message : String(e)) + '</p>' +
      '<p>Your text is saved, and the offline check above still applies.</p>' +
      '<button class="check-btn" onclick="JUDGE.askKey()">Change how correction works</button></div>';
  }

  function askKey() {
    const c = cfg();
    const cur = c.provider && c.provider !== 'auto' ? c.provider : (proxyAvailable ? 'proxy' : 'manual');
    const opts = Object.keys(PROVIDERS).map(function (k) {
      const dis = (k === 'proxy' && !proxyAvailable) ? ' disabled' : '';
      return '<label class="mj-opt"><input type="radio" name="jp" value="' + k + '"' +
        (k === cur ? ' checked' : '') + dis + '> <span>' + esc(PROVIDERS[k].label) +
        (dis ? ' <em>(start ./serve.sh to use this)</em>' : '') + '</span></label>';
    }).join('');
    const overlay = document.createElement('div');
    overlay.className = 'profile-modal-overlay';
    overlay.innerHTML =
      '<div class="profile-modal key-modal"><h3>🤖 How should writing be corrected?</h3>' +
      opts +
      '<div id="jpFields"></div>' +
      '<div class="opt-row"><button class="check-btn" onclick="JUDGE.saveKey()">Save</button>' +
      '<button class="reset-btn" onclick="JUDGE.closeKey()">Cancel</button></div></div>';
    document.body.appendChild(overlay);
    overlay.querySelectorAll('input[name=jp]').forEach(function (r) {
      r.addEventListener('change', function () { renderFields(r.value); });
    });
    renderFields(cur);
  }
  function renderFields(p) {
    const box = document.getElementById('jpFields');
    if (!box) return;
    const c = cfg(), def = PROVIDERS[p] || {};
    let h = '';
    if (def.needsKey) {
      h += '<input type="password" id="jpKey" placeholder="API key" autocomplete="off" value="' + esc(c.key || '') + '">' +
        '<p class="warn">Stored in this browser only. Anything running in this browser profile can read it.</p>';
    }
    if (def.defaultModel) h += '<input type="text" id="jpModel" placeholder="model (' + esc(def.defaultModel) + ')" value="' + esc(c.model || '') + '">';
    if (def.defaultBase) h += '<input type="text" id="jpBase" placeholder="base URL (' + esc(def.defaultBase) + ')" value="' + esc(c.base || '') + '">';
    if (p === 'manual') h += '<p class="note">You will get a Copy button on the writing page, and a box to paste the answer into.</p>';
    if (p === 'ollama') h += '<p class="note">Needs Ollama running locally: <code>ollama serve</code>, then e.g. <code>ollama pull llama3.1</code>. A small local model marks grammar reasonably and meaning less well.</p>';
    if (p === 'none') h += '<p class="note">Only the offline check will run. Nothing is sent anywhere.</p>';
    box.innerHTML = h;
  }
  function closeKey() {
    const o = document.querySelector('.profile-modal-overlay');
    if (o) o.remove();
  }
  function saveKey() {
    const sel = document.querySelector('input[name=jp]:checked');
    const p = sel ? sel.value : 'none';
    const k = document.getElementById('jpKey'), m = document.getElementById('jpModel'), b = document.getElementById('jpBase');
    setCfg({ provider: p, key: k ? k.value.trim() : '', model: m ? m.value.trim() : '', base: b ? b.value.trim() : '' });
    closeKey();
    if (window.onJudgeConfigChanged) window.onJudgeConfigChanged();
  }
  function clearKey() { setCfg({ key: '' }); closeKey(); }

  // probe once at load so the writing page can show the right thing immediately
  probeProxy();

  return {
    check: check, configured: configured, isManual: isManual, provider: provider,
    setupHtml: setupHtml, errorHtml: errorHtml, manualHtml: manualHtml,
    askKey: askKey, saveKey: saveKey, clearKey: clearKey, closeKey: closeKey,
    copyPrompt: copyPrompt, showPrompt: showPrompt, acceptPaste: acceptPaste,
    promptText: promptText, rememberPrompt: rememberPrompt,
    systemPrompt: systemPrompt, LEVEL_SPEC: LEVEL_SPEC, PROVIDERS: PROVIDERS
  };
})();
