---
date: 2012-04-25 11:12:30+00:00
title: rtp_hook_begin_content_wrapper
---

### Description


Adds content at the beginning of #content-wrapper.


### Example



    
    function custom_hook_begin_content_wrapper() { ?>
    <p>This is the beginning of #content-wrapper</p><?php
    }
    add_action( 'rtp_hook_begin_content_wrapper', 'custom_hook_begin_content_wrapper' );
