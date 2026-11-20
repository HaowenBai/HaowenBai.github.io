/* This site's own behaviour (the template's code is in main.min.js).
   Choices are remembered in localStorage; _includes/head/custom.html applies them before the page is drawn. */
(function () {
  var root = document.documentElement;

  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  /* The two top-bar switches (_includes/masthead.html): each is one button showing both options;
     a click anywhere on it switches to the other option. CSS highlights the current one
     from <html data-theme> / <html data-lang>. */

  /* ---- light / dark ---- */
  document.querySelectorAll('[data-toggle="theme"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      save('theme', theme);
    });
  });

  /* ---- EN / 中文: CSS also shows .lang-en or .lang-zh accordingly ---- */
  document.querySelectorAll('[data-toggle="lang"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = root.getAttribute('data-lang') === 'zh' ? 'en' : 'zh';
      root.setAttribute('data-lang', lang);
      root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
      save('lang', lang);
      window.dispatchEvent(new Event('resize'));  // the top bar re-fits its links to the new labels
    });
  });

  /* ---- News: CSS shows only the newest data-shown items (news_shown in _config.yml);
     when there are more, a button under the list shows / hides the rest ---- */
  document.querySelectorAll('.news').forEach(function (box) {
    var list = box.querySelector('ul');
    var shown = parseInt(box.getAttribute('data-shown'), 10) || 5;
    if (!list || list.children.length <= shown) return;
    var zh = box.classList.contains('lang-zh');
    var rest = list.children.length - shown;
    var more = zh ? '更多新闻（' + rest + ' 条）' : 'More news (' + rest + ')';
    var less = zh ? '收起' : 'Show less';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'news__toggle';
    function label(open) {
      btn.innerHTML = (open ? less : more) + ' <i class="fas fa-angle-' + (open ? 'up' : 'down') + '" aria-hidden="true"></i>';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    label(false);
    btn.addEventListener('click', function () {
      label(box.classList.toggle('news--open'));
    });
    list.parentNode.insertBefore(btn, list.nextSibling);
  });
})();
