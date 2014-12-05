---
date: 2011-01-07 12:30:04+00:00
excerpt: Easy guide to redirect feed URL of migrated blog from Blogger to WordPress,
  This post will help to update feedburner feed URL with recently updated post in
  WordPress.
title: Redirect Feed URL From Blogger To WordPress
---

After the successful migration of **Blogger.com** to self hosted **WordPress** blog, many people face the problem of feeds not getting updated in WordPress blog with the current feed URL.


### Problem about feed URL


The feed URL for **Blogger.com** blog looks like _**http://example.blogspot.com/feeds/posts/default**_, and in the **WordPress** blog it looks like _**http://example.com/feed/**_.


### Solution for feed to update..


We need to change our old Blogger.com blog feed URL to get all the posts to update when the WordPress posts get published.




	
    1. Login to your [Feedburner Account](http://feedburner.google.com/).

	
    2. Click on the feed for which you want to set the URL.



[![](https://rtcamp.com/wp-content/uploads/2011/01/bloggertowp-feed.png)](https://rtcamp.com/wp-content/uploads/2011/01/bloggertowp-feed.png)




	
    1. After that, click on the **Edit Feed Details** link and follow the instruction as per the screen-shot below



[![](https://rtcamp.com/wp-content/uploads/2011/01/bloggertowp-feed2-600x266.png)](https://rtcamp.com/wp-content/uploads/2011/01/bloggertowp-feed2.png)




	
    1. Now change the original feed URL with new WordPress feed URL . (Feed URL looks like http://example.com/feed/).

	
    2. Click on **Save Feed Details **and you are done with the feedburner side.

	
    3. Now go to your WordPress dashboard. Install a plugin called [**FD Feedburner Plugin**](http://wordpress.org/extend/plugins/feedburner-plugin/). (checkout the [plugin installation process](http://bloggertowp.org/managing-plugins-in-wordpress/))

	
    4. After successful installation and activation of the plugin, you will observe that one menu is added in **Plugins** option **Feedburner Configuration**. _(Update for new **version**_** 1.45 **_of this plugin : the menu in moved inside Settings option with name **Feedburner **)_

	
    5. Click on it and add feed URL that just configured in feedburner account.



[![](https://rtcamp.com/wp-content/uploads/2011/01/bloggertowp-feed3.png)](https://rtcamp.com/wp-content/uploads/2011/01/bloggertowp-feed3.png)



	
  1. It will help to redirect all the feeds from http://example.com/feed/ URL to new feedburner URL (http://feeds.feedburner.com/yourlabel).


That's all about updating your Blogger feed URL which would redirect to your WordPress blog after migration.
