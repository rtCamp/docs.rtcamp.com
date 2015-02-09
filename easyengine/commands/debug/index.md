---
title: "debug"
---

# Global options

These commands are used for server level debugging.

	ee debug [Options]
	Options :
        	-i                              # Interactive debug
          	--nginx                         # Debug Nginx
           	--rewrite                       # Debug Nginx rewrite rules
           	--fpm                           # Debug FastCGI
           	--php                           # Debug PHP
           	--mysql                         # Debug MySQL
           	--stop                          # Stop debug mode
           	--import-slow-log-interval      # Import MySQL slow log to Anemometer


*-i*            : This option enables interactive debugging and stop the debugging once ctrl+c is pressed

*–nginx*        : This option enables Nginx enable `debug_connection` for ip_address enlisted in `/etc/easyengine/ee.conf`. If ip_address is blank then its start debug_connection for 0.0.0.0/0 ip

*–rewrite*      : This option enable `rewrite_log` on in `/etc/nginx/nginx.conf` file

*–php*          : This option enable PHP5-FPM slow log, xdebug profiling

*–fpm*          : This option change PHP5-FPM `log_level` from `notice` to `debug` level

*–mysql*        : This option enable MySQL slow log

# Site options

These commands are used for site level debugging.

	ee debug [websitename] [Options]
	Options :
        	-i                        # Interactive debug.
        	--nginx                   # Debug Nginx.
        	--rewrite                 # Debug Nginx rewrite rules.
        	--wp                      # Debug wordpress sites.
        	--stop                    # Stop debug mode

*-i*              : This option enables interactive debugging and stop the debugging once `ctrl+c` is pressed

*–nginx*          : This option enables Nginx `error_log` for example.com in debugging mode.

*–rewrite*        : This option enable `rewrite_log` on for example.com

*–wp*             : This option enable `wp-content/debug.log` logging. This also, installs developer plugin. [Click here for more details](https://rtcamp.com/tutorials/wordpress/debugging/)

*–stop*           : Stop debug mode.

# Start Debugging

## Global

	ee debug
	ee debug --start
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

	ee debug --stop

## Site-wide

To start complete debugging for a site, please use either command below:

	ee debug example.com
	ee debug example.com --start
	ee debug example.com --wp --nginx --rewrite

To debug a specific part, you can use one or more command below:

	ee debug example.com --wp
	ee debug example.com --nginx
	ee debug example.com --rewrite

To stop debug mode for site :

	ee debug example.com --stop

### Trigger Xdebug Profiling

If you are using `--php` flag to analyse xdebug profiling information you may be surprised to see nothing in webgrind.

This is because EasyEngine has set xdebug to profile only on trigger. This is good for profiling live sites as xdebug profiling data take too much space.

Triggering is easy. You can use this browser extension to trigger profiling for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/the-easiest-xdebug/), [Chrome](https://chrome.google.com/extensions/detail/eadndfjplgieldjbigjakmdgkmoaaaoc), [Safari](https://github.com/benmatselby/xdebug-toggler) and [Opera](http://addons.opera.com/extensions/details/xdebug-launcher/)
