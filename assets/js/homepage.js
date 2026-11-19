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

  /* ---- Google Scholar citations ----
     GS_DATA_URL (set in _includes/scripts.html) is gs_data.json on the google-scholar-stats branch.
     In pub.md each paper has <span class="show_paper_citations" data="<Google Scholar paper id>">;
     the totals go into the toolbar under the Publications heading (_includes/pub-toolbar.html). */
  function fillAll(selector, text) {
    document.querySelectorAll(selector).forEach(function (el) { el.textContent = text; });
  }

  function showCitations(data) {
    var pubs = data.publications || {};
    document.querySelectorAll('.show_paper_citations').forEach(function (el) {
      var p = pubs[el.getAttribute('data')];
      if (!p) return;
      var n = p.num_citations || 0;
      var entry = el.closest('.paper-box, li');
      if (entry) entry.setAttribute('data-citations', n);  // used for sorting
      el.innerHTML = '| <span class="lang-en">Citations: </span><span class="lang-zh">引用：</span><strong></strong>';
      var num = el.querySelector('strong');
      if (/^https:\/\/scholar\.google\.com\//.test(p.citedby_url || '')) {
        var a = document.createElement('a');  // links to the list of papers citing this one
        a.href = p.citedby_url;
        a.textContent = n;
        num.appendChild(a);
      } else {
        num.textContent = n;
      }
    });
    if (data.citedby != null) {
      fillAll('.gs-citedby', data.citedby);
      fillAll('.gs-hindex', data.hindex);
      fillAll('.gs-date', String(data.updated || '').slice(0, 10));
      document.querySelectorAll('.gs-stats').forEach(function (el) { el.hidden = false; });
    }
  }

  if (window.GS_DATA_URL && window.fetch) {
    fetch(window.GS_DATA_URL)
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(showCitations)
      .catch(function () {});  // no data yet (the Action has not run): the page simply shows no numbers
  }
})();
