---
author: apekshadeshpande
comments: false
date: 2012-04-25 11:20:25+00:00
layout: page
slug: rtp_hook_begin_post_title
title: rtp_hook_begin_post_title
wordpress_id: 3122
---

### Description


Adds content before every post's title.


### Example



    
    function custom_hook_begin_post_title() { ?>
    <p>This is before post's title</p><?php
    }
    add_action( 'rtp_hook_begin_post_title', 'custom_hook_begin_post_title' );
