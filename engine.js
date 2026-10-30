/* =========================================================
   Deutschkurs — course engine (shared by every level).
   A level file in data/ fills window.LEVELS[code]; this file
   turns it into a navigable course: units → pages, a mixed
   checkpoint after every three units, and a final one.

   DRAFT NOTE: topics without content render as a planned-topic
   placeholder, so the whole A1–C2 outline is browsable now and
   lessons can be filled in one topic at a time.
   ========================================================= */
(function () {
  'use strict';
  const esc = DK.esc, shuffle = DK.shuffle;

  /* ---------- which level are we on ---------- */
  const params = new URLSearchParams(location.search);
  const code = (params.get('level') || 'a1').toLowerCase();
  const LEVEL = (window.LEVELS || {})[code];
  let P = null;          // this level's progress slice
  let units = [];

  /* content builders (vocabTable, formTable, dialogBox, exInput, exSelect)
     live in builders.js, which loads before the data files that call them. */

  /* ---------- course structure ---------- */
  const CHECKPOINTS = [];
  const COURSE = [];
  function buildStructure() {
    units = LEVEL.units;
    const letters = 'ABCDEFGHIJKLMNOP';
    for (let start = 0, n = 0; start < units.length; start += 3, n++) {
      const group = [];
      for (let i = start; i < Math.min(start + 3, units.length); i++) group.push(i);
      CHECKPOINTS.push({ id: 'cp' + letters[n], letter: letters[n], units: group, after: group[group.length - 1] });
    }
    CHECKPOINTS.push({
      id: 'cpFinal', letter: 'Final',
      units: units.map(function (_, i) { return i; }), after: units.length - 1
    });
    units.forEach(function (u, i) {
      COURSE.push({ kind: 'unit', unit: i });
      CHECKPOINTS.forEach(function (cp) { if (cp.after === i) COURSE.push({ kind: 'cp', cp: cp }); });
    });
  }
  let currentView = { kind: 'unit', unit: 0, page: 0 };

  /* Every unit has the same spine: its topic lessons, then one page per skill.
     Pages with no content yet render a placeholder, so the shape of a finished
     unit is visible from the start. */
  const SKILL_PAGES = [
    { kind: 'drill',     icon: '📝', title: 'Übungen — Unit Practice' },
    { kind: 'reading',   icon: '📖', title: 'Lesen — Reading' },
    { kind: 'listening', icon: '🎧', title: 'Hören — Listening' },
    { kind: 'writing',   icon: '✍️', title: 'Schreiben — Writing' },
    { kind: 'flash',     icon: '🃏', title: 'Karteikarten — Flashcards' },
    { kind: 'culture',   icon: '🏛️', title: 'Landeskunde — Culture Notes' },
    { kind: 'recap',     icon: '🧾', title: 'Wortschatz — Vocabulary Recap' }
  ];
  function unitPageList(u) {
    const unit = units[u];
    const pages = unit.topics.map(function (t, i) { return { kind: 'topic', idx: i, icon: t.icon, title: t.title }; });
    return pages.concat(SKILL_PAGES);
  }
  function unitPageCount(u) { return unitPageList(u).length; }
  function cpTitle(cp) {
    const span = ' — Units ' + (cp.units[0] + 1) + '–' + (cp.units[cp.units.length - 1] + 1);
    return (cp.letter === 'Final' ? 'Final Checkpoint' : 'Checkpoint ' + cp.letter) + span;
  }
  function courseIndexOf(view) {
    for (let i = 0; i < COURSE.length; i++) {
      const c = COURSE[i];
      if (view.kind === 'unit' && c.kind === 'unit' && c.unit === view.unit) return i;
      if (view.kind === 'cp' && c.kind === 'cp' && c.cp.id === view.cp.id) return i;
    }
    return 0;
  }
  function viewForCourse(ci, atEnd) {
    const c = COURSE[ci];
    if (c.kind === 'cp') return { kind: 'cp', cp: c.cp };
    const last = unitPageCount(c.unit) - 1;
    return { kind: 'unit', unit: c.unit, page: atEnd ? last : Math.min(P.unitPage[c.unit] || 0, last) };
  }
  function setView(view) {
    currentView = view;
    if (view.kind === 'unit') {
      P.lastUnit = view.unit; P.lastTopic = view.page; P.lastCp = null;
      P.unitPage[view.unit] = view.page;
      P.pages['u' + view.unit + '_p' + view.page] = true;
    } else { P.lastCp = view.cp.id; }
    DK.save();
    renderAll();
  }
  window.goCourse = function (ci) { setView(viewForCourse(ci, false)); };
  window.openLecture = function (u, p) { setView({ kind: 'unit', unit: u, page: p }); };
  window.lecturePrev = function () {
    if (currentView.kind === 'unit' && currentView.page > 0) { openLecture(currentView.unit, currentView.page - 1); return; }
    const ci = courseIndexOf(currentView);
    if (ci > 0) setView(viewForCourse(ci - 1, true));
  };
  window.lectureNext = function () {
    if (currentView.kind === 'unit' && currentView.page < unitPageCount(currentView.unit) - 1) {
      openLecture(currentView.unit, currentView.page + 1); return;
    }
    const ci = courseIndexOf(currentView);
    if (ci < COURSE.length - 1) setView(viewForCourse(ci + 1, false));
  };

  /* ---------- profile bar ---------- */
  function countIn(html) { return ((html || '').match(/class="check-btn"/g) || []).length; }
  function countExercises() {
    let total = 0;
    units.forEach(function (u) {
      u.topics.forEach(function (t) { total += countIn(t.exercises); });
      total += countIn(u.exercises);
      total += countIn(u.reading && u.reading.questions);
      total += countIn(u.listening && u.listening.questions);
    });
    return total;
  }
  function renderProfileBar() {
    const bar = document.getElementById('profileBar');
    if (!bar) return;
    const d = DK.get();
    const totalEx = countExercises();
    const right = Object.keys(P.exercises).filter(function (k) { return P.exercises[k].correct === true; }).length;
    const pct = totalEx ? Math.min(100, Math.round(right / totalEx * 100)) : 0;
    const seg = [['genders', 'der/die/das in colour'], ['plain', 'Plain text']].map(function (m) {
      return '<button title="' + m[1] + '" class="' + (d.display === m[0] ? 'on' : '') + '" onclick="setDisplay(\'' + m[0] + '\')">' +
        (m[0] === 'genders' ? '🎨 Genders' : '📄 Plain') + '</button>';
    }).join('');
    const expSeg = [['en', 'English'], ['de', 'Deutsch']].map(function (m) {
      return '<button class="' + (d.explainLang === m[0] ? 'on' : '') + '" onclick="setExplain(\'' + m[0] + '\')">' + m[1] + '</button>';
    }).join('');
    bar.innerHTML =
      '<span>👋 <span class="pb-name">' + esc(d.name || 'Studentin') + '</span></span>' +
      '<div class="pb-progress"><div class="pb-bar-track"><div class="pb-bar-fill" style="width:' + pct + '%"></div></div>' +
      '<span class="pb-pct">' + right + ' / ' + totalEx + ' exercises correct</span></div>' +
      '<div class="display-switch" title="How German text is shown"><span class="ds-label">Display</span>' + seg + '</div>' +
      '<div class="display-switch" title="Language of the lesson explanations"><span class="ds-label">Erklärung</span>' + expSeg + '</div>' +
      '<span class="pb-save" id="pbSave"></span>' +
      '<button onclick="changeName()">✏️ Name</button>' +
      '<button onclick="resetLevel()">🔄 Reset ' + LEVEL.label + '</button>';
    DK.setBadge('saved');
  }
  window.setDisplay = function (mode) {
    DK.get().display = mode;
    DK.save();
    document.body.classList.toggle('genders-off', mode !== 'genders');
    renderAll();
  };
  window.setExplain = function (mode) {
    DK.get().explainLang = mode === 'de' ? 'de' : 'en';
    DK.save();
    renderAll();
  };
  window.changeName = function () { showNamePrompt(); };
  window.resetLevel = function () {
    if (!confirm('Reset your saved pages, answers and checkpoint scores for ' + LEVEL.label + '? This cannot be undone.')) return;
    DK.reset(code);
    P = DK.level(code);
    currentView = { kind: 'unit', unit: 0, page: 0 };
    renderAll();
  };
  function showNamePrompt() {
    const overlay = document.createElement('div');
    overlay.className = 'profile-modal-overlay';
    overlay.innerHTML =
      '<div class="profile-modal"><h3>🥨 Willkommen!</h3>' +
      '<p>What should the course call you?</p>' +
      '<input type="text" id="nameInput" placeholder="Your name" maxlength="30">' +
      '<button class="check-btn" onclick="submitName()">Los geht\'s →</button></div>';
    document.body.appendChild(overlay);
    const inp = document.getElementById('nameInput');
    inp.focus();
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') submitName(); });
  }
  window.submitName = function () {
    const v = document.getElementById('nameInput').value.trim();
    DK.get().name = v || 'Studentin';
    DK.save();
    const o = document.querySelector('.profile-modal-overlay');
    if (o) o.remove();
    renderProfileBar();
  };

  /* ---------- exercise checking ---------- */
  function persistExercise(key, value, correct) {
    P.exercises[key] = { value: value, correct: correct };
    DK.save();
    renderProfileBar();
  }
  window.checkAnswer = function (btn) {
    const li = btn.closest('li');
    const input = li.querySelector('input[type="text"]');
    const fb = li.querySelector('.feedback');
    const accepted = input.getAttribute('data-answer').split('|');
    const cs = input.hasAttribute('data-case');
    const ok = accepted.some(function (a) { return DK.deEq(input.value, a, cs); });
    fb.className = 'feedback ' + (ok ? 'correct' : 'wrong');
    fb.textContent = ok ? '✓ Richtig' : '✗ Try again';
    persistExercise(li.getAttribute('data-ex-key'), input.value, ok);
  };
  window.checkSelect = function (btn) {
    const li = btn.closest('li');
    const sel = li.querySelector('select');
    const fb = li.querySelector('.feedback');
    const ok = DK.deEq(sel.value, sel.getAttribute('data-answer'), sel.hasAttribute('data-case'));
    fb.className = 'feedback ' + (ok ? 'correct' : 'wrong');
    fb.textContent = ok ? '✓ Richtig' : '✗ Try again';
    persistExercise(li.getAttribute('data-ex-key'), sel.value, ok);
  };
  function tagAndRestoreExercises() {
    const pane = document.getElementById('lecturePane');
    pane.querySelectorAll('.exercise li').forEach(function (li, idx) {
      const key = 'u' + currentView.unit + '_t' + currentView.page + '_e' + idx;
      li.setAttribute('data-ex-key', key);
      const saved = P.exercises[key];
      const input = li.querySelector('input[type="text"]');
      const sel = li.querySelector('select');
      const fb = li.querySelector('.feedback');
      if (saved) {
        if (input) input.value = saved.value || '';
        if (sel && saved.value) sel.value = saved.value;
        if (fb && saved.correct === true) { fb.textContent = '✓ Richtig'; fb.className = 'feedback correct'; }
        else if (fb && saved.correct === false) { fb.textContent = '✗ Try again'; fb.className = 'feedback wrong'; }
      }
      if (input && !li.querySelector('.check-btn')) {
        input.addEventListener('blur', function () { persistExercise(key, input.value, undefined); });
      }
    });
  }

  /* ---------- der/die/das colouring ---------- */
  const ART = { der: 'g-der', die: 'g-die', das: 'g-das' };
  function colourArticles(root) {
    if (DK.get().display !== 'genders') return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!/\b(der|die|das)\b/i.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (n.parentNode.closest('input, select, textarea, .g-der, .g-die, .g-das')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const targets = [];
    while (walker.nextNode()) targets.push(walker.currentNode);
    targets.forEach(function (node) {
      const frag = document.createDocumentFragment();
      const parts = node.nodeValue.split(/\b(der|die|das)\b/i);
      parts.forEach(function (p, i) {
        if (i % 2 === 1) {
          const s = document.createElement('span');
          s.className = ART[p.toLowerCase()];
          s.textContent = p;
          frag.appendChild(s);
        } else if (p) {
          frag.appendChild(document.createTextNode(p));
        }
      });
      node.parentNode.replaceChild(frag, node);
    });
  }
  const GENDER_KEY = '<p class="gender-key"><span class="k-der">der · masculine</span>' +
    '<span class="k-die">die · feminine / plural</span><span class="k-das">das · neuter</span></p>';

  /* ---------- rendering ---------- */
  function renderAll() { renderProfileBar(); renderSidebar(); renderLecture(); }

  function unitHasContent(u) {
    return units[u].topics.some(function (t) { return t.explanation || t.exercises; });
  }
  function renderSidebar() {
    const nav = document.getElementById('courseNav');
    const active = courseIndexOf(currentView);
    let h = '';
    COURSE.forEach(function (c, ci) {
      const on = ci === active ? ' active' : '';
      if (c.kind === 'unit') {
        const total = unitPageCount(c.unit);
        let seen = 0;
        for (let p = 0; p < total; p++) if (P.pages['u' + c.unit + '_p' + p]) seen++;
        const meta = unitHasContent(c.unit) ? seen + ' / ' + total + ' pages' : units[c.unit].topics.length + ' topics · outline only';
        h += '<button class="nav-item' + on + '" onclick="goCourse(' + ci + ')">' +
          '<span class="ni-title">' + units[c.unit].title + '</span>' +
          '<span class="ni-meta">' + meta + '</span>' +
          '<span class="ni-bar"><span style="width:' + Math.round(seen / total * 100) + '%"></span></span></button>';
      } else {
        const res = P.checkpoints[c.cp.id];
        const ready = c.cp.units.some(unitHasContent);
        h += '<button class="nav-item cp' + on + '" onclick="goCourse(' + ci + ')">' +
          '<span class="ni-title">🏁 ' + cpTitle(c.cp) + '</span>' +
          '<span class="ni-meta">' + (res ? 'Best score: ' + res.best + '%' : (ready ? 'Mixed exercises · not tried yet' : 'Waiting for unit content')) + '</span></button>';
      }
    });
    nav.innerHTML = h;
  }

  function navHtml(dots, prevOff, nextLabel, nextOff) {
    return '<div class="lecture-nav">' +
      '<button onclick="lecturePrev()" ' + (prevOff ? 'disabled' : '') + '>◀ Zurück</button>' +
      '<div class="lecture-dots">' + dots + '</div>' +
      '<button onclick="lectureNext()" ' + (nextOff ? 'disabled' : '') + '>' + nextLabel + ' ▶</button></div>';
  }
  function nextLabelFor(isLast) {
    if (!isLast) return 'Weiter';
    const nxt = COURSE[courseIndexOf(currentView) + 1];
    if (!nxt) return 'Weiter';
    return nxt.kind === 'cp' ? 'Checkpoint' : 'Next unit';
  }
  function pendingBox(what, extra) {
    return '<div class="pending-box"><span class="pb-ico">🚧</span><strong>' + esc(what) + '</strong>' +
      '<p>Not written yet — this page is part of the course outline.</p>' + (extra || '') + '</div>';
  }
  function listBlock(title, items) {
    if (!items || !items.length) return '';
    return '<div class="lecture-block"><h4>' + title + '</h4><ul class="goals">' +
      items.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
  }

  function renderLecture() {
    if (currentView.kind === 'cp') renderCheckpoint(currentView.cp);
    else renderUnitPage();
  }
  function renderUnitPage() {
    const pane = document.getElementById('lecturePane');
    const u = currentView.unit, page = currentView.page;
    const unit = units[u];
    const pages = unitPageList(u);
    const totalPages = pages.length;
    const spec = pages[page];
    P.pages['u' + u + '_p' + page] = true;

    let html = '<div class="lecture-crumb">' + esc(unit.subject || '') + ' · Page ' + (page + 1) + ' of ' + totalPages + '</div>';
    html += '<h3 class="lecture-title">' + spec.icon + ' ' + spec.title + '</h3>';

    if (spec.kind === 'topic') html += topicHtml(u, spec.idx);
    else if (spec.kind === 'drill') html += drillHtml(unit);
    else if (spec.kind === 'reading') html += readingHtml(u, unit);
    else if (spec.kind === 'listening') html += listeningHtml(u, unit);
    else if (spec.kind === 'writing') html += writingHtml(u, unit);
    else if (spec.kind === 'flash') html += flashHtml(u, unit);
    else if (spec.kind === 'culture') {
      html += unit.culture ? '<div class="culture-box">' + unit.culture + '</div>'
        : pendingBox('Culture notes for ' + unit.subject);
    } else if (spec.kind === 'recap') {
      html += unit.recap ? recapHtml(u) : pendingBox('Vocabulary recap for ' + unit.subject,
        '<p class="note">Collects every word from this unit, with 🔊 audio and a hide-English self-test.</p>');
      html += listBlock('🎯 Can-do goals (CEFR)', unit.canDo);
      html += listBlock('🧩 Grammar introduced here', unit.grammarFocus);
    }

    let dots = '';
    pages.forEach(function (pg, i) {
      const cls = (i === page ? 'active ' : '') + (pg.kind === 'culture' ? 'culture-dot ' : '') + (pg.kind === 'recap' ? 'recap-dot' : '');
      dots += '<span class="' + cls + '" onclick="openLecture(' + u + ',' + i + ')" title="' + esc(pg.title) + '"></span>';
    });
    const isLast = page === totalPages - 1;
    const ci = courseIndexOf(currentView);
    html += navHtml(dots, page === 0 && ci === 0, nextLabelFor(isLast), isLast && ci === COURSE.length - 1);

    pane.innerHTML = html;
    pane.scrollTop = 0;
    colourArticles(pane);
    tagAndRestoreExercises();
    if (spec.kind === 'writing') mountWriting(u, unit);
    if (spec.kind === 'flash') mountFlash(u, unit);
    DK.save();
    renderSidebar();
  }

  /* ---------- page: a topic lesson ---------- */
  /* ---------- explanation language: English or Deutsch ----------
     German text lives in data/explain-de.js, keyed level -> unit -> topic index,
     written at the German level of the course it belongs to (A1 German is simple
     present-tense sentences; B2 German is the real register). Anything without a
     German version falls back to English, with a visible note. */
  function wantsGerman() { return DK.get().explainLang === 'de'; }
  function deText(u, kind, idx) {
    const lv = (window.DE_TEXT || {})[code];
    const un = lv && lv[u];
    if (!un) return null;
    return kind === 'topic' ? ((un.topics || [])[idx] || null) : (un[kind] || null);
  }

  function topicHtml(u, idx) {
    const t = units[u].topics[idx];
    if (!t.explanation && !t.exercises) {
      return pendingBox('Lesson: ' + t.title,
        (t.note ? '<p class="note">Planned: ' + esc(t.note) + '</p>' : '') +
        '<p class="note">Will hold: explanation · vocabulary · grammar · dialog · exercises</p>');
    }
    let h = '';
    if (t.explanation) {
      const de = wantsGerman() ? deText(u, 'topic', idx) : null;
      if (de) {
        h += '<div class="lecture-block"><h4>📖 Erklärung <span class="script-tag">auf Deutsch · ' + LEVEL.label + '</span></h4>' + de + '</div>';
      } else {
        h += '<div class="lecture-block"><h4>📖 Explanation' +
          (wantsGerman() ? ' <span class="script-tag">deutsche Fassung fehlt noch</span>' : '') + '</h4>' + t.explanation + '</div>';
      }
    }
    if (t.vocab) h += '<div class="lecture-block"><h4>📚 Vocabulary</h4>' + t.vocab + (DK.get().display === 'genders' ? GENDER_KEY : '') + '</div>';
    if (t.grammar) h += '<div class="lecture-block"><h4>✏️ Grammar</h4>' + t.grammar + '</div>';
    if (t.dialogs) h += '<div class="lecture-block"><h4>💬 Dialog</h4>' + t.dialogs + '</div>';
    if (t.exercises) h += '<div class="lecture-block"><h4>📝 Exercises</h4>' + t.exercises + '</div>';
    return h;
  }

  /* ---------- page: unit-wide practice ---------- */
  function drillHtml(unit) {
    if (!unit.exercises) {
      return pendingBox('Unit practice for ' + unit.subject,
        '<p class="note">Mixed exercises over everything in this unit, separate from the drills inside each lesson.</p>');
    }
    return '<div class="skill-intro">Everything from this unit in one place — the lessons are done, now use them together.</div>' +
      (unit.drillIntro ? '<div class="lecture-block">' + unit.drillIntro + '</div>' : '') +
      '<div class="lecture-block">' + unit.exercises + '</div>';
  }

  /* ---------- page: reading ---------- */
  function readingHtml(u, unit) {
    const r = unit.reading;
    if (!r) {
      return pendingBox('Reading task for ' + unit.subject,
        '<p class="note">A text at ' + LEVEL.label + ' level with comprehension questions.</p>');
    }
    let h = '';
    const rIntro = (wantsGerman() && deText(u, 'reading')) || r.intro;
    if (rIntro) h += '<div class="skill-intro">' + rIntro + '</div>';
    h += '<div class="skill-meta"><span>📖 ' + (r.words || '—') + ' words</span><span>⏱ ' + (r.minutes || '—') + ' min</span>' +
      '<span>❓ ' + countIn(r.questions) + ' questions</span><span>📊 ' + LEVEL.label + '</span></div>';
    h += '<div class="lecture-block">' + r.text + '</div>';
    if (r.glossary) h += '<div class="lecture-block"><h4>📚 Wortschatz zum Text</h4>' + r.glossary + '</div>';
    h += '<div class="lecture-block"><h4>❓ Fragen zum Text</h4>' + r.questions + '</div>';
    return h;
  }

  /* ---------- page: listening ---------- */
  function listeningHtml(u, unit) {
    const l = unit.listening;
    if (!l) {
      return pendingBox('Listening task for ' + unit.subject,
        '<p class="note">A spoken text with comprehension questions. The browser voice reads it, so no audio files are needed.</p>');
    }
    let h = '';
    const lIntro = (wantsGerman() && deText(u, 'listening')) || l.intro;
    if (lIntro) h += '<div class="skill-intro">' + lIntro + '</div>';
    h += '<div class="skill-meta"><span>🎧 ' + (l.lines ? l.lines.length : 0) + ' turns</span>' +
      '<span>❓ ' + countIn(l.questions) + ' questions</span><span>📊 ' + LEVEL.label + '</span></div>';
    h += '<div class="audio-bar">' +
      '<button onclick="playListening()" id="btnPlay">▶ Abspielen</button>' +
      '<button class="ghost" onclick="playListening(0.75)">🐢 Langsamer</button>' +
      '<button class="ghost" onclick="stopListening()">⏹ Stopp</button>' +
      '<span class="a-status" id="aStatus">not playing</span></div>';
    h += '<p class="audio-note">Spoken by your browser\'s German voice. Listen first with the transcript closed — open it only to check.</p>';
    h += '<details class="transcript"><summary>📄 Transkript anzeigen</summary>' +
      dialogBoxFromLines(l.title, l.lines) + '</details>';
    h += '<div class="lecture-block"><h4>❓ Fragen zum Hörtext</h4>' + l.questions + '</div>';
    return h;
  }
  function dialogBoxFromLines(title, lines) {
    let h = '<div class="dialog-box"><h4>' + esc(title || 'Transkript') + '</h4>';
    (lines || []).forEach(function (l, i) {
      h += '<p class="dialog-line" id="aLine' + i + '"><span class="speaker">' + esc(l[0]) + '</span>' + l[1] + '</p>';
    });
    return h + '</div>';
  }

  /* ---------- page: writing ---------- */
  function writingHtml(u, unit) {
    const w = unit.writing;
    if (!w) {
      return pendingBox('Writing task for ' + unit.subject,
        '<p class="note">A ' + LEVEL.label + '-level writing task, corrected against the CEFR criteria for this level.</p>');
    }
    let h = '<div class="writing-task"><h5>' + esc(w.title) + '</h5>' + w.task;
    if (w.bullets && w.bullets.length) {
      h += '<ul>' + w.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>';
    }
    h += '</div>';
    h += '<div class="skill-meta"><span>✍️ ' + w.minWords + '–' + w.maxWords + ' words</span>' +
      '<span>⏱ ' + (w.minutes || '—') + ' min</span><span>📊 ' + LEVEL.label + '</span>' +
      (w.textType ? '<span>📄 ' + esc(w.textType) + '</span>' : '') + '</div>';
    if (w.usefulPhrases) h += '<div class="lecture-block"><h4>🧰 Redemittel — useful phrases</h4>' + w.usefulPhrases + '</div>';
    h += '<div class="lecture-block"><h4>📝 Dein Text</h4><div class="writing-wrap">' +
      '<textarea id="wText" placeholder="Schreib deinen Text hier…"></textarea>' +
      '<div class="writing-bar">' +
      '<span class="wc" id="wCount">0 words</span>' +
      '<button class="check-btn" onclick="localCheck()" id="wLocal">🔍 Sofort-Check</button>' +
      '<button class="check-btn" onclick="judgeWriting()" id="wJudge">🤖 Check with AI</button>' +
      '<button class="reset-btn" onclick="JUDGE.askKey()" title="Choose how correction works">⚙️</button>' +
      '<button class="reset-btn" onclick="clearWriting()">Clear</button>' +
      '<span class="judge-status" id="wStatus"></span>' +
      '</div></div></div>';
    h += '<div id="wLocalReport"></div><div id="wFeedback"></div>';
    if (w.criteria) {
      h += '<div class="lecture-block"><h4>✅ Selbstkontrolle — check before you submit</h4><div class="self-check" id="wSelf">' +
        w.criteria.map(function (c, i) {
          return '<label><input type="checkbox" data-self="' + i + '"> <span>' + c + '</span></label>';
        }).join('') + '</div></div>';
    }
    return h;
  }

  /* ---------- page: flashcards ---------- */
  function flashHtml(u, unit) {
    if (!unit.recap) {
      return pendingBox('Flashcards for ' + unit.subject,
        '<p class="note">Built automatically from this unit\'s vocabulary recap — nothing to author separately.</p>');
    }
    return '<div class="skill-intro">Every word from this unit as a card. Flip it, judge yourself honestly, and come back to the ones you marked <em>Nochmal</em>.</div>' +
      '<div class="fc-wrap" id="fcBody"></div>';
  }

  /* =========================================================
     Listening playback — the browser's German voice reads the
     script line by line and highlights the line being spoken.
     ========================================================= */
  let audioOn = false;
  window.playListening = function (rate) {
    const l = units[currentView.unit].listening;
    if (!l) return;
    const status = document.getElementById('aStatus');
    const btn = document.getElementById('btnPlay');
    if (!DK.hasVoice()) { if (status) status.textContent = 'no speech voice in this browser'; return; }
    audioOn = true;
    if (btn) btn.disabled = true;
    DK.speakLines(
      l.lines.map(function (x) { return x[1]; }), rate,
      function (i) {
        document.querySelectorAll('.dialog-line.speaking').forEach(function (e) { e.classList.remove('speaking'); });
        const el = document.getElementById('aLine' + i);
        if (el) el.classList.add('speaking');
        if (status) status.textContent = 'playing ' + (i + 1) + ' / ' + l.lines.length;
      },
      function (how) {
        audioOn = false;
        if (btn) btn.disabled = false;
        document.querySelectorAll('.dialog-line.speaking').forEach(function (e) { e.classList.remove('speaking'); });
        if (status) status.textContent = how === 'done' ? 'finished — play it again if you need to' : 'stopped';
      }
    );
  };
  window.stopListening = function () {
    DK.stopSpeaking();
    audioOn = false;
    const btn = document.getElementById('btnPlay');
    if (btn) btn.disabled = false;
    const status = document.getElementById('aStatus');
    if (status) status.textContent = 'stopped';
  };

  /* =========================================================
     Writing — a saved draft plus AI correction (see judge.js)
     ========================================================= */
  function wKey(u) { return 'u' + u; }
  function countWords(t) { return (t.trim().match(/[\p{L}\p{N}'’-]+/gu) || []).length; }
  function updateWordCount(u) {
    const w = units[u].writing;
    const ta = document.getElementById('wText');
    const el = document.getElementById('wCount');
    if (!ta || !el) return;
    const n = countWords(ta.value);
    el.textContent = n + ' words (' + w.minWords + '–' + w.maxWords + ')';
    el.className = 'wc' + (n > w.maxWords ? ' over' : (n >= w.minWords ? ' ok' : ''));
  }
  function mountWriting(u, unit) {
    if (!unit.writing) return;
    const ta = document.getElementById('wText');
    const saved = P.writing[wKey(u)];
    if (saved && saved.text) ta.value = saved.text;
    updateWordCount(u);
    let t = null;
    ta.addEventListener('input', function () {
      updateWordCount(u);
      clearTimeout(t);
      t = setTimeout(function () {
        P.writing[wKey(u)] = Object.assign({}, P.writing[wKey(u)], { text: ta.value, date: new Date().toISOString() });
        DK.save();
      }, 600);
    });
    document.querySelectorAll('#wSelf input[data-self]').forEach(function (cb) {
      const store = P.selfCheck[wKey(u)] || {};
      cb.checked = !!store[cb.getAttribute('data-self')];
      cb.addEventListener('change', function () {
        const s2 = P.selfCheck[wKey(u)] || (P.selfCheck[wKey(u)] = {});
        s2[cb.getAttribute('data-self')] = cb.checked;
        DK.save();
      });
    });
    if (saved && saved.text && countWords(saved.text) >= 10) localCheck();
    if (saved && saved.feedback) renderFeedback(saved.feedback);
    else if (!JUDGE.configured()) {
      document.getElementById('wFeedback').innerHTML = JUDGE.setupHtml();
    }
  }
  window.clearWriting = function () {
    if (!confirm('Clear your draft and its feedback for this unit?')) return;
    const ta = document.getElementById('wText');
    ta.value = '';
    delete P.writing[wKey(currentView.unit)];
    DK.save();
    document.getElementById('wFeedback').innerHTML = '';
    document.getElementById('wLocalReport').innerHTML = '';
    updateWordCount(currentView.unit);
  };
  function writingCtx() {
    const u = currentView.unit, unit = units[u], w = unit.writing;
    return {
      level: LEVEL.label, levelCode: code,
      unit: unit.subject, grammarFocus: unit.grammarFocus || [],
      task: w.plainTask || w.title, textType: w.textType || '',
      minWords: w.minWords, maxWords: w.maxWords,
      expect: w.expect || [],
      text: (document.getElementById('wText') || {}).value || ''
    };
  }
  // Always available: mechanical checks in the browser, no account, no network.
  window.localCheck = function () {
    const ctx = writingCtx();
    if (countWords(ctx.text) < 10) {
      document.getElementById('wStatus').textContent = 'Write a bit more first.';
      return null;
    }
    const r = CHECKER.run(ctx);
    document.getElementById('wLocalReport').innerHTML = CHECKER.reportHtml(r, ctx);
    return r;
  };
  window.onJudgeConfigChanged = function () {
    const box = document.getElementById('wFeedback');
    if (box) box.innerHTML = JUDGE.configured() ? '' : JUDGE.setupHtml();
  };
  window.onManualFeedback = function (f) {
    const u = currentView.unit;
    P.writing[wKey(u)] = Object.assign({}, P.writing[wKey(u)], { feedback: f, date: new Date().toISOString() });
    DK.save();
    renderFeedback(f);
  };
  window.judgeWriting = async function () {
    const u = currentView.unit, unit = units[u];
    const status = document.getElementById('wStatus');
    const btn = document.getElementById('wJudge');
    const ctx = writingCtx();
    const text = ctx.text.trim();
    if (countWords(text) < 20) { status.textContent = 'Write a bit more first — at least 20 words.'; return; }
    localCheck();                       // the free check always runs first
    P.writing[wKey(u)] = Object.assign({}, P.writing[wKey(u)], { text: text });
    DK.save();

    if (JUDGE.isManual()) {             // no API at all: build the prompt to paste elsewhere
      JUDGE.rememberPrompt(ctx);
      document.getElementById('wFeedback').innerHTML = JUDGE.manualHtml(ctx);
      status.textContent = '';
      return;
    }
    btn.disabled = true;
    status.textContent = '🤖 Reading your text…';
    try {
      const feedback = await JUDGE.check(ctx);
      P.writing[wKey(u)] = { text: text, feedback: feedback, date: new Date().toISOString() };
      DK.save();
      renderFeedback(feedback);
      status.textContent = 'checked ' + new Date().toLocaleTimeString();
    } catch (e) {
      if (e && e.code === 'manual') {
        JUDGE.rememberPrompt(ctx);
        document.getElementById('wFeedback').innerHTML = JUDGE.manualHtml(ctx);
      } else {
        document.getElementById('wFeedback').innerHTML = JUDGE.errorHtml(e);
      }
      status.textContent = '';
    }
    btn.disabled = false;
  };
  function renderFeedback(f) {
    const box = document.getElementById('wFeedback');
    if (!box) return;
    let h = '<div class="feedback-panel">';
    h += '<h5>🤖 Feedback <span class="verdict-badge">' + esc(f.level_estimate || LEVEL.label) + '</span></h5>';
    if (f.verdict) h += '<p>' + esc(f.verdict) + '</p>';
    if (f.scores) {
      h += '<div class="criteria">' + Object.keys(f.scores).map(function (k) {
        const v = f.scores[k];
        return '<div class="criterion"><div class="c-name">' + esc(k.replace(/_/g, ' ')) + '</div>' +
          '<div class="c-score">' + esc(String(v && v.score !== undefined ? v.score : v)) + ' / 5</div>' +
          (v && v.note ? '<div class="c-note">' + esc(v.note) + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }
    if (f.strengths && f.strengths.length) {
      h += '<p><strong>Das war gut:</strong></p><ul class="goals">' +
        f.strengths.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    }
    if (f.corrections && f.corrections.length) {
      h += '<p><strong>Korrekturen:</strong></p><ul class="corr-list">' + f.corrections.map(function (c) {
        return '<li><span class="corr-bad">' + esc(c.original) + '</span> → <span class="corr-good">' + esc(c.corrected) + '</span>' +
          (c.why ? '<span class="corr-why">' + esc(c.why) + '</span>' : '') + '</li>';
      }).join('') + '</ul>';
    }
    if (f.improvements && f.improvements.length) {
      h += '<p><strong>Daran arbeiten:</strong></p><ul class="goals">' +
        f.improvements.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    }
    if (f.improved_version) {
      h += '<p><strong>Eine überarbeitete Fassung:</strong></p><div class="improved">' +
        esc(f.improved_version).replace(/\n/g, '<br>') + '</div>';
    }
    h += '</div>';
    box.innerHTML = h;
    colourArticles(box);
  }

  /* =========================================================
     Flashcards — built from the unit's vocabulary recap
     ========================================================= */
  let FC = null;
  function fcStore(u) {
    const k = 'u' + u;
    if (!P.flash[k]) P.flash[k] = { known: {}, again: {} };
    return P.flash[k];
  }
  function fcDeck(u) {
    const out = [];
    (units[u].recap || []).forEach(function (g) {
      g.rows.forEach(function (r) { out.push({ de: r[0], en: r[1], group: g.group || '' }); });
    });
    return out;
  }
  function mountFlash(u, unit) {
    if (!unit.recap) return;
    const all = fcDeck(u);
    FC = {
      u: u, all: all, deck: all.slice(), i: 0, flipped: false,
      dir: (FC && FC.dir) || 'de2en',
      onlyUnknown: false, shuffled: false
    };
    drawFlash();
  }
  function fcApplyFilter() {
    const st = fcStore(FC.u);
    FC.deck = FC.all.filter(function (c) { return !FC.onlyUnknown || !st.known[c.de]; });
    if (FC.shuffled) FC.deck = DK.shuffle(FC.deck);
    if (!FC.deck.length) FC.deck = FC.all.slice();
    FC.i = 0;        // a re-filtered deck starts at the beginning
    FC.flipped = false;
  }
  function drawFlash() {
    const box = document.getElementById('fcBody');
    if (!box || !FC) return;
    const st = fcStore(FC.u);
    const c = FC.deck[FC.i];
    const known = Object.keys(st.known).filter(function (k) { return st.known[k]; }).length;
    const again = Object.keys(st.again).filter(function (k) { return st.again[k]; }).length;
    const front = FC.dir === 'de2en' ? c.de : c.en;
    const back = FC.dir === 'de2en' ? c.en : c.de;
    box.innerHTML =
      '<div class="fc-count">' + (FC.i + 1) + ' / ' + FC.deck.length + (c.group ? ' · ' + esc(c.group) : '') + '</div>' +
      '<button class="fc-card' + (FC.flipped ? ' flipped' : '') + '" onclick="fcFlip()" aria-label="Flip card">' +
      (FC.flipped
        ? '<span class="fc-back">' + esc(back) + '</span><span class="fc-sub">' + esc(front) + '</span>' +
          '<span class="fc-hint">tap to flip back</span>'
        : '<span class="fc-front">' + esc(front) + '</span>' +
          '<span class="fc-sub">' + (FC.dir === 'de2en' ? 'What does it mean?' : 'How do you say it in German?') + '</span>' +
          '<span class="fc-hint">tap the card to flip it</span>') +
      '</button>' +
      '<div class="fc-judge">' +
      '<button class="again' + (st.again[c.de] ? ' on' : '') + '" onclick="fcMark(false)">↻ Nochmal</button>' +
      '<button class="know' + (st.known[c.de] ? ' on' : '') + '" onclick="fcMark(true)">✓ Kann ich</button>' +
      '<button class="spk" data-say="' + esc(c.de) + '" title="Anhören">🔊</button>' +
      '</div>' +
      '<div class="fc-nav">' +
      '<button class="check-btn" onclick="fcNav(-1)"' + (FC.i === 0 ? ' disabled' : '') + '>◀ Zurück</button>' +
      '<button class="check-btn" onclick="fcNav(1)"' + (FC.i >= FC.deck.length - 1 ? ' disabled' : '') + '>Weiter ▶</button>' +
      '</div>' +
      '<div class="fc-opts">' +
      '<label><input type="checkbox" ' + (FC.dir === 'en2de' ? 'checked' : '') + ' onchange="fcDir(this.checked)"> English → Deutsch</label>' +
      '<label><input type="checkbox" ' + (FC.shuffled ? 'checked' : '') + ' onchange="fcShuffle(this.checked)"> Shuffle</label>' +
      '<label><input type="checkbox" ' + (FC.onlyUnknown ? 'checked' : '') + ' onchange="fcOnlyUnknown(this.checked)"> Only the ones I do not know</label>' +
      '</div>' +
      '<div class="fc-stats"><span>✓ Kann ich: <b>' + known + '</b> / ' + FC.all.length + '</span>' +
      '<span>↻ Nochmal: <b>' + again + '</b></span></div>';
  }
  window.fcFlip = function () { FC.flipped = !FC.flipped; drawFlash(); };
  window.fcNav = function (d) {
    const n = FC.i + d;
    if (n < 0 || n >= FC.deck.length) return;
    FC.i = n; FC.flipped = false; drawFlash();
  };
  window.fcMark = function (knows) {
    const st = fcStore(FC.u), c = FC.deck[FC.i];
    if (knows) { st.known[c.de] = true; delete st.again[c.de]; }
    else { st.again[c.de] = true; delete st.known[c.de]; }
    DK.save();
    if (FC.i < FC.deck.length - 1) { FC.i++; FC.flipped = false; }
    drawFlash();
  };
  window.fcDir = function (on) { FC.dir = on ? 'en2de' : 'de2en'; FC.flipped = false; drawFlash(); };
  window.fcShuffle = function (on) { FC.shuffled = on; fcApplyFilter(); drawFlash(); };
  window.fcOnlyUnknown = function (on) { FC.onlyUnknown = on; fcApplyFilter(); drawFlash(); };

  /* ---------- vocabulary recap ---------- */
  function recapHtml(u) {
    const groups = units[u].recap;
    let count = 0;
    groups.forEach(function (g) { count += g.rows.length; });
    let h = '<p class="recap-intro">Everything from <strong>' + esc(units[u].subject) + '</strong> — ' + count +
      ' words and phrases in one place. Tap 🔊 to hear it spoken.</p>';
    h += '<label class="recap-toggle"><input type="checkbox" onchange="document.getElementById(\'recapTbl\').classList.toggle(\'hide-en\', this.checked)"> Hide English (hover to peek) — test yourself</label>';
    h += '<div id="recapTbl">';
    groups.forEach(function (g) {
      if (g.group) h += '<h3 class="sub">' + g.group + '</h3>';
      h += '<table class="vocab recap"><tr><th></th><th>Deutsch</th><th>English</th></tr>';
      g.rows.forEach(function (r) {
        h += '<tr><td class="spk-cell"><button class="spk" data-say="' + esc(r[0]) + '" title="Anhören">🔊</button></td>' +
          '<td>' + r[0] + '</td><td class="en-cell">' + r[1] + '</td></tr>';
      });
      h += '</table>';
    });
    h += '</div>';
    const nxt = COURSE[courseIndexOf(currentView) + 1];
    if (nxt) {
      h += '<div class="recap-done">🎉 Unit complete! Next up: <strong>' +
        (nxt.kind === 'cp' ? cpTitle(nxt.cp) : esc(units[nxt.unit].title)) + '</strong>.</div>';
    } else {
      h += '<div class="recap-done">🎉 That is all of ' + LEVEL.label + '. Gut gemacht!</div>';
    }
    return h;
  }
  document.addEventListener('click', function (e) {
    const b = e.target.closest && e.target.closest('.spk');
    if (b && b.getAttribute('data-say')) DK.speak(b.getAttribute('data-say'));
  });

  /* =========================================================
     CHECKPOINTS — mixed exercises over the last three units
     ========================================================= */
  function poolFor(unitIdxs) {
    const seen = {}, pool = [];
    unitIdxs.forEach(function (u) {
      (units[u].recap || []).forEach(function (g) {
        g.rows.forEach(function (r) {
          const de = r[0], key = DK.fold(de);
          if (/[+_/]/.test(de) || seen[key]) return;
          seen[key] = true;
          const art = (de.match(/^(der|die|das)\s+(.+)$/i) || [])[1];
          pool.push({ de: de, en: r[1], article: art ? art.toLowerCase() : null, noun: art ? de.replace(/^\w+\s+/, '') : null });
        });
      });
    });
    return pool;
  }
  function sentencesFor(unitIdxs) {
    const out = [];
    unitIdxs.forEach(function (u) { (units[u].sentences || []).forEach(function (s) { out.push(s); }); });
    return out;
  }
  let CP = null;

  function buildCheckpoint(def) {
    const pool = shuffle(poolFor(def.units));
    const used = {};
    function take(n, filter) {
      const out = [];
      for (let i = 0; i < pool.length && out.length < n; i++) {
        const e = pool[i];
        if (used[e.de] || (filter && !filter(e, out))) continue;
        used[e.de] = true;
        out.push(e);
      }
      return out;
    }
    const qs = [];
    take(2).forEach(function (e) { qs.push({ type: 'mc_de2en', e: e }); });
    take(2).forEach(function (e) { qs.push({ type: 'mc_en2de', e: e }); });
    take(3, function (e) { return !!e.article; }).forEach(function (e) { qs.push({ type: 'article', e: e }); });
    if (window.speechSynthesis) take(2).forEach(function (e) { qs.push({ type: 'listen', e: e }); });
    take(2).forEach(function (e) { qs.push({ type: 'tf', e: e }); });
    take(2, function (e) { return e.de.length <= 24; }).forEach(function (e) { qs.push({ type: 'type', e: e }); });
    shuffle(sentencesFor(def.units)).slice(0, 2).forEach(function (s) { qs.push({ type: 'wordorder', s: s }); });
    const m = take(4, function (e, out) { return !out.some(function (o) { return DK.fold(o.en) === DK.fold(e.en); }); });
    if (m.length) qs.push({ type: 'match', es: m });

    qs.forEach(function (q) {
      q.points = q.type === 'match' ? q.es.length : 1;
      q.done = false;
      if (q.type === 'mc_de2en' || q.type === 'mc_en2de' || q.type === 'listen') {
        const others = shuffle(pool.filter(function (o) {
          return o.de !== q.e.de && DK.fold(o.en) !== DK.fold(q.e.en);
        })).filter(function (o, i, arr) {
          return arr.findIndex(function (x) { return DK.fold(x.en) === DK.fold(o.en); }) === i;
        }).slice(0, 3);
        q.opts = shuffle(others.concat([q.e]));
        q.correct = q.opts.indexOf(q.e);
      } else if (q.type === 'article') {
        q.opts = ['der', 'die', 'das'];
        q.correct = q.opts.indexOf(q.e.article);
      } else if (q.type === 'tf') {
        q.isTrue = Math.random() < 0.5;
        const wrong = shuffle(pool.filter(function (o) { return DK.fold(o.en) !== DK.fold(q.e.en); }))[0];
        q.shownEn = (q.isTrue || !wrong) ? q.e.en : wrong.en;
        if (!wrong) q.isTrue = true;
        q.correct = q.isTrue ? 0 : 1;
      } else if (q.type === 'wordorder') {
        q.tiles = q.s.de.replace(/\s+/g, ' ').trim().split(' ');
        let order, guard = 0;
        do { order = shuffle(q.tiles.map(function (_, i) { return i; })); guard++; }
        while (guard < 20 && order.every(function (v, i) { return v === i; }));
        q.order = order;
        q.picked = [];
      }
    });
    CP = { def: def, qs: qs, right: 0, done: 0, total: qs.reduce(function (s, q) { return s + q.points; }, 0), finished: false };
  }

  const CP_GROUPS = [
    ['mc_de2en', '🔤 Multiple choice — German → English'],
    ['mc_en2de', '🔁 Multiple choice — English → German'],
    ['article',  '🎨 der, die or das?'],
    ['listen',   '🔊 Listening — hear it, pick it'],
    ['tf',       '✅ True or false'],
    ['type',     '⌨️ Typing — write it in German'],
    ['wordorder','🧩 Satzbau — put the words in order'],
    ['match',    '🔗 Matching']
  ];

  function renderCheckpoint(def) {
    const pane = document.getElementById('lecturePane');
    const ci = courseIndexOf(currentView);
    if (!def.units.some(unitHasContent) && !poolFor(def.units).length) {
      pane.innerHTML = '<div class="lecture-crumb">Checkpoint · mixed exercises</div>' +
        '<h3 class="lecture-title">🏁 ' + cpTitle(def) + '</h3>' +
        pendingBox(cpTitle(def),
          '<p class="note">Builds itself automatically from the vocabulary recaps of Units ' +
          (def.units[0] + 1) + '–' + (def.units[def.units.length - 1] + 1) +
          ': multiple choice both ways, der/die/das, listening, true-or-false, typing, Satzbau and matching.</p>') +
        '<div class="lecture-nav"><button onclick="lecturePrev()">◀ Zurück</button>' +
        '<div class="lecture-dots"></div>' +
        '<button onclick="lectureNext()" ' + (ci === COURSE.length - 1 ? 'disabled' : '') + '>Weiter ▶</button></div>';
      renderSidebar();
      return;
    }
    if (!CP || CP.def.id !== def.id) buildCheckpoint(def);
    const unitsLabel = def.units.map(function (u) { return 'Unit ' + (u + 1); }).join(', ');
    let h = '<div class="lecture-crumb">Checkpoint · mixed exercises</div>';
    h += '<h3 class="lecture-title">🏁 ' + cpTitle(def) + '</h3>';
    h += '<p class="recap-intro">A different mix every time, drawn from the vocabulary of ' + unitsLabel +
      '. Press <strong>New set</strong> for fresh questions.</p>';
    h += '<div class="cp-score" id="cpScore"></div>';
    CP_GROUPS.forEach(function (g) {
      const items = [];
      CP.qs.forEach(function (q, qi) { if (q.type === g[0]) items.push(qi); });
      if (!items.length) return;
      h += '<div class="lecture-block"><h4>' + g[1] + '</h4>';
      items.forEach(function (qi) { h += '<div class="q" id="cpq' + qi + '">' + questionHtml(qi) + '</div>'; });
      h += '</div>';
    });
    h += '<div id="cpResult"></div>';
    h += '<div class="lecture-nav">' +
      '<button onclick="lecturePrev()">◀ Zurück</button>' +
      '<button class="alt" onclick="newCheckpointSet()">🔄 New set</button>' +
      '<button onclick="lectureNext()" ' + (ci === COURSE.length - 1 ? 'disabled' : '') + '>Weiter ▶</button></div>';
    pane.innerHTML = h;
    pane.scrollTop = 0;
    CP.qs.forEach(function (q, qi) { if (q.type === 'wordorder') drawWordOrder(qi); });
    updateCpScore();
    renderSidebar();
  }
  window.newCheckpointSet = function () { CP = null; renderCheckpoint(currentView.cp); };

  function optsHtml(qi, labels) {
    return '<div class="q-opts">' + labels.map(function (l, j) {
      return '<button class="opt" onclick="cpPick(' + qi + ',' + j + ')">' + l + '</button>';
    }).join('') + '</div>';
  }
  function questionHtml(qi) {
    const q = CP.qs[qi];
    if (q.type === 'mc_de2en') {
      return '<div class="q-prompt">What does <span class="q-de">' + esc(q.e.de) + '</span> mean?</div>' +
        optsHtml(qi, q.opts.map(function (o) { return esc(o.en); }));
    }
    if (q.type === 'mc_en2de') {
      return '<div class="q-prompt">How do you say <span class="q-en">“' + esc(q.e.en) + '”</span> in German?</div>' +
        optsHtml(qi, q.opts.map(function (o) { return esc(o.de); }));
    }
    if (q.type === 'article') {
      return '<div class="q-prompt">Which article? <span class="q-de">___ ' + esc(q.e.noun) + '</span> <span class="note">(' + esc(q.e.en) + ')</span></div>' +
        optsHtml(qi, q.opts);
    }
    if (q.type === 'listen') {
      return '<div class="q-prompt"><button class="spk big" data-say="' + esc(q.e.de) + '">🔊 Play</button> What did you hear?</div>' +
        optsHtml(qi, q.opts.map(function (o) { return esc(o.de); }));
    }
    if (q.type === 'tf') {
      return '<div class="q-prompt"><span class="q-de">' + esc(q.e.de) + '</span> means <span class="q-en">“' + esc(q.shownEn) + '”</span>.</div>' +
        '<div class="q-opts"><button class="opt" onclick="cpPick(' + qi + ',0)">Richtig</button>' +
        '<button class="opt" onclick="cpPick(' + qi + ',1)">Falsch</button></div>';
    }
    if (q.type === 'type') {
      return '<div class="q-prompt">Write in German: <span class="q-en">“' + esc(q.e.en) + '”</span></div>' +
        '<div class="q-row"><input type="text" id="cpin' + qi + '" placeholder="umlauts optional (ue, oe, ae, ss)" ' +
        'onkeydown="if(event.key===\'Enter\')cpType(' + qi + ')"> <button class="check-btn" onclick="cpType(' + qi + ')">Check</button> ' +
        '<span class="feedback" id="cpfb' + qi + '"></span></div>';
    }
    if (q.type === 'wordorder') {
      return '<div class="q-prompt">Build the sentence: <span class="q-en">“' + esc(q.s.en) + '”</span></div>' +
        '<div class="q-body" id="cpsb' + qi + '"></div>';
    }
    if (q.type === 'match') {
      const ens = shuffle(q.es.map(function (e) { return e.en; }));
      let h = '<div class="q-prompt">Match each word to its meaning</div>';
      q.es.forEach(function (e, k) {
        h += '<div class="match-row"><span class="q-de">' + esc(e.de) + '</span><select id="cpm' + qi + '_' + k + '">' +
          '<option value="">— choose —</option>' +
          ens.map(function (x) { return '<option value="' + esc(x) + '">' + esc(x) + '</option>'; }).join('') +
          '</select> <span class="feedback" id="cpmf' + qi + '_' + k + '"></span></div>';
      });
      return h + '<button class="check-btn" onclick="cpMatch(' + qi + ')">Check matches</button>';
    }
    return '';
  }

  function cpMark(qi, pts, right) {
    CP.qs[qi].done = true;
    CP.done += pts;
    CP.right += right;
    updateCpScore();
    if (CP.done >= CP.total && !CP.finished) finishCheckpoint();
  }
  window.cpPick = function (qi, j) {
    const q = CP.qs[qi];
    if (q.done) return;
    document.querySelectorAll('#cpq' + qi + ' .opt').forEach(function (b, k) {
      b.disabled = true;
      if (k === q.correct) b.classList.add('right');
      else if (k === j) b.classList.add('wrong');
    });
    cpMark(qi, 1, j === q.correct ? 1 : 0);
  };
  window.cpType = function (qi) {
    const q = CP.qs[qi];
    if (q.done) return;
    const input = document.getElementById('cpin' + qi), fb = document.getElementById('cpfb' + qi);
    if (!input.value.trim()) return;
    const ok = DK.deEq(input.value, q.e.de);
    input.disabled = true;
    fb.className = 'feedback ' + (ok ? 'correct' : 'wrong');
    fb.textContent = ok ? '✓ Richtig' : '✗ ' + q.e.de;
    cpMark(qi, 1, ok ? 1 : 0);
  };
  window.cpMatch = function (qi) {
    const q = CP.qs[qi];
    if (q.done) return;
    let right = 0;
    q.es.forEach(function (e, k) {
      const sel = document.getElementById('cpm' + qi + '_' + k), fb = document.getElementById('cpmf' + qi + '_' + k);
      const ok = sel.value === e.en;
      if (ok) right++;
      sel.disabled = true;
      fb.className = 'feedback ' + (ok ? 'correct' : 'wrong');
      fb.textContent = ok ? '✓' : '✗ ' + e.en;
    });
    document.querySelector('#cpq' + qi + ' .check-btn').disabled = true;
    cpMark(qi, q.es.length, right);
  };
  function drawWordOrder(qi) {
    const q = CP.qs[qi];
    const box = document.getElementById('cpsb' + qi);
    if (!box) return;
    let h = '<div class="tile-answer">' + (q.picked.length
      ? q.picked.map(function (i) { return '<span class="tile placed">' + esc(q.tiles[i]) + '</span>'; }).join('')
      : '<span class="tile-hint">tap the words in order…</span>') + '</div>';
    h += '<div class="tile-bank">' + q.order.map(function (i) {
      const used = q.picked.indexOf(i) >= 0;
      return '<button class="tile" ' + (used || q.done ? 'disabled' : '') + ' onclick="cpTile(' + qi + ',' + i + ')">' + esc(q.tiles[i]) + '</button>';
    }).join('') + '</div>';
    h += '<div class="q-row"><button class="check-btn" ' + (q.done ? 'disabled' : '') + ' onclick="cpWordOrder(' + qi + ')">Check</button> ' +
      '<button class="reset-btn" ' + (q.done ? 'disabled' : '') + ' onclick="cpTileReset(' + qi + ')">Reset</button> ' +
      '<span class="feedback" id="cpfb' + qi + '"></span></div>';
    box.innerHTML = h;
  }
  window.cpTile = function (qi, i) { const q = CP.qs[qi]; if (q.done) return; q.picked.push(i); drawWordOrder(qi); };
  window.cpTileReset = function (qi) { const q = CP.qs[qi]; if (q.done) return; q.picked = []; drawWordOrder(qi); };
  window.cpWordOrder = function (qi) {
    const q = CP.qs[qi];
    if (q.done || q.picked.length !== q.tiles.length) return;
    const ok = DK.fold(q.picked.map(function (i) { return q.tiles[i]; }).join(' ')) === DK.fold(q.tiles.join(' '));
    q.done = true;
    drawWordOrder(qi);
    const fb = document.getElementById('cpfb' + qi);
    fb.className = 'feedback ' + (ok ? 'correct' : 'wrong');
    fb.textContent = ok ? '✓ Richtig' : '✗ ' + q.s.de;
    q.done = false; // cpMark sets it
    cpMark(qi, 1, ok ? 1 : 0);
  };
  function updateCpScore() {
    const el = document.getElementById('cpScore');
    if (!el || !CP) return;
    const pct = CP.total ? Math.round(CP.right / CP.total * 100) : 0;
    el.innerHTML = '<div class="pb-bar-track"><div class="pb-bar-fill" style="width:' + (CP.total ? CP.done / CP.total * 100 : 0) + '%"></div></div>' +
      '<span>Answered <strong>' + CP.done + ' / ' + CP.total + '</strong> · Correct <strong>' + CP.right + '</strong>' + (CP.done ? ' (' + pct + '%)' : '') + '</span>';
  }
  function finishCheckpoint() {
    CP.finished = true;
    const pct = Math.round(CP.right / CP.total * 100);
    const prev = P.checkpoints[CP.def.id] || {};
    P.checkpoints[CP.def.id] = {
      best: Math.max(prev.best || 0, pct), last: pct, right: CP.right, total: CP.total,
      attempts: (prev.attempts || 0) + 1, date: new Date().toISOString()
    };
    DK.save();
    renderSidebar();
    const msg = pct === 100 ? 'Perfekt! 🎉' : pct >= 70 ? 'Gut gemacht!' : 'Keep practising — review the unit recaps and try a new set.';
    const box = document.getElementById('cpResult');
    box.innerHTML = '<div class="recap-done">🏁 You scored <strong>' + CP.right + ' / ' + CP.total + ' (' + pct + '%)</strong> — best so far ' +
      P.checkpoints[CP.def.id].best + '%. ' + msg + ' <button class="check-btn" onclick="newCheckpointSet()">Try a new set</button></div>';
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ---------- start-up ---------- */
  async function init() {
    if (!LEVEL) {
      document.getElementById('lecturePane').innerHTML =
        '<div class="pending-box"><span class="pb-ico">🤔</span><strong>Unknown level “' + esc(code) + '”</strong>' +
        '<p>Pick a level from the <a href="index.html">course hub</a>.</p></div>';
      return;
    }
    document.title = 'Deutsch ' + LEVEL.label + ' — ' + LEVEL.name;
    const head = document.getElementById('levelHead');
    if (head) {
      head.innerHTML = '<p>Deutschkurs · Level ' + LEVEL.label + '</p><h1>' + esc(LEVEL.name) + '</h1>' +
        '<p>' + esc(LEVEL.goal) + '</p>' +
        '<div class="badges"><span>' + LEVEL.units.length + ' units</span>' +
        '<span>' + LEVEL.units.reduce(function (s, u) { return s + u.topics.length; }, 0) + ' topics</span>' +
        '<span>' + CHECKPOINT_COUNT_LABEL() + '</span><span>Draft outline</span></div>';
    }
    const sw = document.getElementById('levelSwitch');
    if (sw) sw.innerHTML = DK.LEVEL_CODES.map(function (c) {
      const L = (window.LEVELS || {})[c];
      if (!L) return '<span class="soon"><b>' + c.toUpperCase() + '</b><small>planned</small></span>';
      return '<a href="course.html?level=' + c + '"' + (c === code ? ' aria-current="page"' : '') + '><b>' + L.label +
        '</b><small>' + L.units.length + ' units</small></a>';
    }).join('');

    await DK.load();
    P = DK.level(code);
    document.body.classList.toggle('genders-off', DK.get().display !== 'genders');
    if (!DK.get().name) showNamePrompt();
    let view = { kind: 'unit', unit: 0, page: 0 };
    const cp = CHECKPOINTS.filter(function (c) { return c.id === P.lastCp; })[0];
    if (cp) view = { kind: 'cp', cp: cp };
    else if (P.lastUnit >= 0 && P.lastUnit < units.length) {
      view = { kind: 'unit', unit: P.lastUnit, page: Math.min(P.lastTopic || 0, unitPageCount(P.lastUnit) - 1) };
    }
    currentView = view;
    renderAll();
  }
  function CHECKPOINT_COUNT_LABEL() { return CHECKPOINTS.length + ' checkpoints'; }

  if (LEVEL) buildStructure();
  document.addEventListener('DOMContentLoaded', init);
})();
