---
date: 2012-02-16 07:37:11+00:00
excerpt: So far we have discussed about Custom post type, Custom taxonomies etc. which
  were helpful to separate specific posts from the normal posts and grouping the specific
  post separately. In this article we will learn about 'Creating Metabox on rtPanel
  Child Theme'.
slug: create-metabox-on-rtpanel-child-theme
title: Create Metabox on rtPanel Child Theme
---

So far we have discussed about [Custom post type](https://rtcamp.com/blog/custompost-rtpanel-child-theme/), [Custom taxonomies](https://rtcamp.com/blog/creating-custom-taxonomy-rtpanel/) etc. which were helpful to separate specific posts from the normal posts and grouping the specific post separately. In this article we will learn about 'Creating Metabox on rtPanel Child Theme'.


### What is 'Custom Metabox'?


Whenever we have to add additional information to the posts or pages in WordPress we use 'Custom Field'. But the main disadvantage of using 'Custom Field' is that user should know the meta key used for it and its value. To over come this, Custom metabox comes into picture. MetaBox is extra functionality added to post/pages in the admin area where additional information can be added to that post or page.


### Creating MetaBox for post in rtPanel Child Theme




#### Inbuilt Function


rtPanel child theme has file name 'rtp-custom-metaboxes.php' in its lib folder. This file has basic functionality to add MetaBox to the post. Thus by adding required value to the functions in 'rtp-custom-metaboxes.php' file it is easy to add the metabox to desired post.


#### Using the function


The metabox is created using 3 functions:
**function rtp_post_types_custom_box()**
Using this function, you set name, position and priority of the metabox.
**function rtp_posts_inner_custom_box( $post )**
Using this function, HTML markup of the metabox is build i.e. you have to do HTML coding here to display the information in the metabox in the way you would like to display it at front end.
**function rtp_post_types_save_postdata( $post_id ) **
In this function, such a code is written which will be executed after post/page is published or updated.
(For more details you can refer to [Codex](http://codex.wordpress.org/Function_Reference/add_meta_box))

Once you add all the required value to the above  lines of code to the above functions you have to create an action on the hooks as:

    
    add_action( 'add_meta_boxes', 'rtp_post_types_custom_box' );
    
    add_action( 'admin_init', 'rtp_post_types_custom_box', 1 );
    
    add_action( 'save_post', 'rtp_post_types_save_postdata' );


Once you are done with the code you will find the meta box at the back end of mention post admin area of your site.


### Example


In our [previous post](https://rtcamp.com/blog/custompost-rtpanel-child-theme/) related to creating Custom Post Type we had mentioned about our [ NEDconnections](http://nedconnections.com/) project. For this site, meta box ‘Download PDF’ was added to ‘Resources’ post so that additional information can be added to the ‘Resources’ post other than its post content.


### Conclusion


Using Custom Metabox you can add additional information to your posts or pages. And Creating MetaBox for post in rtPanel Child Theme is time saving, and can easily implemented.
