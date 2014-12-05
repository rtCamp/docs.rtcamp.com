---
title: rtp_hook_end_main_wrapper
---

### Description


Adds content to the end of #main-wrapper.


### Example



    
    function custom_rtp_hook_end_main_wrapper() { ?>
    <p>This is the end of #main-wrapper.</p><?php
    }
    add_action( 'rtp_hook_end_main_wrapper', 'custom_rtp_hook_end_main_wrapper' );
