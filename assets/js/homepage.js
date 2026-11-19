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

  /* ---- English / Chinese: CSS shows .lang-en or .lang-zh according to <html data-lang> ---- */
  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
      root.setAttribute('data-lang', next);
      root.setAttribute('lang', next === 'zh' ? 'zh-CN' : 'en');
      save('lang', next);
      window.dispatchEvent(new Event('resize'));  // the top bar re-fits its links to the new labels
    });
  }
})();
