---
author: rahul.bansal
comments: false
date: 2010-12-23 08:10:59+00:00
excerpt: This plugin is used to redirect posts from Blogger to WordPress without losing
  SEO and page rank. It will provide one-to-one redirection from Blogger.com to WordPress.
layout: page
slug: blogger-to-wordpress-redirection-plugin
permalink: blogger-to-wordpress/tutorials/blogger-to-wordpress-redirection-plugin/
title: Blogger To WordPress Redirection Plugin
wordpress_id: 2751
---



**Update:** We have released new version of this plugin. Now this plugin will work fine with new blogger.com template. Just follow the instruction given below.

**Note:** we have updated this article (screenshots and instructions) as per the changes in our plugin.




For those who do not wish to use our Blogger.com To WordPress migration service, and want to move their blogs from Blogger.com to WordPress quickly, can use our free and open-source [Blogger To WordPress Redirection Plugin](http://wordpress.org/extend/plugins/blogger-to-wordpress-redirection/)

While it is nowhere close to the number of things we handle during migration, this plugin handles most important aspect during any Blogger to WordPress import i.e. redirecting everyone from old Blogger.com post to same post on new WordPress blog.


### Assumption:


You have a blog on Blogger.com which you want to Import to self-hosted WordPress setup. If you have done it already, this is fine as well.

As long as you have used WordPress built-in importer to Import from Blogger.com, you can benefit from this plugin.


### Redirection Techniques Used in this Plugin:


The mapping between Blogger.com and WordPress posts is done on 1-to-1 basis for both search engines as well as human-visitors.

Search engines redirection is taken care of by using META Refresh tag and "rel=canonical" tags. Together these techniques should be able to compensate for 301-redirection, which is the best solution but not possible on Blogger.com server.

For human-visitors, they will be redirected using JavaScript codes, and if JavaScript is disabled using META Refresh tag.

While most people believes that META Refresh is deprecated method, it is best option we have. Additionally, I found [some](http://sebastians-pamphlets.com/google-and-yahoo-treat-undelayed-meta-refresh-as-301-redirect/) [posts](http://groups.google.com/group/Google_Webmaster_Help-Indexing/browse_thread/thread/febc7ea86876baa2/5fae36a072b7eed2?lnk=gst&q=meta+refresh+noindex&rnum=4#) which suggests that it works nicely.


## How To Use This Plugin




#### A) Generating Redirection Code for Blogger.com







    1. Install [Blogger To WordPress Redirection Plugin](http://wordpress.org/extend/plugins/blogger-to-wordpress-redirection/) in your WordPress blog. For help on how to install plugins to your WordPress blog, check out our guide on [How to manage plugins in WordPress](https://rtcamp.com/news/managing-plugins-in-wordpress/).


    2. After installation and activation of the plugin, you will notice that a new menu option by the name **Blogger To Wordpress Redirection** has been created under the **Tools** menu. Click on this new menu option.



[![b2w-redirection-plugin-tools](https://rtcamp.com/wp-content/uploads/2010/12/2.png)](https://rtcamp.com/tutorials/blogger-to-wordpress-redirection-plugin/attachment/2/)





    1. Now on the plugin page, click the **Start Configuration **button to generate code for Blogger.com blog.



[![B2W-Start-Configuration](https://rtcamp.com/wp-content/uploads/2010/12/1.png)](https://rtcamp.com/tutorials/blogger-to-wordpress-redirection-plugin/attachment/1/)




  1. A list of blog names which have posts that have been imported to Wordpress, will be displayed. Click on the **Get Code** button to generate the redirection code.


[![B2W-Generate-Code](https://rtcamp.com/wp-content/uploads/2010/12/4.png)](https://rtcamp.com/tutorials/blogger-to-wordpress-redirection-plugin/attachment/4/)


#### B) Copying Code to Blogger.com Template







    1. After copying this code, go to your Blogger account and click on the template menu and then edit the HTML section (**Edit HTML**) on your Blogger Dashboard.



[![B2W-HTML-Edit-Blogger](https://rtcamp.com/wp-content/uploads/2010/12/3.png)](https://rtcamp.com/tutorials/blogger-to-wordpress-redirection-plugin/attachment/3/)




  1. **Note**: Before replacing the code, save the backup of your template.


  2. Paste the copied code from step 5 to your Blogger template and click on **Save Template Changes** as seen below.


[![B2W-HTML-Paste-Blogger](https://rtcamp.com/wp-content/uploads/2010/12/5.png)](https://rtcamp.com/tutorials/blogger-to-wordpress-redirection-plugin/attachment/5/)


#### C) Testing - if Redirection is working properly






  1. Come back to the **Blogger to WordPress Redirection** plugin area and click on the **Verify Configuration** button to check your one-to-one redirection from your Blogspot posts to WordPress posts.


[![B2W-Verify-Configuration](https://rtcamp.com/wp-content/uploads/2010/12/6.png)](https://rtcamp.com/tutorials/blogger-to-wordpress-redirection-plugin/attachment/6/)

Thus you can easily move your traffic from Blogger.com blog to your current WordPress blog by using the 'Blogger to Wordpress Redirection' Plugin.

Here is a short video tutorial explaining the usage of the plugin.


### Video Tutorial:





**Download Link:** [**Blogger to WordPress Redirection Plugin**](http://downloads.wordpress.org/plugin/blogger-to-wordpress-redirection.zip)
**Free Support Forum:** [** Free Support Forum**](https://rtcamp.com/support/forum/blogger-to-wordpress)
