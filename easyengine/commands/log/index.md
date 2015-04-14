---
title: "log"
---

#### Available with EasyEngine v3.1.0 and onwards

## show

To monitor Nginx, PHP and MySQL logs use

	ee log show

Use `Ctrl+c` to exit from command

### Nginx

To monitor Nginx logs use

	ee log show --nginx

This command will monitor, all Nginx error logs , `/var/log/nginx/*error.log`.

### PHP

To monitor PHP logs use

	ee log show --php

This command will monitor `/var/log/php5/slow.log` and `/var/log/php5/fpm.log`

### MySQL

To monior MySQL slow logs use

	ee log show --mysql

This command will monitor `/var/log/mysql/mysql-slow.log`


## reset

To Reset Nginx, PHP and MySQL logs use

	ee log reset

### Nginx
To reset Nginx logs use

	ee log reset --nginx

This command will empty all Nginx error logs , `/var/log/nginx/*error.log`.

### PHP

To reset PHP logs use

	ee log reset --php

This command will empty `/var/log/php5/slow.log` and `/var/log/php5/fpm.log`

### MySQL

To reset MySQL slow logs use

	ee log reset --mysql

This command will empty `/var/log/mysql/mysql-slow.log`

To empty MySQL slow query log database use

	ee log show --slow-log-db


## gzip

To Gzip Nginx, PHP and MySQL logs use

	ee log gzip

### Nginx

To Gzip Nginx logs use

	ee log gzip --nginx

This command will Gzip all Nginx error logs , `/var/log/nginx/*error.log`.

### PHP

To Gzip PHP logs use

	ee log gzip --php

This command will gzip `/var/log/php5/slow.log` and `/var/log/php5/fpm.log`

### MySQL

To Gzip MySQL slow logs use

	ee log Gzip --mysql

This command will Gzip `/var/log/mysql/mysql-slow.log`


## mail

To Email Nginx, PHP and MySQL logs use

	ee log reset --to=ee@example.com --to=ee1@example.com

This will EMail logs files to address ee@example.com, ee1@example.com

### Nginx

To EMail Nginx logs use

	ee log show --nginx --to=ee@example.com 

This command will email all Nginx error logs , `/var/log/nginx/*error.log`, to ee@example.com

### PHP

To EMail PHP logs use

	ee log show --php --to=ee@example.com

This command will email `/var/log/php5/slow.log` and `/var/log/php5/fpm.log` to ee@example.com

### MySQL

To EMail MySQL slow logs use

	ee log show --mysql --to=ee@example.com

This command will email `/var/log/mysql/mysql-slow.log` to ee@example.com


