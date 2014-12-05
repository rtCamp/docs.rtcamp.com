---
date: 2012-04-25 10:55:04+00:00
layout: page
slug: rtp_hook_before_footer
title: rtp_hook_before_footer
---

### Description


Adds content before Footer (#footer).


### Example



    
    function custom_hook_before_footer() { ?>
    <p>This is the before Footer</p><?php
    }
    add_action( 'rtp_hook_before_footer', 'custom_hook_before_footer' );
