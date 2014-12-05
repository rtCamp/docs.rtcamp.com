---
date: 2014-01-21 09:40:53+00:00
title: rtp_hook_after_content_wrapper
---

### Description


Adds content after end of #content-wrapper.


### Example



    
    function custom_rtp_hook_after_content_wrapper() { ?>
    <p>This content is after #content-wrapper.</p><?php
    }
    add_action( 'rtp_hook_after_content_wrapper', 'custom_rtp_hook_after_content_wrapper' );
