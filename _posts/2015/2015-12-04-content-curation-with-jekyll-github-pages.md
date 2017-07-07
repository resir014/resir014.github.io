---
category: blog
layout: post
title: Content curation with Jekyll & GitHub Pages
comments: true
tags:
- dev
- jekyll
- post-mortem
---

Jekyll is by far my favourite static-site generator, and it's the thing that runs this website. Though one of my main gripes with Jekyll is that it's designed to be optimised for posts, which means that building sites with curation-based content requires quite a fair amount of work.

I've experimented with building a curation-based website on Jekyll, and you can see it in action on [Telegram Stickers Directory](https://telegram-stickers.github.io/), a website developed by me and a friend of mine as a showcase of high-quality stickers for [Telegram Messenger](https://telegram.org/).

This post will explain how I came about to designing a content curation system in Jekyll based on how I built Telegram Stickers Directory. Feel free to look at the source files [here](https://github.com/telegram-stickers/telegram-stickers.github.io) after you've finished reading this post.

---

## The setup

Recently I've been building my themes out of [Poole](https://getpoole.com/). It has pretty much become one of my favourite Jekyll themes out there, even this blog runs on a modified version of Poole. So I've decided to build Telegram Stickers Directory's design off of the same thing.

I had to tweak the directory structures around a bit. The default Poole setup has its compiled CSS files located in the root directory. Following common practice, I put it inside the `css/` folder. Same goes for my Javascript files, I had to put them inside the `js/` folder.

Note that everything here runs on GitHub Pages, so I couldn't put any additional Jekyll plugins, or any forms of database whatsoever. There is a workaround that uses Jekyll's Data Files[^fn-data-files] feature, but it really wasn't worth the hassle when I came up with this.

## How it works

Now, putting all of the curated stickers together on my site is surprisingly easy. You might be assuming right now that I used Jekyll's Collections[^fn-collections] feature to put these together.

Nope. I used plain old posts.

Why? Because for the entire sticker gallery I will have to include some kind of pagination into it, and unfortunately, the built-in `jekyll-paginate` plugin is hard-coded to only work for posts, not collections[^fn-collections-issue].

And to avoid the sticker permalinks being rendered using the `pretty` format, which in turn renders into `/:year/:month/:date/:title/`, which feels rather obnoxious for non-post contents, I had to override the default permalink settings in `_config.yml`.

Which means I had to do the annoying `permalink` setup on each of the page's frontmatter.

```
---
layout: page
title: about
permalink: /about/
---
```

You can also use the old way of creating a directory with the page's slug as its name, and putting an `index.html` file inside containing the page.

Bear in mind that this was before I found out about plugins like [Octopress Paginate](https://github.com/octopress/paginate), which solves most of my problems with paginations in Jekyll. And even though this is a possible solution for all my pagination problems, I would run into another problem.

### Collections, and date sorting

Jekyll collections are actually intended for stuff that does not need to be sorted by date[^fn-eli5-collections]. Which would mean I had to do some tweaks to let collections *actually* sort by date, and even though there are [a couple](https://github.com/jekyll/jekyll/issues/2515) [of solutions](https://gist.github.com/Phlow/1f27dfafdf2bbcc5c48e) that are available, none of these work well for me.

Although I haven't actually tried the latter, maybe I'll try it when I have the time to.

### Search

Now the search bit is what I probably am most proud of. I made use of a Jekyll plugin called [Simple Jekyll Search](https://github.com/christian-fei/Simple-Jekyll-Search), which aggregates all the posts into a JSON file that sits in the root directory, and then calls its own JavaScript file to lookup the JSON and returns the search results instantly below the search box.

### Submissions

Being a curation-based site, it is also important to set up some kind of a submission system.

Unfortunately, I have yet to even set them up, so as of now, submissions are made through either tweets or Telegram messages made towards me, and that goes to a Trello board where I could track stickers that I haven't gotten around to ripping and uploading.

However, if you want to use a proper system based on how I would put it, you can either use [Simple Form](https://getsimpleform.com/), or try using a plain old Google Form, if you don't require your users to upload any files.

---

## Conclusion

This whole project was more or less a production-ready proof-of-concept of how Jekyll can be used as a site to collect curated content, which are posted based on user submissions and displayed in a gallery-like view. I've explained on this post about how I went and hacked around the core features and quirks of Jekyll and GitHub Pages in order to customise it to my needs, and you can also look at the source files [here](https://github.com/telegram-stickers/telegram-stickers.github.io).

You should take note that this might not be the perfect method for this particular use-case of Jekyll. Though if someone came up with a better way, let me know and I might highlight it in a later post.

---

[^fn-data-files]: <http://jekyllrb.com/docs/datafiles/>
[^fn-collections]: <http://jekyllrb.com/docs/collections/>
[^fn-collections-issue]: <https://github.com/jekyll/jekyll/issues/2376>
[^fn-eli5-collections]: <http://ben.balter.com/2015/02/20/jekyll-collections/>
