---
comments: false
date: 2012-04-25 11:25:47+00:00
layout: page
slug: rtp_hook_end_post_title
title: rtp_hook_end_post_title
---

### Description


Adds content after every post's title.


### Example



    
    function custom_hook_end_post_title() { ?>
    <p>This is after post's title</p><?php
    }
    add_action( 'rtp_hook_end_post_title', 'custom_hook_end_post_title' );
