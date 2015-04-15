---
title: "log"
---

#### Available with EasyEngine v3.1.0 and onwards

## show

To monitor Nginx, PHP, MySQL, WordPress logs use

	ee log show

To monitor site specific logs use

	ee log show example.com

Use `Ctrl+c` to exit from command

### Access logs

To monitor Nginx access logs use 

	ee log show --access

This command will monitor, all site error logs , `/var/log/nginx/*access.log`.

To monitor site specific access logs use

	ee log show example.com --access

This command will monitor, access logs file of example.com, `/var/log/nginx/example.com.access.log`.


### Nginx/PHP error logs

To monitor all Nginx/PHP error logs use

	ee log show --nginx
	#or
	ee log show --php


This command will monitor, all site error logs , `/var/log/nginx/*error.log`.

To monitor site specific Nginx/PHP error logs use

	ee log show example.com --nginx
	#or
	ee log show example.com --php

This command will monitor, Error logs file of example.com, `/var/log/nginx/example.com.error.log`.


### FPM

To monitor PHP5-fpm slow logs files use

	ee log show --fpm

This command will monitor `/var/log/php5/slow.log`

### MySQL

To monitor MySQL slow logs use

	ee log show --mysql

This command will monitor `/var/log/mysql/mysql-slow.log`


### WordPres debug logs

To monitor WordPress debug logs use

	ee log show example.com --wp

This command will monitor `/var/www/example.com/htdocs/wp-content/debug.log`



## reset

To reset Nginx, PHP, MySQL, WordPress logs use

	ee log reset

To reset site specific logs use

	ee log reset example.com

### Access logs

To reset Nginx access logs use 

	ee log reset --access

This command will reset, all site error logs , `/var/log/nginx/*access.log`.

To reset site specific access logs use

	ee log reset example.com --access

This command will reset, access logs file of example.com, `/var/log/nginx/example.com.access.log`.


### Nginx/PHP error logs

To reset all Nginx/PHP error logs use

	ee log reset --nginx
	#or
	ee log reset --php


This command will reset, all site error logs , `/var/log/nginx/*error.log`.

To reset site specific Nginx/PHP error logs use

	ee log reset example.com --nginx
	#or
	ee log reset example.com --php

This command will reset, Error logs file of example.com, `/var/log/nginx/example.com.error.log`.


### FPM

To reset PHP5-fpm slow logs files use

	ee log reset --fpm

This command will reset `/var/log/php5/slow.log`

### MySQL

To reset MySQL slow logs use

	ee log reset --mysql

This command will reset `/var/log/mysql/mysql-slow.log`

To reset MySQL slow logs database tables use

	ee log reset --slow-log-db


### WordPres debug logs

To reset WordPress debug logs use

	ee log reset example.com --wp

This command will reset `/var/www/example.com/htdocs/wp-content/debug.log`



## gzip

To Gzip Nginx, PHP, MySQL, WordPress logs use

	ee log gzip

To Gzip site specific logs use

	ee log gzip example.com

### Access logs

To Gzip Nginx access logs use 

	ee log gzip --access

This command will Gzip, all site error logs , `/var/log/nginx/*access.log`.

To Gzip site specific access logs use

	ee log gzip example.com --access

This command will Gzip, access logs file of example.com, `/var/log/nginx/example.com.access.log`.


### Nginx/PHP error logs

To Gzip all Nginx/PHP error logs use

	ee log gzip --nginx
	#or
	ee log gzip --php


This command will Gzip, all site error logs , `/var/log/nginx/*error.log`.

To Gzip site specific Nginx/PHP error logs use

	ee log gzip example.com --nginx
	#or
	ee log gzip example.com --php

This command will Gzip, Error logs file of example.com, `/var/log/nginx/example.com.error.log`.


### FPM

To Gzip PHP5-fpm slow logs files use

	ee log gzip --fpm

This command will Gzip `/var/log/php5/slow.log`

### MySQL

To gzip MySQL slow logs use

	ee log gzip --mysql

This command will Gzip `/var/log/mysql/mysql-slow.log`


### WordPres debug logs

To gzip WordPress debug logs use

	ee log gzip example.com --wp

This command will Gzip `/var/www/example.com/htdocs/wp-content/debug.log`


## mail

To mail Nginx, PHP, MySQL, WordPress logs use

	ee log mail --to=ee@example.com

To mail site specific logs use

	ee log mail example.com --to=ee@example.com


### Access logs

To mail Nginx access logs use 

	ee log mail --access --to=ee@example.com

This command will mail, all site error logs to ee@example.com, `/var/log/nginx/*access.log`.

To mail site specific access logs use

	ee log mail example.com --access --to=ee@example.com

This command will mail, access logs file of example.com to ee@example.com, `/var/log/nginx/example.com.access.log`.


### Nginx/PHP error logs

To mail all Nginx/PHP error logs use

	ee log mail --nginx --to=ee@example.com
	#or
	ee log mail --php --to=ee@example.com


This command will mail, all site error logs , `/var/log/nginx/*error.log`.

To mail site specific Nginx/PHP error logs use

	ee log mail example.com --nginx --to=ee@example.com
	#or
	ee log mail example.com --php --to=ee@example.com

This command will mail, Error logs file of example.com, `/var/log/nginx/example.com.error.log`.


### FPM

To mail PHP5-fpm slow logs files use

	ee log mail --fpm --to=ee@example.com

This command will mail `/var/log/php5/slow.log`

### MySQL

To mail MySQL slow logs use

	ee log mail --mysql --to=ee@example.com

This command will mail `/var/log/mysql/mysql-slow.log`


### WordPres debug logs

To mail WordPress debug logs use

	ee log mail example.com --wp --to=ee@example.com

This command will mail `/var/www/example.com/htdocs/wp-content/debug.log`

