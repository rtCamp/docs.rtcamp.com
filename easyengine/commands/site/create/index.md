---
title: "Create"
---

## HTML Website
	
	ee site create example.com --html

## PHP Website

	ee site create example.com --php

## PHP+MySQL Website

	ee site create example.com --mysql

NOTE: You can find MySQL database details at `/var/www/example.com/ee-config.php`

## WordPress Site
EasyEngine can create wordpress sites with or without cache configuration. EasyEngine also can create WordPress multisites. This section covers ee site creation with wordpress.

Lets create example.com in various ways.

### Standard WordPress Sites

	ee site create example.com --wp # install wordpress without any page caching
	ee site create example.com --w3tc # install wordpress with w3-total-cache plugin
	ee site create example.com --wpsc # install wordpress with wp-super-cache plugin
	ee site create example.com --wpfc # install wordpress + nginx fastcgi_cache

### WordPress Multisite with subdirectory
	
	ee site create example.com --wpsubdir # install wpmu-subdirectory without any page caching
	ee site create example.com --wpsubdir --w3tc # install wpmu-subdirectory with w3-total-cache plugin
	ee site create example.com --wpsubdir --wpsc # install wpmu-subdirectory with wp-super-cache plugin
	ee site create example.com --wpsubdir --wpfc # install wpmu-subdirectory + nginx fastcgi_cache


### WordPress Multisite with subdomain

	ee site create example.com --wpsubdom # install wpmu-subdomain without any page caching
	ee site create example.com --wpsubdom --w3tc # install wpmu-subdomain with w3-total-cache plugin
	ee site create example.com --wpsubdom --wpsc # install wpmu-subdomain with wp-super-cache plugin
	ee site create example.com --wpsubdom --wpfc # install wpmu-subdomain + nginx fastcgi_cache


