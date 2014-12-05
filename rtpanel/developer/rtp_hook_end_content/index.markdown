---
title: rtp_hook_end_content
---

### Description


Adds content at the end of #content.


### Example



    
    function custom_hook_end_content() { ?>
    <p>This is the end of #content</p><?php
    }
    add_action( 'rtp_hook_end_content', 'custom_hook_end_content' );
