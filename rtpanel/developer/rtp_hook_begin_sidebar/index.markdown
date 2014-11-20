---
author: apekshadeshpande
comments: false
date: 2012-04-25 11:19:06+00:00
layout: page
slug: rtp_hook_begin_sidebar
title: rtp_hook_begin_sidebar
wordpress_id: 3120
---

### Description


Adds content at the beginning of the Sidebar (#sidebar).


### Example



    
    function custom_hook_begin_sidebar() { ?>
    <p>This is at the beginning of the Sidebar</p><?php
    }
    add_action( 'rtp_hook_begin_sidebar', 'custom_hook_begin_sidebar' );
