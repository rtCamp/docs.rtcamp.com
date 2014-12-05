---
title: rtp_hook_before_content_wrapper
---

### Description


Adds content after end of #header-wrapper and before #content-wrapper.


### Example



    
    function custom_rtp_hook_before_content_wrapper() { ?>
    <p>This content is before #content-wrapper.</p><?php
    }
    add_action( 'rtp_hook_before_content_wrapper', 'custom_rtp_hook_before_content_wrapper' );
