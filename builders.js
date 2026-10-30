/* =========================================================
   Content builders used by the level files in data/.
   Loaded BEFORE them, since a data file calls these while it runs.
   ========================================================= */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  window.vocabTable = function (rows, headers) {
    headers = headers || ['🇩🇪 Deutsch', '🇬🇧 English'];
    let h = '<table class="vocab"><tr>' + headers.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr>';
    rows.forEach(function (r) { h += '<tr>' + r.map(function (x) { return '<td>' + x + '</td>'; }).join('') + '</tr>'; });
    return h + '</table>';
  };
  window.formTable = function (caption, headers, rows) {
    let h = '<table class="vocab"><tr>' + headers.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr>';
    rows.forEach(function (r) { h += '<tr>' + r.map(function (x) { return '<td>' + x + '</td>'; }).join('') + '</tr>'; });
    h += '</table>';
    return caption ? '<h3 class="sub">' + caption + '</h3>' + h : h;
  };
  window.dialogBox = function (title, lines) {
    let h = '<div class="dialog-box"><h4>' + title + '</h4>';
    lines.forEach(function (l) { h += '<p class="dialog-line"><span class="speaker">' + l[0] + '</span>' + l[1] + '</p>'; });
    return h + '</div>';
  };
  // Alternative accepted answers are separated by |
  // caseSensitive: true when capitalisation itself is what the exercise tests
  window.exInput = function (prompt, answer, placeholder, lang, caseSensitive) {
    return '<li>' + prompt + ' <input type="text" data-lang="' + (lang || 'de') + '" data-answer="' + esc(answer) +
      '"' + (caseSensitive ? ' data-case="1"' : '') +
      ' placeholder="' + (placeholder || 'your answer') + '"> <button class="check-btn" onclick="checkAnswer(this)">Check</button> <span class="feedback"></span></li>';
  };

  /* ===== skill-page builders =====
     Reading, listening and writing tasks are authored with these. Their
     question lists are ordinary exercise HTML (exInput / exSelect), so they
     save, restore and count towards progress exactly like topic drills. */

  // paragraphs: array of strings, or [heading, p1, p2, …] when the first is a title
  window.readingText = function (title, paragraphs, source, serif) {
    let h = '<div class="reading-text' + (serif ? ' serif' : '') + '">';
    if (title) h += '<h5>' + title + '</h5>';
    paragraphs.forEach(function (p) { h += '<p>' + p + '</p>'; });
    if (source) h += '<span class="src">' + source + '</span>';
    return h + '</div>';
  };

  // lines: [[speaker, text], …] — spoken one after another by the browser voice
  window.listeningScript = function (title, lines) {
    return { title: title, lines: lines };
  };

  window.exerciseList = function (items) {
    return '<div class="exercise"><ol>' + items.join('') + '</ol></div>';
  };

  // A true/false question, rendered as a select so it saves like the others
  window.exTF = function (prompt, isTrue) {
    return window.exSelect(prompt, isTrue ? 'Richtig' : 'Falsch', ['Richtig', 'Falsch']);
  };

  window.exSelect = function (prompt, answer, options, caseSensitive) {
    let h = '<li>' + prompt + ' <select data-answer="' + esc(answer) + '"' + (caseSensitive ? ' data-case="1"' : '') +
      '><option value="">— choose —</option>';
    options.forEach(function (o) { h += '<option value="' + esc(o) + '">' + esc(o) + '</option>'; });
    return h + '</select> <button class="check-btn" onclick="checkSelect(this)">Check</button> <span class="feedback"></span></li>';
  };
})();
