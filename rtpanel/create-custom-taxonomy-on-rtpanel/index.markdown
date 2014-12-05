---
date: 2012-02-08 12:02:41+00:00
excerpt: Let us see how to Create Custom Taxonomy on rtPanel and what are its uses.
  Taxonomies are used to classify posts in your WordPress blog.
slug: create-custom-taxonomy-on-rtpanel
title: Create Custom Taxonomy on rtPanel
---

In last article we had seen about[ Creating Custom Post Type on rtPanel](https://rtcamp.com/blog/custompost-rtpanel-child-theme/) and its uses. In this article we will move ahead to see how to Create Custom Taxonomy on rtPanel and what are its uses.


### What are Taxonomies?


Taxonomies are used to classify posts in your WordPress blog. By default WordPress has provided 2 taxonomies i.e. "Categories" and "Tags".

**Why to use Custom Taxonomy?**
As we have seen earlier, taxonomy is helpful in classifying different types of post. Custom Taxonomy will help to categorize the posts more precisely. For example, while creating website for real estate the posts related to projects can have custom taxonomies such as city, developers etc. so that each post can be classified more clearly.


### Creating Custom Post Type on rtPanel


**Inbuilt Function**
rtPanel child theme has inbuilt function of Custom Taxonomies. In lib folder of Child theme of rtPanel you can find file the name “rtp-custom-taxonomies.php” which has the basic functionality of Custom Taxonomies. That is why it becomes very easy to implement the Custom Taxonomies while developing the site using Child theme of rtPanel.

**Using the function **
While creating custom taxonomy, you have to add the values accordingly in the function ‘register_post_type‘ as you want to create custom taxonomy for the related post in your site.
For example,

    
    function rtp_create_taxonomies() {
    
        /* Post Custom Taxonomy */
        register_taxonomy( 'custom-taxonomy', 'post', array(
            'hierarchical' => true,
            'update_count_callback' => '',
            'rewrite' => true,
            'query_var' => 'custom-taxonomy',
            'public' => true,
            'show_ui' => null,
            'show_tagcloud' => null,
            '_builtin' => false,
            'labels' => array(
            'name' => _x( 'Custom Taxonomies', 'taxonomy general name' ),
            'singular_name' => _x( 'Custom Taxonomy', 'taxonomy singular name' ),
             .......
             .......
              );
          }


(Refer to [Codex](http://codex.wordpress.org/Function_Reference/register_taxonomy) to know more about configuring Custom Taxonomy.)

Once you have registered all Custom Taxonomy (that you have), you need to add the following function:

    
    add_action( 'init', 'rtp_create_taxonomies' );


Once you are done with the code then you will see a new sub-menu of your new Custom Taxonomy under the post (or custom post type as you have mentioned in your code) in the back end of your site.

**For Example:**
In one of our rtPanel child theme ([Intrapac Projects](http://www.intrapac.com.au/)) 'States' as Custom Taxonomy has been used for 'Projects' custom post type, to group their 'Project' posts state wise.

After adding desired value to register_taxonomy function and adding add_action to the "rtp-custom-taxonomies.php" file we get the desired taxonomy in the sidebar as sub-menu under the custom post type at the back end of WordPress site as below Image.
[![](https://rtcamp.com/wp-content/uploads/2012/02/custom-taxonomy-600x270.jpg)](https://rtcamp.com/careers/apply-now/)
So you can see in the above image that 'State' taxonomy is very similar to the category in the normal post.

Now lets see, how it looks at front end:
[![](https://rtcamp.com/wp-content/uploads/2012/02/custom-taxonomy-1-600x315.jpg)](https://rtcamp.com/blog/introducing-wpnginx-our-new-service-for-high-traffic-wordpress-sites/)
This example demonstrate that how custom taxonomy can be used to categorize/ group specific post in your site.

For further questions about using custom taxonomies on rtPanel, feel free to ask on our [support forum](https://rtcamp.com/support/forum/rtpanel/forum/user/).
