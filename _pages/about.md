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
  The home page is put together from the section files in _pages/includes/.
  Each section has an English file (news.md) and a Chinese file (news.zh.md);
  the 中文 / EN button in the top bar shows one and hides the other.
  pub.md is shared by both languages: its few Chinese parts sit in <span class="lang-zh">.
  The anchor before each section is the target of the top-bar link (_data/navigation.yml).
  To change a section, edit its file; to reorder sections, move whole blocks below.
{% endcomment %}

<div class="anchor" id="about-me"></div>
<div class="lang-en" markdown="1">
{% include_relative includes/intro.md %}
</div>
<div class="lang-zh" markdown="1">
{% include_relative includes/intro.zh.md %}
</div>

<div class="anchor" id="news"></div>
<div class="lang-en" markdown="1">
{% include_relative includes/news.md %}
</div>
<div class="lang-zh" markdown="1">
{% include_relative includes/news.zh.md %}
</div>

<div class="anchor" id="education"></div>
<div class="lang-en" markdown="1">
{% include_relative includes/education.md %}
</div>
<div class="lang-zh" markdown="1">
{% include_relative includes/education.zh.md %}
</div>

<div class="anchor" id="publications"></div>
{% include_relative includes/pub.md %}

<div class="anchor" id="services"></div>
<div class="lang-en" markdown="1">
{% include_relative includes/services.md %}
</div>
<div class="lang-zh" markdown="1">
{% include_relative includes/services.zh.md %}
</div>
