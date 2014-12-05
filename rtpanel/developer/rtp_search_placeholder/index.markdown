---
date: 2014-02-07 10:51:30+00:00
title: rtp_search_placeholder
---

Modify search box placeholder text in search form.

    
    function custom_rtp_search_placeholder() {
        return "Search here";
    }
    add_filter( 'rtp_search_placeholder', 'custom_rtp_search_placeholder' );
