---
author: apekshadeshpande
comments: false
date: 2012-04-25 11:39:47+00:00
layout: page
slug: rtp_nav_menu_depth
title: rtp_nav_menu_depth
---

### Description


Modifies the depth of the primary nav menu. Default is 4.


### Example



    
    function custom_rtp_nav_menu_depth( $depth ) {
    return 2;
    }
    add_filter( 'rtp_nav_menu_depth', 'custom_rtp_nav_menu_depth' );
