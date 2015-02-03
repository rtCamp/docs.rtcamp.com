---
title: "Clean"
---

Clean NGINX FastCGI cache, Opcacache, Memcache

	ee clean

clean fastgi cache by default.

Sample Output

	root@example.com:~# ee clean
	Cleaning NGINX FastCGI cache, please wait...

## Clean FastCGI cache

	ee clean --fastcgi

Sample Output

	root@example.com:~# ee clean --fastcgi
	Cleaning NGINX FastCGI cache, please wait...

## Clean Memcache

	ee clean --memcache

Sample Output

	root@example.com:~# ee clean memcache
	Cleaning Memcached, please wait...

## Clean OPcache

	ee clean --opcache

Sample Output:

	root@example.com:~# ee clean opcache
	Cleaning OPcache, please wait...

## Clean FastCGI, Memcache, OPcache

	ee clean --all

Sample Output

	root@example.com:~# ee clean --all
	Cleaning NGINX FastCGI cache, please wait...
	Cleaning Memcached, please wait...
	Cleaning OPcache, please wait..

