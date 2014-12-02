---
author: rahul.bansal
comments: false
date: 2013-10-19 13:15:25+00:00
layout: page
slug: single-site-wordpress-multisite
title: Single Site to WordPress Multisite
wordpress_id: 40484
---

## **Steps to follow:**





	
  1. Update **Single** **WordPress** to the latest version.

	
  2. Create a new site (subdomain) on **wordpress multisite**

	
    1. Go to new sites `Dashboard >> Tools >> Domain Mapping`

	
    2. Add new domain as primary domain there.

	
    3. Go back to `network-admin >> Dashboard >> sites`. Find current site and click the**"edit"** link

	
      1. Update domain name on **_Info_** tab. Keep **"update siteurl and home as well"** option checked.

	
      2. Switch to **_Settings_** tab and update domain name in **"Fileupload Url"** field also.







	
  3. Go back to old site. Take mysql dump of entire site except user tables. (Use phpMyAdmin)

	
  4. Drop wp_options, wp_user, wp_usermeta

	
  5. Rename remaining tables... e.g. wp_posts will become wp_5_posts (where 5 is id of new site in multisite)

	
  6. Import **altered** mysql dump to new server (make sure old tables in multisite gets deleted/replaces)

	
  7. Go to new sites dashboard >> tools >> search regex (search regex is menu added by plugin "search regex")

	
    1. Search pattern - "/wp-content/uploads/" replace it with "/files/"




	
  8. Move actual files from old-server /wp-content/uploads folder to new server /wp-content/blogs.dir/5/files (where 5 is id of new site in multisite)

	
  9. Move old themes to new server's theme folder. Same to do with plugins.

	
  10. Change DNS records for the domain.







### **Helpful Resources**




**SQL Commands t****o rename Table**







`RENAME TABLE`




`wp_commentmeta TO wp_8_commentmeta ,`




` wp_comments TO wp_8_comments ,`




` wp_links TO wp_8_links ,`




` wp_options TO wp_8_options ,`




` wp_postmeta TO wp_8_postmeta ,`




` wp_posts TO wp_8_posts ,`




` wp_terms TO wp_8_terms ,`




` wp_term_relationships TO wp_8_term_relationships ,`




` wp_term_taxonomy TO wp_8_term_taxonomy `













**References:**




http://www.clausconrad.com/blog/migrating-a-bunch-of-wordpress-blogs-to-a-single-wordpress-3-multi-site-installation



