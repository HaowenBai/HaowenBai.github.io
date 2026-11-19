/* This site's own behaviour (the template's code is in main.min.js).
   Choices are remembered in localStorage; _includes/head/custom.html applies them before the page is drawn. */
(function () {
  var root = document.documentElement;

  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* The two top-bar switches (_includes/masthead.html) each show both options;
     CSS highlights the current one from <html data-theme> / <html data-lang>. */

  /* ---- light / dark ---- */
  document.querySelectorAll('[data-set-theme]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var theme = btn.getAttribute('data-set-theme');
      root.setAttribute('data-theme', theme);
      save('theme', theme);
    });
  });

  /* ---- 中文 / EN: CSS also shows .lang-en or .lang-zh accordingly ---- */
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
