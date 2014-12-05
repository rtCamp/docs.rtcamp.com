---
title: rtp_hook_begin_main_wrapper
---

### Description


Adds content at the beginning of the #main-wrapper.


### Example



    
    function custom_rtp_hook_begin_main_wrapper() { ?>
    <p>This is the beginning of #main-wrapper.</p><?php
    }
    add_action( 'rtp_hook_begin_main_wrapper', 'custom_rtp_hook_begin_main_wrapper' );
