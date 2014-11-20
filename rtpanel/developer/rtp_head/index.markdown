---
author: manish.songirkar
comments: false
date: 2014-01-21 07:21:50+00:00
layout: page
slug: rtp_head
title: rtp_head
wordpress_id: 56053
---

### Description


Used to add style/scripts after wp_head hook before closing of head tag.


### Example



    
    function custom_rtp_head() { ?>
    <p>This code is call after wp_head hook and before closing of head tag. </p><?php
    }
    add_action( 'rtp_head', 'custom_rtp_head' );
