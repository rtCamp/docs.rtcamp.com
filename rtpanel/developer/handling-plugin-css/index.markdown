---
comments: false
date: 2014-01-29 15:12:16+00:00
layout: page
slug: handling-plugin-css
title: Handling Plugin CSS
---

**Important:** Before starting with this tutorials, make sure you have [setup rtPanel](http://docs.rtcamp.com/rtpanel/developer/setup-rtpanel-development/) with its dependencies on your local system.

rtPanel has support for multiple plugins, and it loads all style by default. If you want to load only theme css, but not plugin css then need to do a small tweak.

Edit `_variables.scss` file in `/assets/rtpanel/scss/` location, navigate to **Control Support Plugins Styles** section.

Here you will see the code as,

    
    $load-bbpress-styles : true;
    $load-breadcrumb-styles : true;
    $load-buddypress-styles : true;
    $load-google-custom-search-styles : true;
    $load-pagenavi-styles : true;
    $load-woocommerce-styles : true;
    $load-jetpack-styles : true;
    $load-gravity-form-styles : true;
    $load-ninja-forms-styles : true;
    $load-contact-form-7-styles : true;
    $load-rtmedia-styles : true;
    $load-yarpp-styles: true;


Change the value `true` to `false`, this will remove that particular plugin styles from style.css. So no need to search and delete plugin CSS in style.css manually.

**Note:** Make sure the `grunt` command is running while doing this change.
