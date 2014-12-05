---
title: rtp_hook_before_footer
---

### Description


Adds content before Footer (#footer).


### Example



    
    function custom_hook_before_footer() { ?>
    <p>This is the before Footer</p><?php
    }
    add_action( 'rtp_hook_before_footer', 'custom_hook_before_footer' );
