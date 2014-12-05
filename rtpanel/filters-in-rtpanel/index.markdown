---
date: 2012-03-23 11:51:45+00:00
excerpt: Filters are the special function able to modify the data without altering
  the core code. For example, changing 'Read More' text  on the blog page can be changed
  using the 'Filters'.
title: Filters in rtPanel
---

Filters are the special function able to modify the data without altering the core code. For example, changing 'Read More' text  on the blog page can be changed using the 'Filters'.

In the rtPanel child theme we have provided 6 filters as follow:

**rtp_header_image_width: **This is used to modify the width of the header image on your site. [Click here](https://rtcamp.com/rtpanel/docs/developer/rtp_header_image_width/) for the code.

**rtp_header_image_height: **This is used to modify the height of the header image on your site. [Click here](https://rtcamp.com/rtpanel/docs/developer/rtp_header_image_height/) for the code.

**rtp_nav_menu_depth: **This is used to specify the number of sub-menus/child to show in the primary menu. By default it is set to 4. [Click  here](https://rtcamp.com/rtpanel/docs/developer/rtp_nav_menu_depth/) for the code.

**rtp_default_image_path: **This could be used to specify the path to a default thumbnail image. Incase your posts don’t have a thumbnail, this default thumbnail image would show up. [Click here](https://rtcamp.com/rtpanel/docs/developer/rtp_default_image_path/) for the code.

**rtp_readmore: **This filter is used by rtPanel itself to wrap the read more text in square brackets. This could be used to remove the brackets or modify the read more text/link. [Click here ](https://rtcamp.com/rtpanel/docs/developer/rtp_readmore/)for the code.

**rtp_add_theme_pages:** This hook is mainly for plugin development. This adds an option tab next to General, Post & Comments.


### How to use Filter in the rtPanel  Child Theme?


To use the filter you just have to add the respective code in the "function.php" file and add the desire value to the code. For example, if you want to show the child menu of primary menu, then you have add the code as follows:

    
    function custom_rtp_nav_menu_depth( $depth ) {
     return 1;
     }
     add_filter( 'rtp_nav_menu_depth', 'custom_rtp_nav_menu_depth' );


If you have questions about using filters, please feel free to ask them on our [support forum](https://rtcamp.com/support/forum/rtpanel/forum/developer/).
