---
comments: false
date: 2014-01-06 11:22:16+00:00
layout: page
slug: theme-media-tab
title: BuddyPress theme media tab
---

By default, rtMedia uses the current theme's `index.php` template as the base template. If in case you want to change this to some other template or if you are using any theme based on BuddyPress default theme and having issue with the rtMedia media tab, then you can specify a different template to be used by rtMedia.

Just put the following code in your theme's `functions.php` file.

    
    <code>function rtmedia_main_template_include($template, $new_rt_template) {
            global $wp_query;
    	$wp_query->is_page = true;
    	return get_page_template();
    }
    add_filter('rtmedia_main_template_include', 'rtmedia_main_template_include', 20, 2);
    </code>


This will set the theme `page.php` template as base template for rtMedia. If you wish to make different template for the same, just use this function `locate_template('your-custom-template.php')` instead of the function `get_page_template()` used in the above code.
