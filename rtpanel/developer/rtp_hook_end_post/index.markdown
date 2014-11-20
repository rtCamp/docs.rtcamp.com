---
author: apekshadeshpande
comments: false
date: 2012-04-25 11:23:02+00:00
layout: page
slug: rtp_hook_end_post
title: rtp_hook_end_post
wordpress_id: 3126
---

### Description


Adds content at the end of every .post.


### Example



    
    function custom_hook_end_post() { ?>
    <p>This is the end of .post</p><?php
    }
    add_action( 'rtp_hook_end_post', 'custom_hook_end_post' );
