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
  To change a section, edit its file there; to reorder sections, move the lines below.
{% endcomment %}

<span class='anchor' id='about-me'></span>
{% include_relative includes/intro.md %}

{% include_relative includes/news.md %}

{% include_relative includes/education.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/services.md %}
