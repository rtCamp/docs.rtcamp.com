---
author: apekshadeshpande
comments: false
date: 2012-04-25 11:39:07+00:00
layout: page
slug: rtp_readmore
title: rtp_readmore
---

### Description


Modifies read more text. By default rtPanel uses this hook to surround the read more text with curly brackets. Default value is the Read More Text Theme Option.


### Example



    
    function custom_rtp_readmore( $readmore_text ) {
    return '('.$readmore_text.')';
    }
    add_filter( 'rtp_readmore', 'custom_rtp_readmore' );
    
    function remove_parent_filters() {
    remove_filter( 'rtp_readmore','rtp_readmore_braces' );
    }
    add_action(  'init', 'remove_parent_filters'  );
