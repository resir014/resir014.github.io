---
layout: post
title: "The Ultimate foobar2000 Setup*"
lead: "*) Well, according to me, at least."
---

If there's something that I've learned in the past year or two, is that [foobar2000](http://www.foobar2000.org/) is the most lightweight, powerful, customizable music player I've ever used. I switched over from iTunes, as I was getting tired of the bloat it has become, and I have never turned back ever since.

Of course, I did run into some concerns that it won't be able to do the things that I always found useful on iTunes, like organising your songs neatly into their own folders based on artist, album, and the like. But turns out it is a feature included with one of its built-in plugins, or "components" as they were called in foobar2000.

So I started looking around for components, toyed around with them a bit, and this is what I came up with.

[![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-23-02.png)]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-23-02.png)

I find it really neat. Sure, this might not be the best setup there is, but at least it makes your foobar2000 experience more bearable.

*In this guide, I will assume that you've pretty much understood the basics of customising foobar2000, such as adding/removing components, or selecting a custom UI. I might update this guide to be more noob-friendly in the future, but I couldn't really make promises, so \*shrugs\*.*

---

## Components

First off, you will need the following additional components. The version numbers might not be the latest when you're reading this off in the future, but as of the writing of this post, the version numbers are confirmed to be the most stable.

* [Columns UI (v0.3.9.1)](http://yuo.be/columns.php)
* [Dynamic Fields (v1 beta 4)](https://www.hydrogenaud.io/forums/index.php?showtopic=86853&start=0&p=744320&#entry744320)
* [Playback Statistics (v3.0.2)](http://www.foobar2000.org/components/view/foo_playcount)
* [Queue Contents Editor (v0.5.1)](http://wiki.hydrogenaud.io/index.php?title=Foobar2000:Components/Queue_Contents_Editor_(foo_queuecontents))
* [Discogs Tagger (v1.55)](https://www.foobar2000.org/components/view/foo_discogs)

## Interface stuffs

The default foobar2000 interface is fine, but unfortunately it lacks some pretty important features, like customizable playlist views, and, most importantly, [This Thing on the Taskbar That You Can Click On Which I Don't Know The Name Of]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-07_00-03-28.png)[^fn-thumbbars].

When I started transitioning to foobar2000, a friend of mine recommended that I use [Columns UI](http://yuo.be/columns.php), and I loved it at first sight. It improves much of foobar2000's user experience, and most importantly, [That Thing on the Taskbar That You Can Click On Which I Don't Know The Name Of]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-07_00-03-28.png)[^fn-thumbbars] is finally present, without any additional components needed. Talk about a multi-purpose UI kit.

After you've finished installing Columns UI and set it as your default UI, you will be presented with this screen.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-07_22-25-11.png)

Here you can choose a number of quick UI presets for you to get started, but if needed, you can later customize it from `Preferences > Display > Columns UI > Layout`.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-07_22-36-35.png)

Unfortunately, I've never touched this section, so look up on how you play around with this section yourself, I guess. Although the next few parts will explain why I chose to use Columns UI.

## DADA algorithm

One other thing that foobar2000 lacks is a rating system. I've tried looking for some random components that does this but most of the time they do this thing where it will store the rating in your ID3 metadata, which is a big no.

So I tried looking up for something again, and came across [this article](http://www.giantpygmy.net/gpa/index.php?id=dada-autorating) on an automated rating system for foobar2000, known as the Date and Duration Adjusted (DADA) auto-rating algorithm.

The article above provides an in-depth explanation on how the algorithm works. It does take a while to understand how the algorithm makes any sense, but four or five months in, you'll see that it starts to kick in. It requires the following prerequisite components: [Dynamic Fields](https://www.hydrogenaud.io/forums/index.php?showtopic=86853&start=0&p=744320&#entry744320) and [Playback Statistics](http://www.foobar2000.org/components/view/foo_playcount).

[> Click here to read on how to get the DADA auto-rating up and running.](http://www.giantpygmy.net/gpa/data/uploads/files/dada_autorating_dar_latest_version.txt)

Now what I'd usually like to do after this, is to create a "Top Tracks" autoplaylist using the DADA algorithm to determine the ranks, and this is where Columns UI really stands out. The NG Playlist configurations built into Columns UI allows for further customisations on how your playlists are displayed.

If you take a look at my first screenshot, the "All Music" playlist are grouped based on albums. Obviously I wouldn't want to same grouping for the Top Tracks playlists. So far, Columns UI is the only component that I can find that supports different grouping schemes for playlists.

If you open `Preferences > Playlist View > Grouping`, you will see this.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-17-37.png)

The first grouping rule in that window is included by default. But we're gonna tweak it a bit by double clicking on it. Then, on the playlist filters, select "Hide on playlists" from the dropdown, and add the playlists that you want the grouping rules to be ignored at, separated by semicolons. Here's an example.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-19-46.png)

Save your changes, and there you go, a 100%-working Top Tracks playlist.

[![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-13-37.png)]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-13-37.png)

## Organising your music

This section will be broken down in two parts. In the first part, I will explain on how to organise your music library with a neat, iTunes-like folder structure, and in the second part I will talk about automatic tagging with Discogs.

### File Operations

If there's one thing to love from iTunes, is that I love how it organises your music collection neatly into their own folders, separated by artist and album. It really has been what made me stuck with iTunes for too long, and when I made the switch to foobar2000, I just had to research on whether foobar2000 would be able to do the same.

Fortunately, there's a built-in component that does more or less the same thing. File Operations (`foo_fileops`) is a built-in component that is included if you choose to install foobar2000 with some additional components.

First thing to do would be to set up your FileOps configs. Right click on any track and go to `File Operations > Move to > ...`.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-26-49.png)

Here, you can add, remove, or save presets for FileOps. The most important option here would be "File name pattern". I use the following pattern, to make it look more like iTunes:

{% highlight text %}
%album artist%/%album%/[%discnumber%-]%tracknumber% %title%
{% endhighlight %}

You can learn more about defining file name patterns on this [wiki page](http://wiki.hydrogenaud.io/index.php?title=Foobar2000:File_operations).

In order to organise new music in your library, first you **must** move your new music into a placeholder directory inside your main library folder, like `_unsorted`. Then head over to `Library > Album List`, then right click on "All Music", then head over to `File Operations > Move to` then select your saved preset, like so.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_00-35-07.png)

You will now see a preview of the changes made in your directory. Click "Run" to confirm your changes.

### Tagging with Discogs

It's very important to properly tag your music library, for the sake of consistency, especially when you're sharing what you're listening to to services like [Last.fm](http://www.last.fm/).

Unfortunately, before you want to use it, you will have to create an account at <http://www.discogs.com/> in order to get an OAuth token to access their API[^fn-discogs-oauth]. If you don't want to do that, you can try [MusicBrainz tagger](https://www.foobar2000.org/components/view/foo_musicbrainz), which grabs data from MusicBrainz's database, though it's not as robust as the one for Discogs. (You can always use a third-party tagging tool like [Picard](https://picard.musicbrainz.org/).)

To use this component, right click on any track/album, and head over to `Tagging > Discogs > Write Tags`. It will then look up the Discogs database for your album details.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_01-03-47.png)

Once found, choose the appropriate release for the album, and click Next. (You can also manually type the Release ID, if you know it.)

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_01-05-57.png)

Review your changes in the next dialog box, and click on "Write Tags" to write the new ID3 tags to your tracks.

Though keep in mind that this only saves the album art into the album directory *without* writing it into the ID3 tags too. To do so, right click on the tracks again, and go to `Tagging > Batch attach pictures`.

![foobar2000]({{ site.baseurl }}/public/images/blog/foobar2000/2015-11-08_01-08-51.png)

Choose to overwrite the album art already attached to the track if necessary, then click "OK" to save your changes.

## Conclusion

In conclusion: yes, you *can* actually make your foobar2000 setup look a little more like iTunes. Yes, foobar2000 is the one of the best music players out there, and yes, you *should* use it yourself too.

But feel free to use this guide as you wish. Customisation is one of foobar2000's prime experience, in fact, I *encourage* you to improve on this setup yourself. The setup demonstrated here is what has always worked for me, and people's tastes can be different, so feel free to change things up here and there if you don't like how some stuff works.

It's a tedious process at first, but trust me, it really *is* worth it at the end of the day.

[^fn-thumbbars]: Though a friend of mine *did* tell me it's called [thumbnail toolbars](https://msdn.microsoft.com/en-us/library/windows/desktop/dd378460(v=vs.85).aspx#thumbbars), but still.
[^fn-discogs-oauth]: [(link)](https://www.discogs.com/developers/#page:authentication,header:authentication-discogs-auth-flow)
