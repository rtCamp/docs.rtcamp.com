---
title: rtp_hook_end_footer
---

### Description


Adds content at the end of #footer-wrapper.


### Example



    
    function custom_rtp_hook_end_footer() { ?>
    <p>This is the end of #footer-wrapper.</p><?php
    }
    add_action( 'rtp_hook_end_footer', 'custom_rtp_hook_end_footer' );
