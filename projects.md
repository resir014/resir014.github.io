---
layout: page
title: projects
---

## web design

<dl>
{% for project in site.projects %}
{% if project.category == "webdesign" %}
  <dt><a href="{{ project.url }}">{{ project.title }}</a></dt>
  <dd>{{ project.details }}</dd>
{% endif %}
{% endfor %}
</dl>

## blogs

<dl>
{% for project in site.projects %}
{% if project.category == "blogs" %}
  <dt><a href="{{ project.link }}">{{ project.title }}</a></dt>
  <dd>{{ project.content }}</dd>
{% endif %}
{% endfor %}
</dl>

## github stuffs

<dl>
{% for project in site.projects %}
{% if project.category == "github" %}
  <dt><a href="{{ project.link }}">{{ project.title }}</a></dt>
  <dd>{{ project.content }}</dd>
{% endif %}
{% endfor %}
</dl>

## random works

You can also find some of my original yet random works, which I probably did when I was bored. These works are adequately curated on my [Tumblr blog](http://resir014.tumblr.com/tagged/resir014).
