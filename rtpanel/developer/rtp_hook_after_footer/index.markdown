---
author: apekshadeshpande
comments: false
date: 2012-04-25 10:46:01+00:00
layout: page
slug: rtp_hook_after_footer
title: rtp_hook_after_footer
---

### Description


Adds content after Footer (#footer).


### Example



    
    function custom_hook_after_footer() { ?>
    <p>This is the after Footer</p><?php
    }
    add_action( 'rtp_hook_after_footer', 'custom_hook_after_footer' );
