---
title: rtp_hook_before_header
---

### Description


Used to add content before header ( #header ).


### Example



    
    function custom_hook_before_header() { ?>
    <p>This is before #header</p><?php
    }
    add_action( 'rtp_hook_before_header', 'custom_hook_before_header' );
