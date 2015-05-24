source 'http://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('http://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
