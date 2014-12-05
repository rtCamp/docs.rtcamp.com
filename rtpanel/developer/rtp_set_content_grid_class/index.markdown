---
author: manish.songirkar
comments: false
date: 2014-02-07 11:32:38+00:00
layout: page
slug: rtp_set_content_grid_class
title: rtp_set_content_grid_class
---

Add or modify class for content area.

    
    function custom_rtp_set_content_grid_class() {
        return "large-8 columns custom-content-class";
    }
    add_filter( 'rtp_set_content_grid_class', 'custom_rtp_set_content_grid_class' );
