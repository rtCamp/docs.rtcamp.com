---
title: "edit"
---

	ee site edit example.com

Above command opens `/etc/nginx/sites-available/example.com` in your default editor.
When you make any changes, after saving file, this will also test and reload Nginx configuration


## Pagespeed

To edit Pagespeed configuration of site use

	ee site edit example.com --pagespeed

Above command opens `/var/www/example.com/conf/nginx/pagespeed.conf` in your default editor.
When you make any changes, after saving file, this will also test and reload Nginx configuration

By default EasyEngine does not enables any filters for Pagespeed, you can add various filters from https://developers.google.com/speed/pagespeed/module/config_filters

