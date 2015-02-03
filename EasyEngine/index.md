---
title: "EasyEngine"
---

**EasyEngine** (ee) is a linux shell-script to manage your WordPress-Nginx websites on Ubuntu and Debian server.


# The Easy Part!

	# Install EasyEngine 3.0
	wget -qO ee rt.cx/eebeta && sudo bash install

	# Install WordPress on example.com
	ee site create example.com --wp

# The Not-so-easy Part

Creating a high traffic site, big enough to crash Nginx! ;-)



# Site Creation Commands

## Standard WordPress Sites

	# Install WordPress without any page caching
	ee site create example.com --wp

	# Install WordPress with w3-total-cache plugin
	ee site create example.com --w3tc

	# Install WordPress with wp-super-cache plugin
	ee site create example.com --wpsc

	# Install WordPress + Nginx fastcgi_cache
	ee site create example.com --wpfc

## WordPress Multsite with subdirectory

	# Install WPMU-subdirectory without any page caching
	ee site create example.com --wpsubdir

	# Install WPMU-subdirectory with w3-total-cache plugin
	ee site create example.com --wpsubdir --w3tc
	
	# Install WPMU-subdirectory with wp-super-cache plugin
	ee site create example.com --wpsubdir --wpsc

	# Install WPMU-subdirectory + Nginx fastcgi_cache
	ee site create example.com --wpsubdir --wpfc

## WordPress Multsite with subdomain

	# Install WPMU-subdomain without any page caching
	ee site create example.com --wpsubdom

	# Install WPMU-subdomain with w3-total-cache plugin
	ee site create example.com --wpsubdom --w3tc

	# Install WPMU-subdomain with wp-super-cache plugin 
	ee site create example.com --wpsubdom --wpsc

	# Install WPMU-subdomain + Nginx fastcgi_cache
	ee site create example.com --wpsubdom --wpfc

## Non-WordPress Sites

	# Create example.com for static/html sites
	ee site create example.com --html

	# Create example.com with php support
	ee site create example.com --php

	# Create example.com with php & mysql support
	ee site create example.com --mysql


# Commands

 * [site](/EasyEngine/commands/site/)
 * [stack](/EasyEngine/commands/stack/)
 * [debug](/EasyEngine/commands/debug/)
 * [clean](/EasyEngine/commands/clean/)
 * [info](/EasyEngine/commands/info/)
 * [secure](/EasyEngine/commands/secure/)
 * [import-slow-log](/EasyEngine/commands/import-slow-log/)
