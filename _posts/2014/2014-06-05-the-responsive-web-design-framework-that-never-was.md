---
layout: post
title: The responsive web design framework that never was
tags:
  - blog
  - projects
---

My first encounter with web design was back in high school when I coded a website from scratch for a school project. I'm not sure if I still have the files for them on my computer, but from what I remembered it doesn't look any good. I thought I was into something when I started coding HTML and CSS, and I kept researching for a faster way to make my website look better, because to be honest, I'm not really a patient guy when it comes to writing code.

Then I discovered [Bootstrap](http://getbootstrap.com). After playing around with it, and numerous attempts of implementing it to one of my Tumblr blogs, I grew to love it. It's one of the most robust CSS frameworks out there, and it could be easily picked up by newcomers. All of the basic interface components are laid out conveniently, and it also allows for simple customizations for each components with LESS as preprocessor. It doesn't matter [what the skeptics say](http://blog.idyllic-software.com/why-we-dont-use-twitter-bootstrap/) about it, I pretty much use Bootstrap as a base framework for all my design works.

## The humble beginnings

One day, I was reminiscing the day I built my first website, at the same time I was also having a talk with one of my Tumblr friends about GitHub and design frameworks, and how he doesn't use it cause it feels more fun for him to built his own from scratch.

Both of us were fairly new to GitHub and is still learning some of the quirks behind it, so one day, out of boredom, I started a GitHub project for a new design framework. I kind of decided that I could use this repo to learn more on designing a website from scratch, while at the same time trying to learn how GitHub works.

Thus, [NineSevenThree](https://github.com/resir014/NineSevenThree) was born. I served a fair amount of time building it, but due to time constraints I couldn't work further on it, so the development has been pretty stagnant. Although you can still see traces of it on this page (You can take a look at the CSS file [here](http://resir014.github.io/css/main.css)), and I still normally add some other random features to it.

## Learning by cloning (or copy-pasting, rather)

NineSevenThree was originally built to be my own, stripped out clone of Bootstrap with simpler grids system, and basic interface elements ported from Bootstrap. I tend to take some inspiration by looking at and/or putting in random codes that some random people made.

Consistency is an important part in web design, you wouldn't want to work hard on implementing a design and it turned out to be incompatible on, say, IE8. This is where [Normalize](http://necolas.github.io/normalize.css/) comes in. It helps fixes these inconsistencies while at the same time preserving some useful defaults. Bootstrap also uses this. In fact, every other websites in the world should use this.

For the responsive grids I researched about implementing responsiveness in web design and all that, then I found [this simple guide](http://www.adamkaplan.me/grid/) on forming responsive web grids by Adam Kaplan. What follows is my implementation of the system.

Firstly, we have the base box-sizing reset and height resets which are set globally, and some other CSS hacks.

{% highlight css %}
/* Base Styles */

*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

.pull-right {
  float: right !important;
}

.pull-left {
  float: left !important;
}
{% endhighlight %}

As you can see, I've imported the `.pull-right` and `.pull-left` class from Bootstrap as it's a pretty useful feature. I've also inluded a hack for the `html` and `body` element which allows me to design a full-screen header as you can see on my homepage.

And now, here comes the grids.

The grids were heavily based on Adam's responsive grids CSS, with some mixed elements from Bootstrap. I mainly renamed the classes so that it's closely similar to Bootstrap's naming standards, and expanded it to a 12-column fluid layout.

The containers and rows were taken from Bootstrap, mainly the column padding and gutters and a built-in clearfix at the `.row` classes.

{% highlight css %}
/**
 * Grid System
 */

.container {
  padding: 0 15px;
  margin: 0 auto;
  max-width: 768px;
}

.row {
  margin: 0 -15px;
}

.row:before,
.row:after {
  display: table;
  content: " ";
}

.row:after {
  clear: both;
}
{% endhighlight %}

The columns I use here are an expanded version of Adam Kaplan's grid.css, slightly modified to make it have that Bootstrap feel. I settled for the 12-grid fluid columns layout, and class names are designed to closely follow Bootstrap's naming standards.

{% highlight css %}
.col {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 640px) {
  .col {
    float: left;
  }

  .col-12 { width: 100%; }
  .col-11 { width: 91.67%; }
  .col-10 { width: 83.33%; }
  .col-9 { width: 75%; }
  .col-8 { width: 66.67%; }
  .col-7 { width: 58.33%; }
  .col-6 { width: 50%; }
  .col-5 { width: 41.67%; }
  .col-4 { width: 33.33%; }
  .col-3 { width: 25%; }
  .col-2 { width: 16.67%; }
  .col-1 { width: 8.33%; }

  .col-push { float: right; }
}

/**
 * Additional Clearfix
 */

.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}

.clearfix:after {
  clear: both;
}
{% endhighlight %}

This CSS actually requires to load the `.col` class first, though it may sound redundant, but it helps to minimize the work of replacing column class names. There's also a `.col-push` class if you want to switch the order of the columns over.

A typical grid layout may look like this:

{% highlight html %}
<div class="container">
  <div class="row">
    <div class="col col-9">
      ...
    </div>
    <div class="col col-3">
      ...
    </div>
  </div>
</div>
{% endhighlight %}

## So, what happened to it?

Well, apart from me being way too busy on university and all that, the reason that I kinda stopped developing it was because I feel that it would never be as robust as Bootstrap, and it would be pointless for even me to use it.

NineSevenThree contains of simply grid elements and some really basic UI and typography elements, nothing more. It would probably useful if someone wanted to use it as a base for designing a better, more robust framework, but due to my limitations I leave that to the open-source community.

I'm currently working on version 0.5.0 of NineSevenThree with some more added UI elements, and better development workflow with Grunt. After v0.5.0 is public, I will halt the development for NineSevenThree indefinitely. In the meantime, the code is also released into the wild, so if someone wants to take over the code and turn it into something bigger, feel free to do so.

In the meantime, I shall work hard on brushing up on my HTML, CSS and Javascript development skills and once I feel I'm ready for something big, I will probably continue working on this again. We'll see.
