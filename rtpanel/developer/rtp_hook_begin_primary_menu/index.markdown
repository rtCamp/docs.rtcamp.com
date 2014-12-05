---
author: manish.songirkar
comments: false
date: 2014-01-21 09:17:03+00:00
layout: page
slug: rtp_hook_begin_primary_menu
title: rtp_hook_begin_primary_menu
---

### Description


Adds content at the before primary navigation.


### Example



    
    function custom_rtp_hook_begin_primary_menu() { ?>
    <p>This content add before primary navigation.</p><?php
    }
    add_action( 'rtp_hook_begin_primary_menu', 'custom_rtp_hook_begin_primary_menu' );
