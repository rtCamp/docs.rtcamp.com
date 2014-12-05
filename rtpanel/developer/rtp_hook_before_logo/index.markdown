---
title: rtp_hook_before_logo
---

### Description


Adds content before site logo.


### Example



    
    function custom_hook_before_logo() { ?>
    <p>This is before Logo</p><?php
    }
    add_action( 'rtp_hook_before_logo', 'custom_hook_before_logo' );
