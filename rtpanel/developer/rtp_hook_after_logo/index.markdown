---
date: 2012-04-25 10:47:27+00:00
layout: page
slug: rtp_hook_after_logo
title: rtp_hook_after_logo
---

### Description


Adds content after site logo.


### Example



    
    function custom_hook_after_logo() { ?>
    <p>This is after Logo</p><?php
    }
    add_action( 'rtp_hook_after_logo', 'custom_hook_after_logo' );
