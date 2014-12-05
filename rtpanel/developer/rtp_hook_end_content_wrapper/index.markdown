---
date: 2012-04-25 11:24:11+00:00
title: rtp_hook_end_content_wrapper
---

### Description


Adds content at the end of #content-wrapper.


### Example



    
    function custom_hook_end_content_wrapper() { ?>
    <p>This is the end of #content-wrapper</p><?php
    }
    add_action( 'rtp_hook_end_content_wrapper', 'custom_hook_end_content_wrapper' );
