---
date: 2014-01-21 09:20:07+00:00
layout: page
slug: rtp_hook_end_primary_menu
title: rtp_hook_end_primary_menu
---

### Description


Adds content after primary navigation.


### Example



    
    function custom_rtp_hook_end_primary_menu() { ?>
    <p>This content add after primary navigation.</p><?php
    }
    add_action( 'rtp_hook_end_primary_menu', 'custom_rtp_hook_end_primary_menu' );
