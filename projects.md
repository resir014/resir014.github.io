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

{% for project in site.projects %}
{% if project.category == "blogs" %}
<dl>
  <dt><a href="{{ project.url }}">{{ project.title }}</a></dt>
  <dd>{{ project.content }}</dd>
</dl>
{% endif %}
{% endfor %}

## github stuffs

{% for project in site.projects %}
{% if project.category == "github" %}
<dl>
  <dt><a href="{{ project.url }}">{{ project.title }}</a></dt>
  <dd>{{ project.content }}</dd>
</dl>
{% endif %}
{% endfor %}

## random works

You can also find some of my original yet random works, which I probably did when I was bored. These works are adequately curated on my [Tumblr blog](http://resir014.tumblr.com/tagged/resir014).
