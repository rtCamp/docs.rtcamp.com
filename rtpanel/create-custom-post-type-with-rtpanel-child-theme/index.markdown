---
author: apekshadeshpande
comments: false
date: 2012-02-02 10:24:43+00:00
layout: page
slug: create-custom-post-type-with-rtpanel-child-theme
title: Create Custom Post Type with rtPanel Child Theme
---

In our earlier posts we have covered some rtPanel child theme features like creating post slider ([rtp_slider](https://rtcamp.com/blog/implementing-rtpslider-child-theme/) function), developing [custom page template](https://rtcamp.com/blog/creating-custom-page-templates-rtpanel-child-theme/), [using child theme as hooks](https://rtcamp.com/blog/child-theme-development-rtpanel-part-2/) etc.

In this post we will uncover an interesting and useful feature i.e Custom Post Types. There are 2 post types in the WordPress by default: Pages and Posts. These are displayed in different ways according to the theme.

While creating the posts for sites like movies database, real estate listing or books database, it becomes essential to define the certain input fields which are different than normal post/page types. Here comes the need of custom post types which keeps specific posts separate from the normal posts.


## Creating Custom Post Type in rtPanel Child Theme




### Inbuilt Function


The Child theme of rtPanel has inbuilt function for custom post type. The file name "rtp-custom-posts.php" in lib folder of Child theme of rtPanel has the basic functionality. It makes easy to implement the custom post type while developing the site using Child theme of rtPanel.


### Using the function


Firstly you have to add the values in the function '**register_post_type**' accordingly as you want to create custom post type in your site.
For example,

    
       function rtp_create_post_types() {
    
        /* Custom Posts */
        register_post_type( 'custom-post', array(
            'labels' => array(
            'name' => _x('Custom Posts', 'post type general name'),
            'singular_name' => _x('Custom Post', 'post type singular name'),
            'add_new' => _x('Add New', 'custom post'),
            'add_new_item' => __('Add New Custom Post'),
             .......
             .......
              );
          }


(You can refer to [Codex](http://codex.wordpress.org/Function_Reference/register_post_type) for more details about configuring custom post type.)

Now to implement the registered custom post type that you have created (as above) in the WordPress, you have to add the following code.

    
    add_action( 'init', 'create_post_type' );


Once you are done with the code then you will see a new menu of your new custom post type in the back end of your site.


**For Example:**
In one of our rtPanel child theme ([NEDconnections](http://nedconnections.com)), custom post type functionality has been used for post related to Media, Events, Resources etc. For 'Resources' post we had to add functionality of 'Download PDF'.
After adding required value in the register_post_type function and adding add_action to the "rtp-custom-posts.php" file we get the desired custom post in the sidebar menus at the back end of WordPress site as below Image.
[![](https://rtcamp.com/wp-content/uploads/2012/01/custom-post33-600x377.jpg)](https://rtcamp.com/wp-content/uploads/2012/01/custom-post33.jpg)
You can notice that the options are pretty similar to normal posts. Its easy to manage and efficient way of handling specific content. Now lets see, how it looks at front end:
[![](https://rtcamp.com/wp-content/uploads/2012/01/custom-post-41-600x300.jpg)](https://rtcamp.com/wp-content/uploads/2012/01/custom-post-41.jpg)
As seen in above example get an idea why we used custom post type and how custom post type can be used in your site to show specific posts separately!!!


Some other rtPanel child themes where custom post type used are : [Intrapac Projects](http://www.intrapac.com.au/), R2CSI

You can also create various custom post types for your website and add the links below as a comment. We would love to see your work.

If you face any technical difficulties, feel free to ask your questions on [support forum](https://rtcamp.com/support/forum/rtpanel/forum/developer/).
