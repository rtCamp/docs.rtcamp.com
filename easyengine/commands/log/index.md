---
title: "log"
---
Monitor site Nginx, PHP and MySQL logs use

	ee log

Use `Ctrl+c` to exit from command

## Nginx
To monitor Nginx logs use

	ee log --nginx

This command will monitor, all Nginx error logs , `/var/log/nginx/*error.log`.

## PHP
To monitor PHP logs use

	ee log --php

This command will monitor `/var/log/php5/slow.log` and `/var/log/php5/fpm.log`

## MySQL
To monior MySQL slow logs use

	ee log --mysql

This command will monitor `/var/log/mysql/mysql-slow.log`
