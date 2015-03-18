---
title: "debug"
---

	**Note** : --start/--stop options are deprecated since EasyEngine 3.0.5 version.


# Debugging Server Parameters Globally (For all sites)

These commands are used for server level debugging.

	ee debug [Options]
	Options :
        	-i                              # Interactive debug
          	--nginx                         # Debug Nginx
           	--rewrite                       # Debug Nginx rewrite rules
           	--fpm                           # Debug FastCGI
           	--php                           # Debug PHP
           	--mysql                         # Debug MySQL
           	--import-slow-log-interval      # Import MySQL slow log to Anemometer
           	--all                           # Debug all server paramenters


*-i*            : This option enables interactive debugging and stop the debugging once ctrl+c is pressed

*–-nginx*        : This option enables Nginx enable `debug_connection` for ip_address enlisted in `/etc/easyengine/ee.conf`. If ip_address is blank then its start debug_connection for 0.0.0.0/0 ip

*–-rewrite*      : This option enable `rewrite_log` on in `/etc/nginx/nginx.conf` file

*–-php*          : This option enable PHP5-FPM slow log, xdebug profiling

*–-fpm*          : This option change PHP5-FPM `log_level` from `notice` to `debug` level

*–-mysql*        : This option enable MySQL slow log

*--all*          : This option starts debugging all parametrs at server level.


### To stop debugging for any parameter just pass `off` value for that parameter

For example you started debugging all parameters and you want to stop any one say nginx

	ee debug --nginx=off

Similarly, you can do it for `--all`

	ee debug --all=off

# Site options

These commands are used for site level debugging.

	ee debug [websitename] [Options]
	Options :
        	-i                        # Interactive debug.
        	--nginx                   # Debug Nginx.
        	--rewrite                 # Debug Nginx rewrite rules.
        	--wp                      # Debug wordpress sites.
        	--all                     # Debug all site wide parameters


*-i*              : This option enables interactive debugging and stop the debugging once `ctrl+c` is pressed

*–-nginx*          : This option enables Nginx `error_log` for example.com in debugging mode.

*–-rewrite*        : This option enable `rewrite_log` on for example.com

*–-wp*             : This option enable `wp-content/debug.log` logging. This also, installs developer plugin. [Click here for more details](https://rtcamp.com/tutorials/wordpress/debugging/)

*--all*           : Starts debug dor all site wide parametrs

# Start Debugging

## Global
	ee debug --all
	ee debug --nginx --rewrite --fpm --php --mysql

To debug a specific part, you can use one or more command below:

	ee debug --php
	ee debug --nginx
	ee debug --rewrite
	ee debug --fpm
	ee debug --mysql

To enable slow log import for each time interval, let say for each 5min interval, you can command below:

	ee debug --mysql --import-slow-log-interval=5

To stop debug mode :

	ee debug --all=off

## Site-wide

To start complete debugging for a site, please use either command below:

	ee debug example.com --all
	ee debug example.com --wp --nginx --rewrite

To debug a specific part, you can use one or more command below:

	ee debug example.com --wp
	ee debug example.com --nginx
	ee debug example.com --rewrite

To stop debug mode for single parameter:

	ee debug example.com --wp=off

To stop debug mode for site :

	ee debug example.com --all=off

### Trigger Xdebug Profiling

If you are using `--php` flag to analyse xdebug profiling information you may be surprised to see nothing in webgrind.

This is because EasyEngine has set xdebug to profile only on trigger. This is good for profiling live sites as xdebug profiling data take too much space.

Triggering is easy. You can use this browser extension to trigger profiling for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/the-easiest-xdebug/), [Chrome](https://chrome.google.com/extensions/detail/eadndfjplgieldjbigjakmdgkmoaaaoc), [Safari](https://github.com/benmatselby/xdebug-toggler) and [Opera](http://addons.opera.com/extensions/details/xdebug-launcher/)
