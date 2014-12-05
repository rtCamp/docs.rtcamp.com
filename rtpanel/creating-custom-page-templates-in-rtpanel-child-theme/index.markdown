---
author: abhimanyu1
comments: false
date: 2011-12-19 06:13:39+00:00
excerpt: There are several customization to be done on a single page. In such cases,
  where we require a lot of customization using the hooks or we feel that the hooks
  are not going to do the job for us, we rather prefer creating a separate custom
  page template for it.
layout: page
slug: creating-custom-page-templates-in-rtpanel-child-theme
title: Creating custom page templates in rtPanel child theme
---

WordPress is no more a blogging platform, rather its been used as CMS widely. You need to have multiple pages with different layouts like landing page, portfolio page etc; and for this we need to develop custom page templates.

**What is a template file?**

Before moving across the implementation, We would like to tell you what actually are the template files in Wordpress. A Wordpress page is comprised of number of pieces united together. These pieces have been created for every significant section on a Wordpress page. We call every single instance of these pieces, as a template. For instance, we have the _header.php_ and_ footer.php_ as the template files for header and footer respectively. So, we knew what a template file is.

Keep in mind that further in this post, wherever we talk about the template files, do keep the _header.php_ and _footer.php_ files in your mind.

**What is a page template?**

Now, these template files are however united in a particular manner within yet another single page template file (Template withing a template) like the _index.php_ template files unite the header.php, _footer.php_ and the _sidebar.php_ template files. By default, this single page template file hierarchy starts with the custom applied page template file, then the _page.php_ and the _index.php_ at the last. The complete template hierarchy can be seen [here](http://codex.wordpress.org/Template_Hierarchy). Similar to the default page template files available (_index.php_ or _page.php_), we can create our own custom template files as well.

**Why do we need to create a page template?**

Presence of various rtPanel hooks is already an added advantage to us. But sometimes, there are several customizations to be done on a single page. In such cases, where we require a lot of customization using the hooks or we feel that the hooks are not going to do the job for us, we rather prefer creating a separate custom page template for it.

**How to create the custom page template?**

In the [previous post](https://rtcamp.com/blog/child-theme-development-rtpanel-part-2/), I had already explained about creating the custom page template in our child theme. The custom template must start with an information header, followed by uniting the _header.php_, _footer.php_ and the _sidebar.php_ files, as the requirement might be. The custom template code must be added as:

    
    /**
     * Template Name: Home Page
     *
     * @package rtPanel
     *
     * @since rtPanel 2.0
     */
    
    //adding the header.php template file to this page template
    get_header(); 
    
    //adds up the sidebar.php template file to this page template (if needed)
    get_sidebar(); 
    
    //your custom loops and markup lies here
    
    //adds up the footer.php template file to this page template
    get_footer();


Now all you need to do after this is make sure that your chosen page has been applied this template and displays the content as you wanted it to. Stay tuned as we are coming up with some more posts on rtPanel child theme development.

Cheers!
