---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% comment %}
  The home page is put together from the section files in _pages/_sections/.
  Each section has an English file (news.md) and a Chinese file (news.zh.md);
  the 中文 / EN button in the top bar shows one and hides the other.
  pub.md is shared by both languages: its few Chinese parts sit in <span class="lang-zh">.
  The anchor before each section is the target of the top-bar link (_data/navigation.yml).
  To change a section, edit its file; to reorder sections, move whole blocks below.
{% endcomment %}

<div class="anchor" id="about-me"></div>
<div class="lang-en" markdown="1">
{% include_relative _sections/intro.md %}
</div>
<div class="lang-zh" markdown="1">
{% include_relative _sections/intro.zh.md %}
</div>

{% comment %} The date the site was last built, i.e. of the last push to GitHub. {% endcomment %}
<p class="last-updated"><i class="fas fa-history" aria-hidden="true"></i> <span class="lang-en">Last updated: {{ site.time | date: "%Y-%m-%d" }}</span><span class="lang-zh">最近更新：{{ site.time | date: "%Y-%m-%d" }}</span></p>

{% comment %} Only the newest news_shown items (_config.yml) are shown; homepage.js adds a button for the rest. {% endcomment %}
<div class="anchor" id="news"></div>
<div class="lang-en news" data-shown="{{ site.news_shown | default: 5 }}" markdown="1">
{% include_relative _sections/news.md %}
</div>
<div class="lang-zh news" data-shown="{{ site.news_shown | default: 5 }}" markdown="1">
{% include_relative _sections/news.zh.md %}
</div>

<div class="anchor" id="education"></div>
<div class="lang-en" markdown="1">
{% include_relative _sections/education.md %}
</div>
<div class="lang-zh" markdown="1">
{% include_relative _sections/education.zh.md %}
</div>

<div class="anchor" id="publications"></div>
{% include_relative _sections/pub.md %}

<div class="anchor" id="services"></div>
<div class="lang-en" markdown="1">
{% include_relative _sections/services.md %}
</div>
<div class="lang-zh" markdown="1">
{% include_relative _sections/services.zh.md %}
</div>
