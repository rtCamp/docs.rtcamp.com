---
title: "Info"
---


This command will show you the information related to Nginx and PHP. You need to log in as root user and run this command.

# NGINX Info

	ee info --nginx

Output will look like:

	NGINX (1.6.0):
	user				 www-data
	worker_processes		 auto
	worker_connections		 4096
	keepalive_timeout		 30
	fastcgi_read_timeout		 300
	client_max_body_size		 100m
	allow				 127.0.0.1 

# PHP Info

	ee info --php

Output will look like this:

	PHP (5.5.14-2):
	user				 www-data
	expose_php			 Off
	memory_limit			 128M
	post_max_size			 100M
	upload_max_filesize		 100M
	max_execution_time		 300

	Information about www.conf
	ping.path			 /ping
	pm.status_path			 /status
	process_manager			 ondemand
	pm.max_requests			 500
	pm.max_children			 100
	pm.start_servers		 20
	pm.min_spare_servers		 10
	pm.max_spare_servers		 30
	request_terminate_timeout	 300
	xdebug.profiler_enable_trigger	 off
	listen				 127.0.0.1:9000

	Information about debug.conf
	ping.path			 /ping
	pm.status_path			 /status
	process_manager			 ondemand
	pm.max_requests			 500
	pm.max_children			 100
	pm.start_servers		 20
	pm.min_spare_servers		 10
	pm.max_spare_servers		 30
	request_terminate_timeout	 300
	xdebug.profiler_enable_trigger	 on
	listen				 127.0.0.1:9001

# MySQL Info

	ee info --mysql

Output will look like this:

	MySQL (5.5.37):
	user				 root
	port				 3306
	wait_timeout			 30
	interactive_timeout		 60
	max_used_connections		 1/151
	datadir				 /var/lib/mysql/
	socket				 /var/run/mysqld/mysqld.sock

# All info
To view all commands output together use

	ee info


