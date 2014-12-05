---
date: 2014-01-21 09:08:17+00:00
layout: page
slug: rtp_hook_begin_header
title: rtp_hook_begin_header
---

### Description


Adds content at the beginning of the header (.rtp-header)


### Example



    
    function custom_rtp_hook_begin_header() { ?>
    <p>This is the begin of .rtp-header</p><?php
    }
    add_action( 'rtp_hook_begin_header', 'custom_rtp_hook_begin_header' );
