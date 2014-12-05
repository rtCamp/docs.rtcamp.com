---
title: rtp_hook_begin_post
---

## Description


Adds content at the beginning of every .post.


## Example



    
    function custom_hook_begin_post() { ?>
    <p>This is the beginning of .post</p><?php
    }
    add_action( 'rtp_hook_begin_post', 'custom_hook_begin_post' );
