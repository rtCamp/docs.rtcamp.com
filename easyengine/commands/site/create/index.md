---
title: "create"
---

## HTML Website

To create simple html website use this command.


	ee site create example.com --html

## PHP Website

To create simple php website with no database use this command.

	ee site create example.com --php

## PHP+MySQL Website

To create simple php website with database use this command.

	ee site create example.com --mysql

NOTE: You can find MySQL database details in `ee-config.php` file.

## WordPress Site

Following are the WordPress website types you can create website based on

- Cache Mechanism

- WordPress type (Single/Multisite)

### Standard WordPress Sites

To create Standard/Single WordPress site use following command.

	ee site create example.com --wp # install wordpress without any page caching
	ee site create example.com --w3tc # install wordpress with w3-total-cache plugin
	ee site create example.com --wpsc # install wordpress with wp-super-cache plugin
	ee site create example.com --wpfc # install wordpress + nginx fastcgi_cache

### WordPress Multisite with subdirectory

To create WordPress Multisite with subdirectory setup use from following command.

	ee site create example.com --wpsubdir # install wpmu-subdirectory without any page caching
	ee site create example.com --wpsubdir --w3tc # install wpmu-subdirectory with w3-total-cache plugin
	ee site create example.com --wpsubdir --wpsc # install wpmu-subdirectory with wp-super-cache plugin
	ee site create example.com --wpsubdir --wpfc # install wpmu-subdirectory + nginx fastcgi_cache


### WordPress Multisite with subdomain

To create WordPress Multisite with subdomain setup use from following command.

	ee site create example.com --wpsubdom # install wpmu-subdomain without any page caching
	ee site create example.com --wpsubdom --w3tc # install wpmu-subdomain with w3-total-cache plugin
	ee site create example.com --wpsubdom --wpsc # install wpmu-subdomain with wp-super-cache plugin
	ee site create example.com --wpsubdom --wpfc # install wpmu-subdomain + nginx fastcgi_cache

## HHVM Site

(Note: This feature is available with EasyEngine 3.1.0 and onwards)

To create site with HHVM you can use `--hhvm` during site creation

For example, you can create WordPress site running on HHVM using following command:

	ee site create example.com --wp --hhvm

## Pagespeed Site

(Note: This feature is available with EasyEngine 3.1.0 and onwards)

To create site with Pagespeed you can use `--pagespeed` during site creation

For example, you can create WordPress site running with Pagespeed using following command:
	
	ee site create example.com --wp --pagespeed

By default EasyEngine does not enables any filters for Pagespeed, you can add various filters from https://developers.google.com/speed/pagespeed/module/config_filters using command

	ee site edit example.com
