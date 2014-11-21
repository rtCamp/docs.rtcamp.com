---
author: rahul.bansal
comments: false
date: 2013-08-07 15:03:27+00:00
layout: page
slug: faq
permalink: nginx-helper/faq/
title: FAQ
wordpress_id: 44063
---

## General Question




#### Q. Will this work out of the box?


No. You need to make some changes at the Nginx end. Please check the above tutorials!


#### Q. I am using X plugin. Will it work on Nginx?


Most likely yes. A WordPress plugin, if not using explicitly any Apache-only mod, should work on Nginx. Some plugin may need some extra work.


## Nginx Fastcgi Cache Purge




#### Q. How do I specify nginx cache-location for purge-all feature?


By default, Nginx-helper uses `/var/run/nginx-cache`. This is default, because we are assuming most nginx-helper users are following our [wordpress-nginx tutorials](https://rtcamp.com/wordpress-nginx/tutorials).

You can override default by adding a line like below in your `wp-config.php` file:


    define( 'RT_WP_NGINX_HELPER_CACHE_PATH','/var/run/nginx-cache');




#### Q. Does it work for custom posts and taxonomies?


Yes. It handles all post-types in a simialar fashion.


#### Q. How do I know my Nginx config is correct for fastcgi purging?


Manually purging any page from the cache, by following instructions in the previous answer.

Version 1.3.4 onward, Nginx Helper adds a comment at the end of the HTML source ('view source' in your favourite browser): This shows the time when the page was last cached. This date/time will be reset whenever this page is purged and refreshed in the cache.

Just check this comment before and after a manual purge. As long as you don't purge the page (or make changes that purge it from the cache), the time-stamp will remain as it is, even if you keep refreshing the page. This means the page was served from the cache and it's working!

The rest shows you the database queries and time saved on loading this page. (This would have been the additional resource load, if you weren't using fast-cgi-cache.)


#### Q. I need to flush a cached page immediately! How do I do that?


Nginx helper plugin handles usual scenarios, when a page in the cache will need purging. For example, when a post is edited or a comment is approved on a post.

To purge a page immediately, follow these instructions: (eg. http://example.com/about/) Between the domain name and the rest of the URL, insert '/purge/'. So, in the above eg, the purge URL will be http://example.com/purge/about/ Just open this in a browser and the page will be purged instantly. Needless to say, this won't work, if you have a page or taxonomy called 'purge'.


## Nginx Map




#### Q. My Multisite already uses WPMU_ACCEL_REDIRECT. Do I still need Nginx Map?


Definitely. WPMU_ACCEL_REDIRECT reduces the load on PHP, but it still ask WordPress i.e. PHP/MySQL to do some work for static files e.g. images in your post. Nginx map lets Nginx handle files on its own bypassing WordPress which gives you much better performance without using a CDN.


#### Still need help!


Post your problem in our free support forum or WordPress.org forum. We  will answer your questions everywhere. Including Nginx official forum, serverfault, stackoverflow, etc. Its just that we are hyperactive on our own forum!
