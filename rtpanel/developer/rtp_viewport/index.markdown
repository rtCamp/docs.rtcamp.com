---
title: rtp_viewport
---

Modify viewport setting of meta tag present in the header.

    
    function custom_rtp_viewport() {
        return "width=1024";
    }
    add_filter( 'rtp_viewport', 'custom_rtp_viewport' );
