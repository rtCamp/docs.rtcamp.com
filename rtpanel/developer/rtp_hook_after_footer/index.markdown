---
title: rtp_hook_after_footer
---

### Description


Adds content after Footer (#footer).


### Example



    
    function custom_hook_after_footer() { ?>
    <p>This is the after Footer</p><?php
    }
    add_action( 'rtp_hook_after_footer', 'custom_hook_after_footer' );
