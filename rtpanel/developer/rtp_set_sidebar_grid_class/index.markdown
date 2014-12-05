---
author: manish.songirkar
comments: false
date: 2014-02-07 11:30:56+00:00
layout: page
slug: rtp_set_sidebar_grid_class
title: rtp_set_sidebar_grid_class
---

Add or modify class for sidebar container.

    
    function custom_rtp_set_sidebar_grid_class() {
        return "large-4 columns custom-sidebar-grid-class";
    }
    add_filter( 'rtp_set_sidebar_grid_class', 'custom_rtp_set_sidebar_grid_class' );
