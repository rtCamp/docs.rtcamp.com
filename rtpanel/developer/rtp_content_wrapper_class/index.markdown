---
title: rtp_content_wrapper_class
---

Add extra class for the content wrapper.

    
    function custom_rtp_content_wrapper_class() {
        return "rtp-content-wrapper rtp-section-wrapper my-custom-class";
    }
    add_filter( 'rtp_content_wrapper_class', 'custom_rtp_content_wrapper_class' );
