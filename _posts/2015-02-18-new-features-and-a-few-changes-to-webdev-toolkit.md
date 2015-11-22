---
layout: post
title: New features, and a few changes to Webdev Toolkit
tags:
  - blog
  - projects
---

Over the past few days, I released [Webdev Toolkit](https://github.com/resir014/Webdev-Toolkit) to the public. It's a simple and lightweight debugging tool for developing HTML and CSS-based websites, which was originally written in [Grunt](http://gruntjs.com/), but then rewritten in [Gulp](http://gulpjs.com/) before release.

Here are the few things that I've learned from working on Webdev Toolkit:

## Gulp is stupid.

The original intention of rewriting the entire build script in Gulp was because I wanted to try something new, more like an experiment. My recent interest in [automation](http://xkcd.com/1319/) of web development tasks made me try Grunt in the first place. And just recently Gulp is also taking the spotlight, so I originally though, well, why not give it a try.

And as much as I tried to making it work, it's not really for me.

What I love from Grunt the most is the easily-readable syntaxes that are available for use. Even though it's not really organised by task order, and the resulting code was much longer than that of Gulp, it's pretty easy to trawl through the script and know what each plugins do.

{% gist ec1583fb34009a204111 Gruntfile.js %}

Unlike Grunt, Gulp scripts take much smaller space. But it's not the most easily-readable code structure for beginners.

{% gist ec1583fb34009a204111 gulpfile.js %}

To put it simply, Gulp is not really my style.

## Preprocessors are cool!

Apart from lamenting over the endless battle with Gulp's confusing code system, I've also tried playing around with [SASS](http://sass-lang.com/). It's a pretty well-polished preprocessor, and I've also been interested in trying to make the switch towards preprocessor-driven development.

## So what changes have you made?

I've recently been working on reverting the entire codebase back to Grunt. After the whole rewriting is done, development should pretty much carry on at a steady pace again.

Don't worry though, the features that exist today, like BrowserSync, will still be available all the time, for you to use. Apart from that, SASS support is also being added to the features lineup. You should expect these new changes to be pushed within the next few hours.
