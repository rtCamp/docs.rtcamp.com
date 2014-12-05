---
comments: false
date: 2012-04-25 11:11:51+00:00
layout: page
slug: rtp_hook_begin_post
title: rtp_hook_begin_post
---

## Description


Adds content at the beginning of every .post.


## Example



    
    function custom_hook_begin_post() { ?>
    <p>This is the beginning of .post</p><?php
    }
    add_action( 'rtp_hook_begin_post', 'custom_hook_begin_post' );
