---
author: abhimanyu1
comments: false
date: 2011-12-30 05:37:32+00:00
excerpt: What if users want the different options for both header and logo? Considering
  that we have provided options for the header image and logo separately in rtPanel
  Theme Framwork. That is, if we upload the logo, its clickable, but if we upload
  the header image, its not clickable.
layout: page
slug: clickable-header-in-rtpanel-child-theme
title: Clickable header in rtPanel child theme
wordpress_id: 931
---

We do come across some Wordpress sites that don't have logos but have the header image banners instead. And some popular themes like **Twenty Eleven** provides an option only for the header image, while there is no separate option for uploading the logo from the back-end. In such cases, like in _Twenty Eleven_ themes, the header image and logo are the same and hence are _clickable_ by default.

But what if users want the different options for both header and logo? Considering that we have provided options for the header image and logo separately in rtPanel Theme Framwork. That is, if we upload the logo, its clickable, but if we upload the header image, its not clickable.


### Creating the Header Image Banner:


If we need the header image banner instead of the logo, just put the following code into your child theme's header.php file, under the <head> section.

    
    $header_image = get_header_image();


This **$header_image** variable now outputs the **Header Image URL** when echoed. So, echo this image using _<IMG>_ tag within the _<a>_ tag, linking to the homepage.

    
    echo '<a href="'.esc_url( home_url( '/' ) ).'"><img src="'.$header_image.'" alt=""/></a>';


Once done successfully, the header image now appears clickable , redirecting to the homepage on clicking.
