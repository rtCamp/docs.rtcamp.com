---
date: 2014-12-02 11:43:34+00:00
title: Migrate from Blogger to WordPress - Best DIY Tutorial
---

#### About this Do-It-Yourself (DIY) Blogger to WordPress Migration Guide


If you run a blog on Blogger.com (BlogSpot) and want to move to self-hosted WordPress blog, this tutorial is for you. If you want to know why should one move to WordPress, [please read this](http://bloggertowp.org/15-reasons-to-migrate-from-blogger-to-wordpress/).

This guide is written keeping in mind an average not-so-techie blogger. Still, if you find it difficult to follow or have any questions, please use our free support forum for some  help. Alternatively, you can hire us to do your migrations! ;-)

Ok, enough of shameless self-promotion! Let us get your migration started...


## #1 Goals - _To Loose Nothing_


Before we actually start, we should set some goals which we need to achieve in order to migrate without any traffic or search engine ranking loss. Our goals are:



	
  1. Import all posts, comments & pages

	
  2. **Maintaining** permalinks for posts & pages (1-on-1 mapping between Blogger.com and WordPress pages)

	
  3. **Redirecting** permalinks for labels & search archives

	
  4. Retaining all feed subscribers

	
  5. Retaining all Google friend connect followers, and other Blogger gadgets (if any)


If you have noticed, in point 2 & 3, I have highlighted words "maintaining" & "redirecting". There is a big difference between maintaining permalinks & redirecting permalinks. You can read more about it [here](http://bloggertowp.org/?p=3410&preview=true).

Above are minimum goals that should be achieved in order to retain your all links, traffic, subscribers and page-rank. Yes, [Google pagerank can be retained](http://bloggertowp.org/wp-admin/post.php?post=2651&action=edit&message=10) if you follow each step without making a mistake.

Additional tasks can be making your new WordPress blog look like your old Blogger.com blog. You can [check official WordPress themes directory for a free theme](http://wordpress.org/extend/themes/) or simply [hire us to get a theme designed](http://bloggertowp.org/contact).


## #2 Different Cases - Subdomain v/s Custom Domain


Our goals are clear. Next you need to understand differences between having a Blogger.com blog on a subdomain and on a custom-domain. Two different cases are:



	
  1. Blog with **subdomain** address - e.g. http://example.blogspot.com

	
  2. Blog with **custom domain** address - e.g. http://example.com


There are few more cases, we can skip them here for the sake of simplicity.


#### Subdomain Case


Technically, you can move to WordPress when your Blogger.com blog is on a subdomain. You can also maintain a 1-on-1 mapping between Blogger.com posts and WordPress posts. However, there are few problems with all articles spread over the web:



	
  1. Most articles, rely on JavaScript based redirect. Search engines cannot understand these redirects, and so they will be completely ignored

	
  2. Some articles propose the use of "rel=canonical" which has its [own set of problems](http://bloggertowp.org/wp-admin/post.php?post=2653&action=edit&message=10) and cannot be relied on


In both cases, 1-on-1 mapping is achieved through "redirection". Ideally, for search engines, redirection should be 301 (server-side) which is not possible in this case.

On the other hand, if you own your domain, we can make some changes to WordPress so that if follows permalink (Post URL) structure similar to Blogger.com. That way, 1-on-1 mapping is achieved through "maintaining" link as oppose to "redirection".

So for a subdomain case, the best solution is to setup custom domain on Blogger.com. You can find instructions for domain setup [here](http://bloggertowp.org/series/custom-domian-setup-on-blogger-com/).


## #3 Preparation


At this point, I assume you have:



	
  1. Your blog on Blogger.com with Custom Domain Setup

	
  2. You have web-hosting where you can install WordPress

	
  3. You have access to your domains DNS records




#### Installing WordPress - at its final destination


In my article posted [around 2 year ago](http://devilsworkshop.org/moving-from-blogger-to-wordpress-maintaining-permalinks-traffic-seo/), and many other articles on the web, there is an intermediate step to install WordPress locally on your machine.

Over time, we discovered that this step can be skipped completely. You can install WordPress on webhosting you have purchased, directly with your custom domain that you are using on Blogger.com without modifying DNS records.

The trick here is to use a firefox extension called switchhosts to override domain locally. So all you need to do is create an entry in switchhosts with your domain name (with WWW) and use IP address given by your hosting company (you do not need to buy a dedicated IP).

Detailed instructions on [using switchhosts is given here](http://devilsworkshop.org/switchhosts-firefox-addon-manage-host-file/).

After creating the SwitchHost entry, install WordPress and check if the WordPress site appears in your browser properly for your custom domain.

At this point we are ready to import from Blogger.com.


## #4 Importing Data from Blogger.com to WordPress


WordPress comes with a built-in importer tool for Blogger. It is good enough to import posts & comments which makes most of your blog.

The following are the right steps to import:


### A. Configure Permalinks on Wordpress


From WordPress Dashboard, go to _Settings >> Permalinks_ and select the **Custom Structure** option. Paste the following value next to it and save changes.

`/%year%/%monthnum%/%postname%.html`

[![](https://rtcamp.com/wp-content/uploads/2010/12/Permalink-Settings-in-WordPress.png)](https://rtcamp.com/wp-content/uploads/2010/12/Permalink-Settings-in-WordPress.png)

This will make your WordPress blog permalink structure look like your Blogger.com blog. Do not use any other permalink structure at this time. You can [change your permalinks structure](http://wpveda.com/how-to-change-wordpress-permalink-without-breaking-post-permalink-structure/) later.


### B: Import Blogger.com blog posts to WordPress


Now it is time to import your Blogger.com blog posts to WordPress.

Log into WordPress dashboard, go to _Tools >> Import_ and select Blogger from the list.

Now you must be on the "Import Blogger" page with a button named **Authorize**. Click it and you will be taken to a page on Blogger.com (actually Google.com) where you will be prompted to grant access to your Blogger account. You may be prompted to log into your Google account if you are not already logged in.

![4-grant-access-blogger-google-account-1](http://www.devilsworkshop.org/files/2009/01/4-grant-access-blogger-google-account-1-600x322.png)

Once you grant access, you will be taken back to the Blogger importer on local Wordpress installation. If you have more than one blog on your Blogger account, you will see them all listed there. Just click the **Import** button next to each of them.

![5-blogger-blogs-listing-e28094-wordpress-1](http://www.devilsworkshop.org/files/2009/01/5-blogger-blogs-listing-e28094-wordpress-1-600x222.png)

Once you click **Import**, all posts and comments from the Blogger.com blog start being imported into WordPress. Importer may stop in between. In that case, the text on the button will change from "import" to "continue". Keep clicking it, till the button text changes to "Set Authors", which indicates all posts and comments are successfully imported.

If you have more than one author, you may need to add users on your WordPress blog. Or, you can optionally merge all posts for one author. Either way go ahead and hit **Save Changes**!

![7-import-author-mapping-e28094-wordpress](http://www.devilsworkshop.org/files/2009/01/7-import-author-mapping-e28094-wordpress-600x172.png)

At this point, your Blogger.com blog is completely imported. But wait, your images hosted on Bloggers' server are still there so do not delete your Blogger.com blog. I will tell you what to do with your Blogger.com blog soon!


## C: Importing Data from Blogger.com to WordPress


====================================================================================


## Step 1: Fixing permalinks for imported post


In **step 2,** we configured permalink structure which makes permalinks look similar to Blooger.com permalinks. We need to make them **identical** to retain all our traffic & SEO!

Look at the following WordPress post link:

`http://www.symposiumz.net**/2009/01/national-conference-on-advanced-computer-systems-ncacs-09-hindustan-college-of-engineering.html**`

And the following Blogger.com post link for same post:

`http://www.symposiumz.net**/2009/01/national-conference-on-advanced.html**`

At this point you can use the following php script. Just copy and paste the following code into a file with a name such as _fix.php_ and save and upload it to WordPress. Open its URL from browser. URL will be : **http://www.symposiumz.net/fix.php**
On executing this script, the only output you must see is "DONE". If you see any error, please contact us, using the comment form below.

    
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


At this point, check the permalinks (post links) on your local WordPress installation. Their path must be identical now to Blogger.com permalinks.


### Testing new wordpress permalinks & SEO


Just google for site:mydomain.com where mydomian.com is your domain name. Click any link from the search results and you should land on the correct post on your new WordPress blog.


## D: Changing DNS settings for your domain name


This step can be delayed as we are not done with local WordPress yet. However, changes in DNS settings propagate slowly across the Internet. So to avoid waiting, we initiate DNS settings change right now.

The method to access and change DNS settings vary from registrar to registrar. Consult your registrar's help pages or contact them if you need. You should only need to change the nameservers. For [Dreamhost](http://www.devilsworkshop.org/dreamhost/), nameserver values are NS1.DREAMHOST.COM, NS2.DREAMHOST.COM & NS3.DREAMHOST.COM.

Also you need to flush your computers DNS cache periodically till you do not see your Blogger.com blog on your custom domain! Use Google to search and learn how to flush DNS cache for your operating system.


## E: Miscellaneous but important...




### What to do with Blogger.com blog now?


First, swear that you will never **delete** your _(now)_ old Blogger.com blog! :P

Now you go back to Blogger.com's custom domain settings and revert to your old subdomain there. Next, follow the [instruction posted here](http://www.devilsworkshop.org/blogger-to-wordpress-traffic-permalinks-redirection-plugin/).

At the end of [those instructions](http://www.devilsworkshop.org/blogger-to-wordpress-traffic-permalinks-redirection-plugin/):



	
  1. Your Blogger.com blog will become inaccessible. This is must for good SEO!

	
  2. Your Blogger.com subdomain will be active again but all visitors will be migrated with proper permalink structure.


The second point is important if you have used your Blogger.com for a time. In that case, you must be having non-search engine links from other blogs all over the web. It will be insane if to contact each blogger/author and ask them to edit their posts. [Instructions listed there](http://www.devilsworkshop.org/blogger-to-wordpress-traffic-permalinks-redirection-plugin/) will take care of such human permalinks forever & automatically!


### Moving feed subscribers...


If you are using Feedburner or any third-party service for subscribers, update the source feed URL, as it will be changed with migration. If you do not use Feedburner you can still use the following .htaccess hack to fix the URL of your feed.

Just add the following lines at the top of your .htaccess file which can be found in the root directory of your WordPress installation.

    
    RewriteRule atom.xml /feed [L,R=301]
    RewriteRule rss.xml /feed [L,R=301]


**Migrating other codes...**

All other codes you use on blogger like in sidebar widgets, adsense, stats-tracking code need to be migrated manually from Blogger.com to WordPress.


### Enjoy WordpPess!


WordPress has tons of plugins to make your life easier and richer! If you are new to WordPress, rather than burdening yourself with thousands of plugins, you can start with our [WordPress plugin series](http://devilsworkshop.org/category/series/wordpress-plugins/) which covers some of the best WordPress plugins.


### If something goes wrong...


Please use comment form here for migration related queries. Use [our forum](http://bloggertowp.org/forum/) for your other WordPress doubts.
