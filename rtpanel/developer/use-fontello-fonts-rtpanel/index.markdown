---
author: manish.songirkar
comments: false
date: 2014-01-28 06:08:37+00:00
layout: page
slug: use-fontello-fonts-rtpanel
title: How to use Fontello fonts in rtPanel
wordpress_id: 56433
---

**Important:** Before starting with this tutorials, make sure you have [setup rtPanel](http://docs.rtcamp.com/rtpanel/developer/setup-rtpanel-development/) with its dependencies on your local system.

In rtPanel we have already configured [Fontello](http://fontello.com/) fonts, in `/assets/fontello/` location you will see the css/ and font/ directory with config.json file. 

Follow these steps, to add custom Fontello icons,

**1. Generate fonts**

Import existing config.json file to [Fontello.com](http://fontello.com/)
[caption id="attachment_56462" align="aligncenter" width="620"]![rtPanel Fontello Icon](https://rtcamp.com/wp-content/uploads/2014/01/rtPanel_Fontello_Icon-620x316.png) rtPanel Fontello Icons[/caption]

**2. Choose custom fonts**

After importing config.json file, it will highlight existing icons in the list, now you can choose your required icons and download web font.

**3. Import config.json**

Extract zip file which downloaded from a live site, copy only **config.json** file to `/assets/fontello/` location (overwrite existing file).

After above process, start a terminal and run `grunt` command, this command will generate icon font and css in the respective directory.

To use new custom icons you may refer `demo.html` in previously downloaded zip.
