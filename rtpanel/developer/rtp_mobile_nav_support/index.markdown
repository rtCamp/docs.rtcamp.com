---
date: 2014-02-07 11:12:54+00:00
slug: rtp_mobile_nav_support
title: rtp_mobile_nav_support
---

Support for mobile navigation style. default is `return " rtp-mobile-nav";`. If don't want to show mobile navigation style then use `return "";` in following code.

    
    function custom_rtp_mobile_nav_support() {
        return " rtp-mobile-nav";
    }
    add_filter( 'rtp_mobile_nav_support', 'custom_rtp_mobile_nav_support' );
