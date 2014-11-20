---
author: abhimanyu1
comments: false
date: 2011-12-17 06:01:23+00:00
excerpt: 'The next most important child theme component is functions.php that is used
  for creating custom actions on different hooks and filters to achieve the desired
  layout and content style. For example, if we don’t want the default post meta top/bottom,
  that shows the time, categories, tags or the author name of a particular post, we
  can simply remove it as:'
layout: page
slug: child-theme-development-using-rtpanel-part-2
title: Child Theme development using rtPanel - Part 2
wordpress_id: 796
---

We got to know about the _**style.css**_ in the [previous post](https://rtcamp.com/blog/child-theme-development-rtpanel-part/). The next most important child theme component is **_functions.php_** that is used for creating custom actions on different hooks and filters to achieve the desired layout and content style. For example, if we don’t want the default post meta top/bottom, that shows the time, categories, tags or the author name of a particular post, we can simply remove it as:

    
    remove_action( 'rtp_hook_post_meta_top','rtp_default_post_meta' );


or,

    
    remove_action( 'rtp_hook_post_meta_bottom','rtp_default_post_meta' );


Similarly, if we want it to be displayed at some other place, we have to first remove the default action created by rtPanel to add the post meta as shown above, then check for the appropriate hook provided ([http://docs.rtcamp.com/rtpanel/developer/](https://docs.rtcamp.com/rtpanel/developer/)) and finally create the action accordingly. If we want the post meta top to be displayed to the right of the post titles, we would rather remove the default post meta top firstly, as mentioned above and we would create a new action on rtp_hook_end_post_title, which we can style further through style.css to achieve the desired layout.

    
    function rtp_custom_post_meta_child( $placement ) {
          //your custom code here
    }
    add_action('rtp_hook_end_post_title','rtp_custom_post_meta_child');


We discussed on the post meta quite intentionally, as we had been asked queries on positioning the post meta using hooks. Similarly, we can make use of filters as well, wherever needed. For example, if we need to remove the default braces provided in the read more link by rtPanel, we can remove it in exactly quite similar way as:

    
    remove_filter( 'rtp_readmore', 'rtp_readmore_braces' );


You can check the list of Filters provided by the rtPanel at [http://docs.rtcamp.com/rtpanel/developer/](http://docs.rtcamp.com/rtpanel/developer/).


#### What exactly are the action, hooks and filter?


So basically, hooks act more as the placeholders. We can choose the nearest hook from the target position, where we want to place our content and achieve further precision through the CSS. Actions and Filters are the two types of hooks. These hooks are launched during the execution but before presenting it to the user. So we can modify the contents or add some features on the fly, using hooks. Filters are mainly used to modify the content. For example, we can filter the content text shown on the blog using the available wordpress filter ‘the_content’ as:

    
    function set_custom_content($content) {
            $custom_post_content = "This is our default post text!!";
            return $custom_post_content;}
    add_filter("the_content", "set_custom_content");




#### Applying templates to different pages


So the function.php in your child theme is all about hooks, action and filters. Then there are the template files that can be applied to any number of pages. Each template file has a different information header as well such as:

    
    /**
     * Template Name: Home Page
     *
     * @package rtPanel
     *
     * @since rtPanel 2.0
     */
    
    //custom code


We can assign the templates to the desired page and style them accordingly.


#### Over-riding individual files if needed


If in case we are not able to customize the header or the footer, even by using the hooks, we can even override the files like header.php, footer.php or loop-common.php completely to achieve the desired layout. We just have to copy the one in the rtPanel and paste it into our child theme folder. Similarly you might need some more files as well.


#### Including the custom js files and style sheets as needed


The javascript and the image files need to be kept separately in the respective directories within your child theme directory. So if you need to add the path to the respective files (even for the individual images) we can do it through the rtpanel’s get_stylesheet_directory_uri() function as:

    
    get_stylesheet_directory_uri().'/js/file.js


To include a js file, you need to use wp_enqueue_script and create an action accordingly as:

    
    function rtp_custom_add_scripts() {
        wp_enqueue_script( 'rtp-custom-script', get_stylesheet_directory_uri() . '/custom.js');
        wp_enqueue_script( 'thickbox' );
    }
    add_action( 'wp_enqueue_scripts', 'rtp_custom_add_scripts' );


Similarly to include external stylesheets, we can write the following:

    
    function rtp_custom_add_styles() {
        wp_enqueue_style( 'thickbox');
        //custom code
    }
    add_action( 'wp_print_styles', 'rtp_custom_add_styles' );




#### Finishing up and installing the child theme


Similarly, there are several other functions that equip you with high end capabilities, in addition to those provided by the WordPress. Soon after we finish up with the child theme development, we make a zip file of the complete child theme directory and can directly upload it on our live server through Appearance > Theme > Upload on the backend.

To make a note, the child theme also resides in the same directory as the parent theme i.e. wp-content/themes.

We hope that we covered the basic walk-through of the child theme development, though if we missed up some important points that should otherwise have been mentioned, can be suggested.
