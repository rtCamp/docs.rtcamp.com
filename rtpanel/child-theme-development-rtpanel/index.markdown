---
date: 2011-12-26 09:15:18+00:00
slug: child-theme-development-rtpanel
title: Child theme Development using rtPanel
---

In this post, I will be introducing you to the child theme, which is more over the extension of a parent theme. So, I am talking about the child and the parent, so you can make-out the basic relationship between them. To be somewhat specific, the child theme inherits the functionality of a parent theme, say the parent here could be some popular Twenty Ten, Liquorice or Easel theme. I said that the child theme inherits the functionality of the parent, what does that mean? Yep! Exactly, we can completely inherit the same look and feel of the parent theme, which we can edit/modify to take it to a completely different level of customization, overriding their functions and styles using child themes. So we can agree that this parent theme now works as an arbitrary framework for the developer, serving as the core. I hope everything is quite clear until now and we have clarified ourselves with what a child theme exactly is.

With time, we realized that there must be the same subset of functions for the development of every child theme, apart from those provided by the Wordpress.  This was very important since we couldn't have relied on absolutely different function sets everytime we choose a different parent themes for our development. Considering it from the developer's point of view, rtPanel came in to serve the purpose. Presently, it now serves as the parent and as well as the framework for the child themes we develop, with several custom hooks and filters to add to the elegance. Developers can now easily tweak the codes of rtPanel and can develop most amazing websites, which otherwise could have been possible but not with such ease and elegance.

Now that you know what a child theme is and why do we prefer rtPanel as our parent framework, we are almost ready to create our first child theme. So before moving further, I want to bring it to your notice that since rtPanel serves as our core framework in the child theme development, we will not be touching the code throughout the development process in any way. Just to allow this flexibility, hooks have been added to the rtPanel, so that whatever extension we want to make over the core features, we can easily do it using these hooks, without altering the core. So in future if the rtPanel developers update their core code, the child theme customizations still remain intact, which otherwise could have been lost. Now, let's know how the parent child duo works out.

We start with installing whatever our parent theme is. Therefore we go to Appearance > Themes on the backend and Search for rtPanel. Install it and done! So we are now ready to install the child theme as well. But before that, I would like to mention the contents of the child theme. The most important component of all is the style.css, which must start with the information header followed by the `@import` rule as shown:

    
    /*
    Theme Name: TASC Design
    Template: rtpanel
    Version: 1.0
    Author: rtCamp
    Author URI: http://rtcamp.com
    Contributor: Abhimanyu
    */
    
    @import url("../rtpanel/style.css");


The next most important child theme component is functions.php that is used for creating custom actions on different hooks and filters to achieve the desired layout and content style. For example, if we don't want the default post meta top/bottom, that shows the time, categories, tags or the author name of a particular post, we can simply remove it as:

    
    remove_action( 'rtp_hook_post_meta_top','rtp_default_post_meta' );


or,

    
    remove_action( 'rtp_hook_post_meta_bottom','rtp_default_post_meta' );


Similarly, if we want it to be displayed at some other place, we can check for the appropriate hook provided ([http://rtpanel.com/docs/developer/](http://rtpanel.com/docs/developer/)) and create the action accordingly as:

    
    function rtp_default_post_meta_child( $placement ) {
          //your custom code here
    }
    add_action('rtp_hook_post_meta_top','rtp_default_post_meta_child');


Great! we successfully positioned the post meta at the desired position with ease. I discussed on the post meta quite intentionally, as I had been asked queries on positioning the post meta using hooks. Similarly, we can make use of filters as well, wherever needed. For example, if we need to remove the default braces provided in the read more link by rtPanel, we can remove it in exactly quite similar way as:

    
    remove_filter( 'rtp_readmore', 'rtp_readmore_braces' );


You can check the list of Filters provided by the rtPanel at [http://rtpanel.com/docs/developer/](http://rtpanel.com/docs/developer/).

So basically, hooks act more as the placeholders. We can choose the nearest hook from the target position, where we want the place our content and achieve further precision through the CSS. Actions and Filters are the two types of hooks. These hooks are launched during the execution but before presenting it to the user. So we can modify the contents or add some features on the fly, using hooks. Filters are mainly used to modify the content. For example, we can filter the content text shown on the blog using the available wordpress filter 'the_content' as:

    
    function set_custom_content($content) {
            $custom_post_content = "This is our default post text!!";
            return $custom_post_content;}
    add_filter("the_content", "set_custom_content");


So the function.php in you child theme is all about hooks, action and filters. Then there are the template files that can be applied to any number of pages. Each template file has a different information header as well such as:

    
    /**
     * Template Name: Home Page
     *
     * @package rtPanel
     *
     * @since rtPanel 2.0
     */
    
    //custom code


We can assign the templates to the desired page and style them accordingly.

If in case we are not able to customize the header or the footer, even by using the hooks, we can even override the files like header.php, footer.php or loop-common.php completely to achieve the desired layout. We just have to copy the one in the rtPanel and paste it into our child theme folder. Similarly you might need some more files as well. The javascript and the image files need to be kept separately in the respective directories within your child theme directory. So if you need to add the path to the respective files we can do it through the rtpanel's get_stylesheet_directory_uri() function as:

    
    get_stylesheet_directory_uri().'/js/file.js


Similarly, there are several other functions that equip you with high end capabilities, in addition to those provided by the Wordpress. Soon after we finish up with the child theme development, we make a zip file of the complete child theme directory and can directly upload it on our live server through Appearance > Theme > Upload on the backend. To make a note, the child theme also resides in the same directory as the parent theme i.e. wp-content/themes.

I hope I covered the basic walk-through of the child theme development, though if I missed up some important points that should otherwise have been mentioned, can be suggested.
