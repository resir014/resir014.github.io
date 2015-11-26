---
category: blog
layout: post
title: resir014.github.io, v3
tags:
  - dev
---

Welcome to Version 3 of this website!

It's been over a week since I started this project, but it's finally here. Most parts of the website have been rewritten from the ground-up with the focus of more modular content.

By "modular" I meant having the ability to distinguish different kinds of content, since I did bring up the subject of posting more content other than blog posts, to reflect more of my interests, some time ago. So in the coming weeks I'll be able to actually do that.

## Changelog

Here's a complete list of what has changed:

* Reworked directory/collection/category structure.
* Now supports tags!
* Changed content licence to CC-BY-SA 4.0.
* Cleaned up some posts.
* Changed default highlighter to Rouge.
* Added appropriate third-party notices.
* Added Grunt script for building and publishing site.
* Use `grunt-contrib-connect` for local development server.
* Jekyll site is no longer built and deployed by GitHub Pages, instead it's deployed manually using `grunt-buildcontrol`. (The way this works will be explained in a future post)
* Use `grunt-contrib-imagemin` to optimise/minify images during deploy time.
* Added `octopress-paginate`, `jekyll-sitemap` and `jekyll-gist` to the Jekyll plugins list.

## Source code

You can take a peek at the Jekyll source of the website [here](https://github.com/resir014/resir014.github.io){:target="_blank"}.

And once again, I still use a modified version of [Poole](http://getpoole.com){:target="_blank"} by [Mark Otto](https://twitter.com/mdo){:target="_blank"}. Third-party disclosures are available [here](https://github.com/resir014/resir014.github.io/blob/source/thirdpartynotices.txt){:target="_blank"}.

Hope you like it!
