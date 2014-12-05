---
title: rtp_gravatar_size
---

Modify author gravatar size on comment list.

    
    function custom_rtp_gravatar_size() {
        return 64;
    }
    add_filter( 'rtp_gravatar_size', 'custom_rtp_gravatar_size' );
