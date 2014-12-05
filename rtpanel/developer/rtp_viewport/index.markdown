---
comments: false
date: 2014-02-07 10:59:22+00:00
layout: page
slug: rtp_viewport
title: rtp_viewport
---

Modify viewport setting of meta tag present in the header.

    
    function custom_rtp_viewport() {
        return "width=1024";
    }
    add_filter( 'rtp_viewport', 'custom_rtp_viewport' );
