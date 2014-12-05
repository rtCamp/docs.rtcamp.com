---
title: Nginx Helper
---

This plugin helps WordPress-Nginx work together nicely using fastcgi/proxy cache purging, nginx map{}, rewrite support for permalinks & more.

Primarily this plugin will help you with 3 things:



	
  1. Removes index.php from permalinks when using WordPress with nginx.

	
  2. Adds support for nginx fastcgi_cache_purge & proxy_cache_purge directive from module. Provides settings so you can customize purging rules.

	
  3. Adds support for nginx map{..} on a WordPress-multisite network installation. Using it Nginx can serve PHP file uploads even if PHP/MySQL crashes.



	
  * 


## Automatic Installation



	
    1. Go to `WordPress Dashboard > Plugins > Add New`

	
    2. In the search field type “Nginx Helper” and click Search Plugins.

	
    3. From the search results, pick Nginx Helper and click Install Now.

	
    4. WordPress will ask you to confirm to complete the installation.




	
  * 


## Manual Installation



	
    1. Download the `nginx-helper.zip` file.

	
    2. Go to `WordPress Dashboard > Plugins > Add New > Upload`

	
    3. Select the `nginx-helper.zip` file and upload it.

	
    4. Then  go to Plugins and activate it.





Tutorials To Get Started, you will need to follow one ore more tutorials below to get desired functionality:

	
  * [Nginx Map + WordPress-Multisite + Static Files Handling](https://rtcamp.com/tutorials/nginx-maps-wordpress-multisite-static-files-handling/)

	
  * [Nginx + WordPress + fastcgi_purge_cache](https://rtcamp.com/tutorials/wordpress-nginx-fastcgi-cache-purge-conditional/)

	
  * [Nginx + WordPress-Multisite (Subdirectories) + fastcgi_purge_cache](https://rtcamp.com/tutorials/wordpress-multisite-subdirectories-nginx-fastcgi-cache-purge/)

	
  * [Nginx + WordPress-Multisite (Subdomains/domain-mapping) + fastcgi_purge_cache](https://rtcamp.com/tutorials/wordpress-multisite-subdomains-domain-mapping-nginx-fastcgi-cache-purge/)

	
  * [Other WordPress-Nginx Tutorials](https://rtcamp.com/wordpress-nginx/tutorials/)



