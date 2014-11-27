---
layout: page
title: Projects
---

## web design

{% for project in site.projects %}
{% if project.category == "webdesign" %}
<dl>
  <dt><a href="{{ project.url }}">{{ project.title }}</a></dt>
  <dd>{{ project.details }}</dd>
</dl>
{% endif %}
{% endfor %}

## blogs

<dl>
  <dt><a href="http://whattheminecraft.tumblr.com/" target="_blank">WhatTheMinecraft.</a></dt>
  <dd>A random Minecraft blog showcasing Minecraft related things.</dd>

  <dt><a href="http://fuckyeah-elementaryos.tumblr.com/" target="_blank">fuck yeah, elementary OS!</a></dt>
  <dd>A fan Tumblr blog for <a href="http://elementaryos.org/" target="_blank">elementary OS</a>, fyeOS is designed to celebrate all things elementary.</dd>
</dl>

## open source stuffs

<dl>
  <dt><a href="https://github.com/resir014/NineSevenThree" target="_blank">NineSevenThree</a></dt>
  <dd>Simplified, responsive grid framework.</dd>

  <dt><a href="http://resir014.github.io/Clear-Sans-Webfont/" target="_blank">Clear Sans Webfont</a></dt>
  <dd>Webfont conversion for the <a href="https://01.org/clear-sans" target="_blank">Clear Sans</a> font by the <a href="https://01.org/" target="_blank">Intel&reg; Open Source Technology Center</a>.</dd>

  <dt><a href="http://resir014.github.io/generally-tools/" target="_blank">GeneRally Tools</a></dt>
  <dd>Web-based tools for the freeware top-down racing game, <a href="http://gene-rally.com" target="_blank">GeneRally</a>.</dd>
</dl>

## random works

You can also find some of my original yet random works, which I probably did when I was bored. These works are adequately curated on my [Tumblr blog](http://resir014.tumblr.com/tagged/resir014).
