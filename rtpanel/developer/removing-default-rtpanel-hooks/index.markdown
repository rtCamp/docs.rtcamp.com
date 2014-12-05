---
date: 2012-05-02 10:11:51+00:00
slug: removing-default-rtpanel-hooks
title: Removing the default rtPanel Hooks
---

From all the previous post have learnt many things about rtPanel. rtPanel has made the development easy. As per requirement we can provide the client more flexibility to add content in the site as per the their desire. rtPanel provides the customization of adding footer, images, etc.

In this posts we will explore one more feature of rtPanel i.e. removing the default rtPanel Hooks.

There are many hooks available in rtPanel that are applied in the theme. The hooks are discussed [here](https://rtcamp.com/rtpanel/docs/developer/) in details. Some of the hooks which not required can be removed easily. These common hooks are listed out in the file "rtp-custom-hooks-applied.php" which is available in the lib folder of the child page. The functions in `rtp_remove_parent_hooks()` includes some remove action and remove the filter by which default rtPanel hooks can be removed. This default hook which can be removed is a navigation menu, post meta, edit link, read more braces, no_ellipsis etc.

Following are the list of hooks can be removed easily using rtPanel Child Theme,

    
    remove_action( 'rtp_hook_after_logo', 'rtp_blog_description' ); // Remove Tagline
    remove_action( 'rtp_hook_end_header', 'rtp_header_separator_border' ); // Remove Header Border
    remove_action( 'rtp_hook_single_pagination', 'rtp_default_single_pagination' ); // Remove Single Pagination
    remove_action( 'rtp_hook_archive_pagination', 'rtp_default_archive_pagination' ); // Remove Archive Pagination
    remove_action( 'rtp_hook_begin_header','rtp_default_nav_menu' ); // Remove Primary Navigation Menu
    remove_action( 'rtp_hook_post_meta_top','rtp_default_post_meta' ); // Post Meta Top
    remove_action( 'rtp_hook_end_post_title', 'rtp_default_comment_count' ); // Post Meta Top Comment Count
    remove_action( 'rtp_hook_post_meta_bottom','rtp_default_post_meta' ); // Post Meta Bottom
    remove_action( 'rtp_hook_begin_post_meta_top', 'rtp_edit_link' ); // Remove Post Edit Link
    remove_action( 'rtp_hook_comments', 'rtp_default_comments' ); // Remove Comments
    remove_action( 'rtp_hook_begin_content', 'rtp_breadcrumb_support' ); // Remove breadcrumb
    remove_action( 'rtp_hook_after_content_wrapper', 'rtp_footer_separator_border' ); // Remove Footer Separator
    remove_action( 'rtp_hook_sidebar_content', 'rtp_sidebar_content' ); // Remove Default sidebar text


Following are the list of Filters which can removed in rtPanel Child Theme,

    
    remove_filter( 'rtp_readmore', 'rtp_readmore_braces' ); // Remove Readme Braces
    remove_filter( 'the_excerpt', 'rtp_no_ellipsis' ); // Remove Ellipsis from Excerpt
    remove_filter( 'gallery_style', 'rtp_remove_gallery_css' ); // Remove Gallery Style
    remove_filter( 'excerpt_length', 'rtp_new_excerpt_length' ); // Remove Excerpt Length
    remove_filter( 'the_content', 'rt_nofollow' ); // Remove No Follow
    remove_filter( 'the_excerpt', 'rt_nofollow' ); // Remove No Follow
    remove_filter( 'get_search_form', 'rtp_custom_search_form' ); // Remove Custom Search Form



If you have any doubt/suggestion/question, feel free to ask us on [rtPanel Support Forum](https://rtcamp.com/support/forum/rtpanel/).
