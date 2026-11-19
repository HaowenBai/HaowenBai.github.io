/* This site's own behaviour (the template's code is in main.min.js).
   Choices are remembered in localStorage; _includes/head/custom.html applies them before the page is drawn. */
(function () {
  var root = document.documentElement;

  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* ---- dark / light ---- */
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save('theme', next);
    });
  }
})();
