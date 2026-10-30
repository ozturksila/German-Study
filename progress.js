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
    const p = { name: '', display: 'genders', explainLang: 'en', levels: {} };
    LEVEL_CODES.forEach(function (c) { p.levels[c] = emptyLevel(); });
    return p;
  }
  function heal(p) {
    const base = defaults();
    if (!p || typeof p !== 'object') return base;
    base.name = p.name || '';
    base.display = p.display === 'plain' ? 'plain' : 'genders';
    base.explainLang = p.explainLang === 'de' ? 'de' : 'en';
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

  let voices = [];
  function pickVoice() {
    voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    return voices.filter(function (v) { return /^de/i.test(v.lang); })[0] || null;
  }
  if (window.speechSynthesis) { speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(String(text).replace(/\s*\(.*?\)\s*/g, ' '));
    u.lang = 'de-DE';
    const v = pickVoice();
    if (v) u.voice = v;
    u.rate = 0.9;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  }

  let seqCancelled = false;
  function speakLines(lines, rate, onLine, onDone) {
    if (!window.speechSynthesis) { if (onDone) onDone('no-voice'); return; }
    speechSynthesis.cancel();
    seqCancelled = false;
    const v = pickVoice();
    let i = 0;
    function next() {
      if (seqCancelled) { if (onDone) onDone('stopped'); return; }
      if (i >= lines.length) { if (onDone) onDone('done'); return; }
      if (onLine) onLine(i);
      const u = new SpeechSynthesisUtterance(String(lines[i]).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
      u.lang = 'de-DE';
      if (v) u.voice = v;
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
    speakLines: speakLines, stopSpeaking: stopSpeaking, hasVoice: function () { return !!window.speechSynthesis; }
  };
})();
