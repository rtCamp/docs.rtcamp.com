---
comments: false
date: 2012-04-25 11:16:41+00:00
layout: page
slug: rtp_hook_begin_post_content
title: rtp_hook_begin_post_content
---

### Description


Adds content to the beginning of post content (.post-content).


### Example



    
    function custom_hook_begin_post_content() { ?>
    <p>This is the before Post Content</p><?php
    }
    add_action( 'rtp_hook_begin_post_content', 'custom_hook_begin_post_content' );
    
