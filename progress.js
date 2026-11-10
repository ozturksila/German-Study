/* =========================================================
   Shared progress store — IndexedDB with a localStorage mirror,
   so a saved profile survives even if IndexedDB is unavailable.
   One record holds every level (a1 … c2).
   ========================================================= */
window.DK = (function () {
  const DB_NAME = 'deutschkurs_db';
  const DB_STORE = 'kv';
  const PROGRESS_KEY = 'progress';
  const MIRROR_KEY = 'dk_profile_v1';
  const LEVEL_CODES = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

  let dbPromise = null;

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      if (!window.indexedDB) { reject(new Error('no indexeddb')); return; }
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function () {
        if (!req.result.objectStoreNames.contains(DB_STORE)) req.result.createObjectStore(DB_STORE);
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
    return dbPromise;
  }
  function dbGet(key) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        const tx = db.transaction(DB_STORE, 'readonly');
        const r = tx.objectStore(DB_STORE).get(key);
        r.onsuccess = function () { resolve(r.result); };
        r.onerror = function () { reject(r.error); };
      });
    }).catch(function () { return undefined; });
  }
  function dbSet(key, value) {
    return openDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        const tx = db.transaction(DB_STORE, 'readwrite');
        tx.objectStore(DB_STORE).put(value, key);
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    }).catch(function () { /* mirror already written */ });
  }

  function emptyLevel() {
    return {
      lastUnit: 0, lastTopic: 0, lastCp: null,
      unitPage: {}, pages: {}, exercises: {}, checkpoints: {},
      writing: {},    // unit key -> { text, feedback, date }
      flash: {},      // unit key -> { known: {}, again: {} }
      selfCheck: {}   // unit key -> { 0: true, … }
    };
  }
  function defaults() {
    const p = { name: '', display: 'genders', explainLang: 'en', levels: {}, guides: {} };   // guides: study-guide quiz answers, by section id
    LEVEL_CODES.forEach(function (c) { p.levels[c] = emptyLevel(); });
    return p;
  }
  function heal(p) {
    const base = defaults();
    if (!p || typeof p !== 'object') return base;
    base.name = p.name || '';
    base.display = p.display === 'plain' ? 'plain' : 'genders';
    base.explainLang = p.explainLang === 'de' ? 'de' : 'en';
    base.guides = (p.guides && typeof p.guides === 'object') ? p.guides : {};
    LEVEL_CODES.forEach(function (c) {
      base.levels[c] = Object.assign(emptyLevel(), (p.levels && p.levels[c]) || {});
    });
    return base;
  }

  let data = defaults();
  let saveTimer = null;
  let badgeEl = null;

  function setBadge(state) {
    badgeEl = badgeEl || document.getElementById('pbSave');
    if (!badgeEl) return;
    badgeEl.textContent = state === 'saving' ? '💾 saving…' : '✓ saved';
  }

  async function load() {
    let stored = await dbGet(PROGRESS_KEY);
    if (!stored) {
      try { stored = JSON.parse(localStorage.getItem(MIRROR_KEY) || 'null'); } catch (e) { stored = null; }
    }
    data = heal(stored);
    return data;
  }
  function save() {
    try { localStorage.setItem(MIRROR_KEY, JSON.stringify(data)); } catch (e) { /* storage blocked */ }
    setBadge('saving');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () { dbSet(PROGRESS_KEY, data).then(function () { setBadge('saved'); }); }, 350);
  }
  // Cleared in place, never replaced: the course page holds a direct reference
  // to its level object, and swapping it out would leave that page showing
  // the old progress until the next full reload.
  function reset(levelCode) {
    const codes = levelCode ? [levelCode] : LEVEL_CODES;
    codes.forEach(function (c) { Object.assign(data.levels[c], emptyLevel()); });
    save();
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function shuffle(a) {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }
  // "ß" and umlauts are compared loosely so ue / ae / oe / ss are accepted too.
  // keepCase is for exercises where capitalisation is the point being tested.
  function fold(s, keepCase) {
    let x = String(s).trim().replace(/\s+/g, ' ').replace(/[.!?,;:]+$/, '');
    if (!keepCase) x = x.toLowerCase();
    return x
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe').replace(/Ü/g, 'Ue');
  }
  function deEq(given, expected, keepCase) { return fold(given, keepCase) === fold(expected, keepCase); }

  // German voice choice: only de-* voices, best quality first (Premium/Enhanced/Neural/Natural, then
  // well-known names). Voices load lazily, so every call re-reads the list.
  function germanVoices() {
    const all = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    function score(v) {
      let n = 0;
      if (/^de[-_]DE/i.test(v.lang)) n += 5;
      else if (/^de[-_](AT|CH)/i.test(v.lang)) n += 2;
      if (/premium|enhanced|neural|natural|online/i.test(v.name)) n += 10;
      if (/google/i.test(v.name)) n += 6;
      if (/^anna\b/i.test(v.name)) n += 4;
      if (/grandma|grandpa|rocko|shelley|sandy/i.test(v.name)) n -= 6;
      if (/anna|petra|markus|viktor|yannick|katja|conrad|amala|vicki|hedda/i.test(v.name)) n += 3;
      if (v.localService === false) n += 1;
      return n;
    }
    return all.filter(function (v) { return /^de([-_]|$)/i.test(v.lang) || /german|deutsch/i.test(v.name); })
      .sort(function (a, b) { return score(b) - score(a); });
  }
  function pickVoice(i) {
    const g = germanVoices();
    if (!g.length) return null;
    return g[(i || 0) % Math.min(g.length, 2)] || g[0];
  }
  function hasGermanVoice() { return germanVoices().length > 0; }
  if (window.speechSynthesis) { speechSynthesis.onvoiceschanged = function () {}; speechSynthesis.getVoices(); }
  function noVoiceHint() {
    return 'No German voice is installed. On Mac: System Settings → Accessibility → Spoken Content → System voice → Manage Voices → German (Anna, Premium). Then reload this page.';
  }
  function speak(text) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(String(text).replace(/\s*\(.*?\)\s*/g, ' '));
    u.lang = 'de-DE';
    const v = pickVoice(0);
    if (!v) { alert(noVoiceHint()); return; }
    u.voice = v;
    u.lang = v.lang;
    u.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  let seqCancelled = false;
  function speakLines(lines, rate, onLine, onDone, speakers) {
    if (!window.speechSynthesis) { if (onDone) onDone('no-voice'); return; }
    speechSynthesis.cancel();
    seqCancelled = false;
    if (!pickVoice(0)) { if (onDone) onDone('no-voice'); return; }
    let i = 0;
    const spk = {};
    function next() {
      if (seqCancelled) { if (onDone) onDone('stopped'); return; }
      if (i >= lines.length) { if (onDone) onDone('done'); return; }
      if (onLine) onLine(i);
      const u = new SpeechSynthesisUtterance(String(lines[i]).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
      const who = speakers && speakers[i];
      if (who != null && !(who in spk)) spk[who] = Object.keys(spk).length;
      const v = pickVoice(who != null ? spk[who] : 0);
      u.voice = v;
      u.lang = v.lang;
      u.rate = rate || 0.95;
      u.onend = function () { i++; setTimeout(next, 220); };
      u.onerror = function () { i++; setTimeout(next, 220); };
      speechSynthesis.speak(u);
    }
    next();
  }
  function stopSpeaking() {
    seqCancelled = true;
    if (window.speechSynthesis) speechSynthesis.cancel();
  }

  return {
    LEVEL_CODES: LEVEL_CODES,
    load: load,
    save: save,
    reset: reset,
    setBadge: setBadge,
    get: function () { return data; },
    level: function (code) { return data.levels[code] || (data.levels[code] = emptyLevel()); },
    esc: esc, shuffle: shuffle, fold: fold, deEq: deEq, speak: speak,
    speakLines: speakLines, stopSpeaking: stopSpeaking, hasVoice: function () { return !!window.speechSynthesis; }, hasGermanVoice: hasGermanVoice, noVoiceHint: noVoiceHint
  };
})();
