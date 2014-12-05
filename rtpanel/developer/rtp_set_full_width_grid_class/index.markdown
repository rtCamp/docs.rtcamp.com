---
title: rtp_set_full_width_grid_class
---

Add or modify full width template grid class.

    
    function custom_rtp_set_full_width_grid_class() {
        return "large-12 columns rtp-full-width-grid custom-full-width-grid-class";
    }
    add_filter( 'rtp_set_full_width_grid_class', 'custom_rtp_set_full_width_grid_class' );
