// Site-wide top bar: Home · Course · Exams · Grammar. Keeps the current level when jumping between pages.
(function () {
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var level = new URLSearchParams(location.search).get('level');
  try { if (level) localStorage.setItem('deutsch.level', level); level = level || localStorage.getItem('deutsch.level') || ''; } catch (e) {}
  var q = level ? '?level=' + encodeURIComponent(level) : '';
  var items = [
    ['index.html', '🏠 Home', 'index.html'],
    ['course.html', '📚 Course', 'course.html' + q],
    ['practice.html', '✏️ Übungen', 'practice.html'],
    ['exam.html', '🎓 Exams', 'exam.html' + q],
    ['grammar-topics.html', '📐 Grammar', 'grammar-topics.html']
  ];
  var nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Site');
  nav.innerHTML = '<div class="site-nav-in"><a class="brand" href="index.html">🥨 Deutschkurs</a>' +
    items.map(function (i) {
      return '<a href="' + i[2] + '"' + (page === i[0] || (page === '' && i[0] === 'index.html') ? ' aria-current="page"' : '') + '>' + i[1] + '</a>';
    }).join('') + '</div>';
  document.body.insertBefore(nav, document.body.firstChild);
})();
