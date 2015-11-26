# [resir014.github.io](http://resir014.github.io/)

> Source code for resir014.github.io

## About this website

This Jekyll website, hosted on [GitHub Pages](https://pages.github.com/) uses a heavily-modified version of [Poole](http://getpoole.com/)[^fn-poole-mit] and is developed on a mid-range laptop I basically use everyday, from doing university works, to playing games.

Aside from a little piece of Google Analytics tracking code, no JavaScript is present on this website. And no, it's not due to [ethical reasons](http://www.gnu.org/philosophy/javascript-trap.en.html) either. It's just that I'm not really good at JavaScript yet.

The [Poole theme](http://getpoole.com/) is &copy; Mark Otto, licensed under [MIT](https://github.com/poole/poole/blob/master/LICENSE.md).

## Developing & running locally

Requirements:
* Ruby (v2.0.0+)
* Bundler
  (included from within Rails (`gem install rails`), or `gem install bundler`)
* Jekyll <http://jekyllrb.com/>
  (install from within Ruby: `gem install jekyll`)
* Node.js
  (Jekyll requires the Node.js runtime to work)

Clone it. ( `git clone https://github.com/resir014/resir014.github.io.git` )

Then install all the bundled Rubygems.

```bash
$ bundle install
```

Simply running `bundle` also works.

After the plugins are installed, we can now run a local server from within our computer.

```bash
$ bundle exec jekyll serve
```

Or you can use grunt:

```bash
# Start a local development server
$ grunt serve

# Build the site manually (if you used `jekyll serve`)
$ grunt build
```

To publish the site to the Master branch, use the following command.

```bash
$ grunt publish
```

## License

Everything that I write (the stuff I put under `_posts` and `projects`, and image files under `assets/images`) are licensed under the <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>, except otherwise noted.

Source code is licensed under [MIT](https://github.com/resir014/resir014.github.io/blob/master/LICENSE).
