---
title: rtp_url_placeholder
---

Modify website placeholder text in comment form.

    
    function custom_rtp_url_placeholder() {
        return "Enter Website URL";
    }
    add_filter( 'rtp_url_placeholder', 'custom_rtp_url_placeholder' );
