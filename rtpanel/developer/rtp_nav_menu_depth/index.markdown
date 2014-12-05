---
title: rtp_nav_menu_depth
---

### Description


Modifies the depth of the primary nav menu. Default is 4.


### Example



    
    function custom_rtp_nav_menu_depth( $depth ) {
    return 2;
    }
    add_filter( 'rtp_nav_menu_depth', 'custom_rtp_nav_menu_depth' );
