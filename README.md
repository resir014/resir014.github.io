# [resir014.github.io](http://resir014.github.io/)

> Source code for resir014.github.io

## Developing & running locally

Requirements:
* Ruby (v2.0.0+)
* Bundler
  (included from within Rails (`gem install rails`) or `gem install bundler`)
* Jekyll <http://jekyllrb.com/>
  (install from within Ruby: `gem install jekyll`)
* Node.js
  (Jekyll requires the Node.js runtime to work)

Clone it. ( `git clone https://github.com/resir014/resir014.github.io.git` )

Then install all the bundled Rubygems.

```bash
$ bundle install
```

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

## Third party notices

This website contains modified stylesheets from the [Poole](http://getpoole.com/) theme, licensed under [MIT](https://github.com/poole/poole/blob/master/LICENSE.md).

The Tags feature is based on the tags page of [hey.kleinfreund.de](http://hey.kleinfreund.de/), also licensed under [MIT](https://github.com/kleinfreund/kleinfreund.github.io/blob/master/LICENSE.txt).

## License

MIT.
