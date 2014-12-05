---
author: apekshadeshpande
comments: false
date: 2012-04-25 11:21:58+00:00
layout: page
slug: rtp_hook_end_post_content
title: rtp_hook_end_post_content
---

### Description


Adds content to the end of post content (.post-content).


### Example



    
    function custom_hook_end_post_content() { ?>
    <p>This is the after Post Content</p><?php
    }
    add_action( 'rtp_hook_end_post_content', 'custom_hook_end_post_content' );
