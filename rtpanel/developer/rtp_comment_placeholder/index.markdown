---
title: rtp_comment_placeholder
---

Modify the comment textarea placeholder text.

    
    function custom_rtp_comment_placeholder() {
        return "Comment here...";
    }
    add_filter( 'rtp_comment_placeholder', 'custom_rtp_comment_placeholder' );
