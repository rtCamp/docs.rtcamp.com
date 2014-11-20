---
author: apekshadeshpande
comments: false
date: 2012-04-25 10:51:35+00:00
layout: page
slug: rtp_hook_before_logo
title: rtp_hook_before_logo
wordpress_id: 3100
---

### Description


Adds content before site logo.


### Example



    
    function custom_hook_before_logo() { ?>
    <p>This is before Logo</p><?php
    }
    add_action( 'rtp_hook_before_logo', 'custom_hook_before_logo' );
