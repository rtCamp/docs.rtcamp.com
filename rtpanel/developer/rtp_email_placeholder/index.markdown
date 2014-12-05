---
title: rtp_email_placeholder
---

Modify email placeholder text in comment form.

    
    function custom_rtp_email_placeholder() {
        return "Enter Email Here";
    }
    add_filter( 'rtp_email_placeholder', 'custom_rtp_email_placeholder' );
