---
layout: post
title: I will now talk about that one article on the state of JavaScript
lead: Because obviously, it’s absolutely necessary to talk about it at this time of the week.
redirect_from: /blog/2016/01/14/i-will-now-talk-about-that-one-article-on-the-state-of-javascript/
tags:
- nodejs
- javascript
- dev
---

So I've kind of been spending most of my days disgruntled for not being able to find my car keys (which I then found later, slipped to the very bottom of the sofa cushion), when my good friend [@TomasDuda](https://twitter.com/tomasduda) sent me a link to this article by Drew Hamlett on Medium. It was sadly deleted, for reasons we'll get to later, but [here's an archive](https://archive.is/TVjjz). (**Update:** it was deleted by the time I wrote this, but turns out he put it back on.)

Now, keep in mind that I'm *not* as much of an expert as anyone is in the whole JavaScript ecosystem, and not that much of a "magpie developer" anyways. In fact, I'm pretty much still a noob and is just getting started of JavaScript (and I actually have a JavaScript assignment due this Saturday so I'm fucked either way).

But, for the sake of doing so, I have taken upon myself to pull out several lessons that we could all take in for us to help improve this ecosystem in dire need of help.

<figure>
  <img src="{{ site.baseurl }}/public/images/blog/2016/i-will-now-talk-about-that-one-article-on-the-state-of-javascript/CWeYEUvWoAA5Z3V.png" alt="Photo">
  <figcaption>Photo credit: <a href="https://twitter.com/ericdfields/status/677677470590570496" target="_blank">@ericdfields</a></figcaption>
</figure>

---

The original article actually brought up some valid points about the state of the entire JavaScript ecosystem as of now. I myself, am not really a power [Node.js](https://nodejs.org/) user, I merely use it to write and run a handful of grunt scripts and such. As of now I've never really seen the point past that, and with the brand-new "JavaScript Everywhere" fad lying around everywhere I look, I'm mostly still not buying it either, thanks to the whole bloat and fragmentation of the whole ecosystem.

Take, for example the [MEAN Stack](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and), a fairly promising idea of a full-stack framework based *entirely* of JavaScript, but with a fairly divisive implementation. Because, as you see, we currently have **two** MEAN-based frameworks, [mean.io](http://mean.io/), and [mean.js](http://meanjs.org/).

An internal issue among the mean.io developers forced some of its original developers to fork the project and set up mean.js, both with varying architecture and goals, which makes learning to put a fully-working MEAN stack for the first time will take... well, good luck with that.

But that's just a tip of the iceberg. Here are some of the things that Drew brought out into the table on his article, and let's see if I, a JS noob could try to make a sense of it all. I'm going to skip stuff like React and Angular, because I've never known enough JavaScript to actually take them for a spin, and React is owned by Facebook anyway, so meh.

## Node's package bloat

Oh boy, oh boy. Remember the good old days when npm wasn't even deserved to be called "compatible" with Windows because of its deeply nested modules structure? Fortunately they fixed this as of `npm@3.0.0`, but then again there still exists the bloat issue, where a single `npm install` could literally take up hundreds of megabytes of disk space thanks to packages and their convoluted dependencies.

Like, holy shit, remember [those filepath errors](https://github.com/npm/npm/issues/3697) when trying to delete your old `node_modules` folder through Windows Explorer? Annoying, right?

## Compilers, transpilers, you name it.

So there's been this new fad on so-called "transpiler" languages. You take on an entirely new set of programming languages, which will all compile, or as they prefer to call it, "transpile", to JavaScript. Of course, while some of them look terrifying, like CoffeeScript, others actually take what's best in the current and future ECMAScript standards and compile it to something really nice. A good example for the last one would be TypeScript.

Then there's Babel. I mean... what? It's just a JavaScript-to-JavaScript compiler. With plugins. Really.

## Not so much dis-grunt-led

Then there's task runners like Grunt, and Gulp. To be honest, I actually find these tools to be really helpful, in fact, as I said earlier in the article, tools like Grunt and Gulp help streamline your build process, unit testing, and all that other goodness, all by running one simple task.

While some people also thought that [we should get rid of this bloat as well](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/), I think that it works wonders when you could really get into the nooks and crannies, which in turn would really ease out dour daily workflow.

---

## Mind your rant

Now, as a lengthy, rant-y post that does make quite a bit of sense when you peel through the onion, it doesn't mean it didn't come with its issues. In fact, this was most likely the cause of the article's deletion from Medium. You see, during his take on Babel, he made out an unintentional personal attack towards the creator of Babel itself, which he then [took offense for](https://twitter.com/sebmck/status/687063497675517953).

Now, I completely understand the frustration that Drew went through leading up to the writing of his post. But when you're writing a rant, make sure to control your frustration so that you're not gonna start spurting out unintentional personal attacks toward someone. I mean, it's just common decency.

---

## Conclusion

Now, this doesn't mean the whole JavaScript ecosystem is terrible. I would definitely not lose any motivation to learn a lot more JS after seeing the sad state that it currently is now. There are also some beautiful folks out there trying to make the whole JavaScript ecosystem more accessible (and I wouldn't hesitate to say the Node/NPM folks are one of them!), and they've been doing a really great job so far, so keep it up!

But with that, we also shouldn't forget the sad state that is the entire web development ecosystem nowadays. The JavaScript ecosystem is currently in the saddest state you will ever see, with useless package bloats, numerous tools that are basically just reinventing the wheel, you name it. This is definitely something that still needs working on.

And, of course, we have also learned to mind your emotions while you're writing a lengthy rant post. You wouldn't know if your frustration has slipped some personal attacks towards someone between those words. So yeah, just watch out for that.

But still, props to Drew for making some good points on the current state of the JS ecosystem.

---

Of course, I took on this article as a novice JS developer. For a more professional perspective, check out ['The Sad State of Entitled Web Developers'](https://medium.com/swlh/the-sad-state-of-entitled-web-developers-e4f314764dd) by Una Kravets.
