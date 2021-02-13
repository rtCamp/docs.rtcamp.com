---
layout: page
title: "stack"
description: ""
---

EasyEngine(ee) Stack manages packages required to run your website smoothly.

*Stack here* is referred as group of packages.

# Install Packages
## Install web packages

	ee stack install
	# Another way
	ee stack install --web


Above command install all the require packages, now you can create your site using Site Module.

*NOTE: By default EasyEngine set username as easyengine and random password as HTTP authentication*

Refer: [How to change HTTP Authentication](/easyengine/commands/secure)

If you are thinking installing all packages is not suitable for you, can install single packages by using following commands:

## Install NGINX

	ee stack install --nginx

*NOTE: By default EasyEngine set username as easyengine and random password as HTTP authentication*

Refer: [How to change HTTP Authentication](/easyengine/commands/secure)

## Install PHP

	ee stack install --php

## Install HHVM

	ee stack install --hhvm

## Install MariaDB MySQL

	ee stack install --mysql


## Install Postfix

	ee stack install --postfix

## Install WP-CLI

	ee stack install --wpcli

## Install Redis

	ee stack install --redis

## Install Adminer

	ee stack install --adminer

## Install phpMyAdmin

	ee stack install --phpmyadmin

## Install phpRedisAdmin

	ee stack install --phpredisadmin

## Install Utilities

Below command installs phpMemcachedAdmin, FastCGI cleanup script, OPcache, Webgrind, Anemometer.

	ee stack install --utils

## Install Admin tools

Below command installs Adminer, phpMyAdmin, phpMemcachedAdmin, FastCGI cleanup script, OPcache, Webgrind, Anemometer.

	ee stack install --admin

## Install Mail Packages

Note: Recommended RAM for Mail Package installation is minimum 1GB

	ee stack install --mail


Above command install all the require packages for mail server.
### ViMbAdmin Setup

Now you need to complete ViMbAdmin setup by accessing following url

https://example.com:22222/vimbadmin

and Copy Security salt from terminal to browser

	Security Salt: UpRBT4LLJwfFcZTNOg0CJkDeJSnSLPYsUylCFzrILcoAreOPRhVwqqipjTCltOBw

Paste that into webpage and click on activate my account

Now you can create virtual domains and mailboxes in your mail server.

*NOTE: If you are getting this error: Fatal error: session_start(): Failed to initialize storage module: memcache then to resolve this use this FAQ
Accessing roundcube*

### Accessing roundcube
Webmail can be accessed using http://webmail.example.com

### Setting Up Organization Identity

	vim /var/www/22222/htdocs/vimbadmin/application/configs/application.ini +250

Now set the following details as per your Organization:

	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;
	;; Identity
	identity.orgname = "Example Limited"
	identity.name = "Example Support Team"
	identity.email = "support@example.com"
	identity.autobot.name = "ViMbAdmin Autobot"
	identity.autobot.email = "autobot@example.com"
	identity.mailer.name = "ViMbAdmin Autobot"
	identity.mailer.email = "do-not-reply@example.com"
	identity.sitename = "ViMbAdmin"
	identity.siteurl = "https://www.example.com/vimbadmin/"
	;;
	;; All mail and correspondence will come from the following;;
	server.email.name = "ViMbAdmin Administrator"
	server.email.address = "support@example.com"

### Install MailScanner Packages

This will install Amavis, SpamAssassin and ClamAV on your system.

	ee stack install --mailscanner

Note: If your RAM is less than 512MB,with Mail Packages EasyEngine will not install MailScanner on your system. You need to use this command to install MailScanner packges.


## Install All Packages

	ee stack install --all

This command is combination of following two commands:

	ee stack install --web
	ee stack install --mail

# Remove Packages
## Remove Web Packages

	ee stack remove
	# Another way
	ee system remove --web

Above command removes all packages installed by ee stack install

If you are thinking removing all packages is not suitable for you, can remove single packages by using following commands:

## Remove NGINX

	ee stack remove --nginx

## Remove PHP

	ee stack remove --php

## Remove HHVM

	ee stack remove --hhvm

## Remove MariaDB MySQL

	ee stack remove --mysql

## Remove Postfix

	ee stack remove --postfix

## Remove WP-CLI

	ee stack remove --wpcli

## Remove WP-CLI

	ee stack remove --redis

## Remove Adminer

	ee stack remove --adminer

## Remove phpMyAdmin

	ee stack remove --phpmyadmin

## Remove phpRedisAdmin

	ee stack remove --phpredisadmin	

## Remove Utilities

Below command remove phpMemcachedAdmin, FastCGI cleanup script, OPcache, Webgrind, Anemometer.

	ee stack remove --utils

## Remove Admin Tools

Below command removes Adminer, phpMyAdmin, phpMemcachedAdmin, FastCGI cleanup script, OPcache, Webgrind, Anemometer.

	ee stack remove --admin

## Remove Mail Packages

This command will remove all mail server packages keeping configuration files as it.

	ee stack remove --mail

## Remove MailScanner Packages

This will remove Amavis, SpamAssassin and ClamAV on your system.

	ee stack remove --mailscanner

## Remove All packages

	ee stack remove --all

This command is combination of following two commands:

	ee stack remove --web
	ee stack remove --mail

# Purge Packages
## Purge Web Packages

	ee stack purge
	# Another way
	ee stack purge --web

Above command removes all packages installed by ee stack install

If you are thinking removing all packages is not suitable for you, can remove single packages by using following commands:

## Purge NGINX

	ee stack purge --nginx

## Purge PHP

	ee stack purge --php

## Purge HHVM

	ee stack purge --hhvm

## Purge MariaDB MySQL

	ee stack purge --mysql

## Purge Postfix

	ee stack purge --postfix

## Purge WP-CLI

	ee stack purge --wpcli

## Purge Redis

	ee stack purge --redis

## Purge Adminer

	ee stack purge --adminer

## Purge phpMyAdmin

	ee stack purge --phpmyadmin

## Purge phpRedisAdmin

	ee stack purge --phpredisadmin


## Purge Utilities

Below command remove phpMemcachedAdmin, FastCGI cleanup script, OPcache, Webgrind, Anemometer.

	ee stack purge --utils

## Purge Admin Tools

Below command purges Adminer, phpMyAdmin, phpMemcachedAdmin, FastCGI cleanup script, OPcache, Webgrind, Anemometer.

	ee stack purges --admins


## Purge Mail Packages

	ee stack purge --mail

This command will purge all mail server packages.


## Purge MailScanner Packages

This will purge Amavis, SpamAssassin and ClamAV on your system.

	ee stack purge --mailscanner

##Purge All Packages

	ee stack purge --all

This command is combination of following two commands:

	ee stack purge --web
	ee stack purge --mail

# Status

Display important status about EasyEngine services.

	ee stack status


# Services

All EasyEngine services can be operated using following commands:

## Start NGINX, PHP, MySQL & Postfix service

	ee stack start

## Stop NGINX, PHP, MySQL & Postfix service

	ee stack stop

## Reload NGINX, PHP, MySQL & Postfix service

	ee stack reload

## Restart NGINX, PHP, MySQL & Postfix service

	ee stack restart

You can also start/stop/restart/reload perticular service using following optional argument:

## Nginx

	ee stack start --nginx

## PHP

	ee stack start --php

## MySQL

	ee stack start --mysql

## Postfix

	ee stack start --postfix

#Upgrade

(Note: This feature is available with EasyEngine 3.1.2 and onwards)

EasyEngine stack can now safely upgraded with using command

	ee stack upgrade

This will upgrade Nginx, PHP, MySQL, Postfix and HHVM to their latest version

## Nginx

	ee stack upgrade --nginx

This will upgrade Nginx to their latest version.

## PHP

	ee stack upgrade --php

This will upgrade PHP to their latest version

## MySQL

	ee stack upgrade --mysql

This will upgrade MySQL to their latest version

## Postfix

	ee stack upgrade --postfix

This will upgrade Postfix to their latest version


## Mail server

	ee stack upgrade --mail

This will upgrade mail server to their latest version


## PHP 5.6

To upgrade to PHP5.6 from PHP5.5 use command as:

	 ee stack upgrade --php56

## Redis

	ee stack upgrade --redis

This will upgrade redis-server to their latest version

## WP-CLI

	ee stack upgrade --wpcli

This will upgrade wpcli to its latest version mentioned in latest EasyEngine.




