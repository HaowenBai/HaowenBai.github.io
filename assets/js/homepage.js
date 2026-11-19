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

  /* ---- 中文 / EN: CSS shows .lang-en or .lang-zh according to <html data-lang>,
     and highlights the current one of the two buttons ---- */
  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-set-lang');
      if (root.getAttribute('data-lang') === lang) return;
      root.setAttribute('data-lang', lang);
      root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
      save('lang', lang);
      window.dispatchEvent(new Event('resize'));  // the top bar re-fits its links to the new labels
    });
  });
})();
