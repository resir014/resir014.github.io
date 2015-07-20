---
layout: page
title: projects
---

## web design

<dl>
{% assign webdesign = site.webdesign | sort: 'name' %}
{% for project in webdesign %}
  <dt><a href="{{ project.url }}">{{ project.title }}</a></dt>
  <dd>{{ project.details }}</dd>
{% endfor %}
</dl>

## blogs

<dl>
{% assign blogs = site.blogs | sort: 'name' %}
{% for project in blogs %}
  <dt><a href="{{ project.link }}">{{ project.title }}</a></dt>
  <dd>{{ project.content }}</dd>
{% endfor %}
</dl>

## open source

<dl>
{% assign github = site.github | sort: 'name' %}
{% for project in github %}
  <dt><a href="{{ project.link }}">{{ project.title }}</a></dt>
  <dd>{{ project.content }}</dd>
{% endfor %}
</dl>

## random works

You can also find some of my original yet random works, which I probably did when I was bored. These works are adequately curated on my [Tumblr blog](http://resir014.tumblr.com/tagged/resir014).
