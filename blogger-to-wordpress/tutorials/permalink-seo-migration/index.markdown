---
date: 2011-01-27 19:30:41+00:00
excerpt: Best guide to move (switch) from blogger (BlogSpot) to WordPress without
  losing search engine ranking, traffic, feed subscriber, Google friend connect followers
  & Blogger permalink fix plugin
layout: page
slug: permalink-seo-migration
title: Blogger To WordPress Migration Guide with Permalink & SEO
---

#### About this Do-It-Yourself (DIY) Blogger to WordPress Migration Guide


If you run a blog on **Blogger.com** (BlogSpot) and want to move to self-hosted **WordPress** blog, this tutorial is for you. If you want to know why should one move to WordPress, [please read this](http://bloggertowp.org/15-reasons-to-migrate-from-blogger-to-wordpress/).
[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-3111.png)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-3111.png)
This guide is written keeping in mind an average not-so-techie blogger.

If you still find it difficult to follow or have any questions, please use our [free support forum](https://rtcamp.com/support/forum/blogger-to-wordpress/) for help. Alternatively, you can [hire us](https://rtcamp.com/contact/) to do your migrations! ;-)

Ok, enough of shameless self-promotion! Let's get your migration started...


## #1 Goals - _To Lose Nothing_


Before we actually start, we should set some goals which we need to achieve in order to migrate without any traffic or search engine ranking loss. Our goals are:



	
  1. Import all posts, comments & pages.

	
  2. **Maintaining** permalinks for posts & pages (1-on-1 mapping between Blogger.com and WordPress pages).

	
  3. **Redirecting** permalinks for labels & search archives.

	
  4. Retaining all feed subscribers.


If you have noticed, in point 2 & 3, I have highlighted the words "Maintaining" & "Redirecting". There is a big difference between maintaining permalinks & redirecting permalinks. You can read more about it [here](https://rtcamp.com/tutorials/maintaining-permalinks-vs-redirecting-permalinks-vs-broken-permalinks/).

Above are the minimum goals that should be achieved in order to retain all your links, traffic, subscribers and page-rank. Yes, Google pagerank can be retained if you follow each and every step without making any mistake.

An additional task can be making your new **WordPress** blog look like your old **Blogger.com** blog. You can [check official WordPress themes directory for a free theme](http://wordpress.org/extend/themes/) or simply [hire us to get a theme designed](https://rtcamp.com/contact/).


## #2 Different Cases - Subdomain v/s Custom Domain


Our goals are clear. Next you need to understand the differences between having a **Blogger.com** blog on a subdomain and on a custom-domain. Two different cases are:



	
  1. Blog with a **subdomain** address - e.g. http://example.blogspot.com

	
  2. Blog with a **custom domain** address - e.g. http://example.com


There are a few more cases, we can skip them here for the sake of simplicity.


#### Subdomain Case


Technically, you can move to WordPress when your Blogger.com blog is on a subdomain and also maintain 1-on-1 mapping between** Blogger.com** posts and **WordPress** posts. But there are a few problems with all migration-related articles spread over the web:



	
  1. Most articles rely on JavaScript based redirect - search engines cannot understand it so they will be completely ignored.

	
  2. Some articles, propose the use of "rel=canonical" which has its own set of problems and cannot be relied upon.


In both the above cases, 1-on-1 mapping is achieved through "redirection". Ideally, for search engines, redirection should be 301 (server-side) which is not possible in this case.

On the hand, if you have your own domain, we can make some changes to WordPress so that it follows permalink (Post URL) structure similar to **Blogger.com**. That way, 1-on-1 mapping is achieved through "**maintaining**" link as opposed to "**redirection**".

So for the subdomain case, the best solution is to - setup custom domain on **Blogger.com**. You can find instructions for domain setup [here](https://rtcamp.com/blogger-to-wordpress/tutorials/custom-domain/).

**Note**: If you are currently using a subdomain (example.blogspot.com), this guide is helpful for you as well.


## #3 Preparation


At this point, I assume you have:



	
  1. Your blog is on **Blogger.com** with Custom Domain Setup

	
  2. You have a web-hosting where you can install **WordPress** ([WordPress installation Series on different web-servers](http://devilsworkshop.org/wordpress-installation-tutorial-series/))

	
  3. You have access to your domain's DNS records




#### Installing WordPress - at its final destination


In my article posted [around 2 years back](http://devilsworkshop.org/moving-from-blogger-to-wordpress-maintaining-permalinks-traffic-seo/), and many other articles on the web, there is an intermediate step to install **WordPress** locally on your machine.

Over the time, we discovered that this step can be skipped completely. You can install **WordPress** on the web hosting that you have purchased directly with your custom domain which you are using on **Blogger.com** without modifying DNS records.

The trick here is to use a firefox extension called **switchhosts** to override domain locally. So all you need to do is create an entry in switchhosts with your domain name (with WWW) and use the IP address given by your hosting company (you don't need to buy a dedicated IP here)

Detailed instructions on [how switchhosts is used are given here](http://devilsworkshop.org/switchhosts-firefox-addon-manage-host-file/).

After creating a SwitchHost entry, install WordPress and check if the **WordPress** site appears in your browser properly for your custom domain.

At this point we are ready to import from **Blogger.com**


## #4 Importing Data from Blogger.com to WordPress


WordPress comes with a built-in importer tool for Blogger. It is good enough to import posts & comments which are a major part of your blog.

**Below are the right steps to do so**:


### A. Configure Permalinks on New Wordpress


From **WordPress **Dashboard, go to _**Settings** -> **Permalinks**_ and select **Custom Structure** option and paste the following value next to it and save changes.

`/%year%/%monthnum%/%postname%.html`

[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-1211.png)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-1211.png)

This will make your **WordPress** blog's permalink structure looks like **Blogger.com** blog. Do not use any other permalink structure at this time. You can [change your permalinks structure](http://wpveda.com/how-to-change-wordpress-permalink-without-breaking-post-permalink-structure/) later.


### B. Import Blogger.com blog posts to WordPress


Now its time to import your **Blogger.com** blog posts to **WordPress**.



	
  * Go to **Tools ****-> Import** options and select **Blogger** options. A pop-up box will appear, click on **Install Plugin** to install the importer plugin in **WordPress**.


[![](https://rtcamp.com/wp-content/uploads/2011/01/Import-‹-my-test-—-WordPress_1295952851230-600x3831.png)](https://rtcamp.com/wp-content/uploads/2011/01/Import-‹-my-test-—-WordPress_1295952851230-600x3831.png)



	
  * Click on the _**Activate Plugin & Run Importer.**_

	
  * Now you must be on **Import Blogger** page with a button named **Authorize**. Click on it and you will be taken to a page on **Blogger.com** (actually Google.com) where you will be prompted to **Grant access** to your Blogger account. You may be prompted to log into your Google account if you are not already logged in.


[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-221.png)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-221.png)



	
  * Once you grant access, you will be taken back to the Blogger importer on **WordPress**. If you have more than one blog on your Blogger account, you will see all of them listed here. Just click on the **import** button next to the blog that you want to import into **WordPress.**


[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-41.png)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-41.png)



	
  * Once you click **import**, all posts and comments from **Blogger.com** blog start importing into **WordPress**. Importer may stop in between. In that case, the text on the button will change from **Import** to **Continue**. Keep clicking on it, until the button-text does not change to **Set Authors**, which indicates all posts and comments have been successfully imported. _(**NOTE**:WordPress Importer does not import the pages from your **Blogger.com** blog.)_

	
  * If you have more than one author in Blogger.com blog, you may need to click on **add users** on your WordPress blog (open the **add user link** in new tab/window of your browser) or you can optionally merge all posts for one author.

	
  * After creating users in** WordPress** blog refresh the previous tab. Either way go ahead and hit **Save Changes**!


[![](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-51.png)](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-51.png)

At this point, your Blogger.com blog is completely imported. But wait, your images hosted on Blogger's server are still on there so don't delete your **Blogger.com** blog.


### Fixing permalinks for imported post




<blockquote>**Note: **Please take [back-up of your WordPress Database](http://wpveda.com/wp-dbmanager-plugin-wordpress-database-backup/) before following the process mentioned below. So that, if something goes wrong you can revert it back.</blockquote>


In **step A,** we configured permalink structure which makes permalinks look similar to Blooger.com permalinks. But we need to make them **identical** to retain all our traffic & SEO!

Look at the WordPress post link below:

http://www.bombaypirate.com/**2010/08/welcome-to-wordpress-this-is-your-first-post-edit-or-delete-it-then-start-blogging.html**

And the following blogger.com post link for the same post:

http://www.bombaypirate.com/**2010/08/welcome-to-wordpress-this-is-your-first.html**

At this point you can use the following php script. Just copy-paste following codes into a file with name like fix.php and save/upload it to the **WordPress** folder. Then just open its URL from the browser. URL will be like: **http://example.com/fix.php **(replace example.com with your domain name)**.**

    
    <?php
    require_once('wp-load.php');
    $res = $wpdb->get_results("SELECT post_id, meta_value FROM $wpdb->postmeta WHERE meta_key = 'blogger_permalink'");
    $wpdb->print_error();
    foreach ($res as $row){
    $slug = explode("/",$row->meta_value);
    $slug = explode(".",$slug[3]);
    $wpdb->query("UPDATE $wpdb->posts SET post_name ='" . $slug[0] . "' WHERE ID = $row->post_id");
    $wpdb->print_error();
    }
    echo "DONE";
    ?>


On executing this script, the only output you must see is "DONE". If you see any error, please contact us, by using the comment form below.
At this point, check the post links on your WordPress blog. Their _path_ part must now be identical to **Blogger.com** post link.


### **Migrating other content - Google Followers (GFC), Gadgets and Pages.**


To migrate your Google Friend Connect Followers, follow the steps given in[ this article](http://bloggertowp.org/migrate-google-friends-connect-from-blogger-to-wordpress-blog/).

All other codes that you use on **Blogger** like in sidebar widgets, adsense, stats-tracking code need to be migrated manually from **Blogger.com** to **WordPress**. Follow [this instruction](http://bloggertowp.org/managing-widgets-in-wordpress/).

If you have pages in **Blogger.com** then you need to create pages in WordPress as well and copy the HTML code from **Blogger** and paste it into **WordPress** page.

For Example,

On Blogger.com, the URL of your page looks like - example.com/p/about.html

And after creating a page on WordPress, the URL looks like - example.com/about/

To redirect the Blogger Page URL to the WordPress Page URL, you can use the [WordPress Redirection Plugin.](http://urbangiraffe.com/plugins/redirection/)


### Testing new WordPress permalinks & SEO


Just google for _site:example.com_ where example.com is your domain name. Click on any link from search results and you should land on the  correct post on your new **WordPress **blog.


## #5 Changing DNS settings for your domain name


After the successful testing of your blog posts and other link result via Google, you can make changes in the DNS settings, which will propagate slowly across the Internet. Accessing and changing DNS settings vary from registrar to registrar. Consult your registrars **Help** pages or contact them if you are stuck. You can edit DNS settings by configuring the name servers.

For example, if you are using the [Dreamhost](http://bloggertowp.org/webhosts/) web hosting, the nameserver values are NS1.DREAMHOST.COM, NS2.DREAMHOST.COM & NS3.DREAMHOST.COM. You can also change the A records and CNAME records associates with your domain name in Domain registrar.

Also you need to flush your computer's DNS cache periodically till you don't see your **Blogger.com** blog is gone from your custom domain! Please use Google to learn how to flush DNS cache for your operating system.


## #6 Miscellaneous but important...




### What to do with Blogger.com blog now?


First, swear that you will never **delete** your _(now)_ old Blogger.com blog! :P

Now you can go back to Blogger.com blog's custom domain settings and revert back to your old subdomain there. Next, you can use our **Blogger To WordPress Redirection** plugin and follow the [instructions posted here](http://bloggertowp.org/blogger-to-wordpress-redirection-plugin/).

At the end of [those instructions](http://bloggertowp.org/blogger-to-wordpress-redirection-plugin/):



	
  1. Your Blogger.com blog will become inaccessible. This is must for good SEO!

	
  2. Your Blogger.com subdomain will be active again but all visitors will be migrated with proper permalink structure.




#### Moving feed subscribers...


If you are using Feedburner or any third-party service for subscribers, update source feed URL as it will be changed with migration. Check out [this post](http://bloggertowp.org/redirect-feed-url-from-blogger-to-wordpress/). If you don't use feedburner you can still use .htaccess hack to fix URL of your feed.

Just add following lines at the top of your .htaccess file which can be found in root directory of your WordPress installation.

    
    #ATOM Feeds
    RewriteRule atom.xml feed/atom/ [L,R=301]
    RewriteRule feeds/posts/default feed/atom/ [L,R=301]
    #RSS FEEDS
    RewriteRule feeds/posts/default?alt=rss feed/ [L,R=301]
    RewriteRule rss.xml feed/ [L,R=301]
    #Comments Feed
    RewriteRule /feeds/comments/default  comments/feed/  [L,R=301]
    RewriteRule /feeds/comments/default?alt=rss comments/feed/  [L,R=301]


OR You can simply add new WordPress feed URL, inside blogger dashboard -> Settings -> Site Feed under Post Feed Redirect URL and then click on Save Settings.

**Handling Blogger.com labels/archive pages...**

You might face some problems while searching your blog on Google via site:example.com such as your Labels and Archives links are redirected into **WordPress** but it still shows you a **Not Found** (404) Page.

For that simply add the following code into the .htaccess file:

    
    #Redirect archives
    RewriteRule ^([0-9]{4})_([0-9]{1,2})_([0-9]{1,2})_archive.html$ $1/$2/ [L,R=301]
    #Redirect labels/categories
    RewriteRule ^search/label/(.*)$ category/$1/ [L,R=301]


**Enjoy WordPress!**

**WordPress** has tons of plugins to make your life easier and richer! Since you are new to WordPress, don't burden yourself with thousands of plugins. You can start with our WordPress plugin series which covers some of the best WordPress plugins. You can also use this [**User Guide**](http://bloggertowp.org/the-blogger-to-wordpress-user-guide-series/) that will help you to learn the basics of **WordPress **as** **compared to blogger.


#### If something goes wrong...


Please use [our free support forum](http://bloggertowp.org/forum/). Avoid using comment form below for technical support-questions. In forum, you may also find your questions being answered already. :-)


#### Useful Links [Resources]:





	
  * [Blogger To WordPress Redirection Plugin ](http://bloggertowp.org/blogger-to-wordpress-redirection-plugin/)_(helpful for redirecting permalinks)_

	
  * [Custom Domain Setup Guide for Blogger.com](http://bloggertowp.org/custom-domain-setup-on-blogger-user-guide-series/) _(Setting up custom domain on Blogger with different domain registrars)_

	
  * [Blogger To WordPress User Guide](http://bloggertowp.org/the-blogger-to-wordpress-user-guide-series/) _(helpful for WordPress beginners)_

	
  * [Video Blogger To WordPress Migration Guide.](http://bloggertowp.org/video-blogger-to-wordpress-migration-complete-user-guide/)

	
  * [Our Free Support Forum](http://forum.bloggertowp.org/) _(if anything goes wrong…)_

	
  * [Hire Us!](http://bloggertowp.org/contact/) _(troubles can be outsourced! )_


![icon wink Maintaining Permalinks vs Redirecting Permalinks vs Broken Permalinks](https://rtcamp.com/wp-content/uploads/2011/01/b2w-diy-311.png)
