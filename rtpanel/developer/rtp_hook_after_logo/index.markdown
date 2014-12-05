---
title: rtp_hook_after_logo
---

### Description


Adds content after site logo.


### Example



    
    function custom_hook_after_logo() { ?>
    <p>This is after Logo</p><?php
    }
    add_action( 'rtp_hook_after_logo', 'custom_hook_after_logo' );
