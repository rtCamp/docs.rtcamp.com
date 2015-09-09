---
title: "EasyEngine with NGINX PLUS"
---

### Pre Requisites :

We assume that you have freshly installed NGINX PLUS version as instructed here.
https://cs.nginx.com/repo_setup

### Install EasyEngine
You can install EasyEngine with usual method as describe here.

### Limitations
*--wpredis* option will not work while creating site with EasyEngine.
*--wpfc* cache purge may not work as NGINX PLUS does not provide fastcgi_cache_purge module.

You may receive following warning when using `ee debug --nginx=on` if you have not nginx with debug option.

```
nginx: [warn] "debug_connection" is ignored, you need to rebuild nginx using --with-debug option to enable it in /etc/nginx/nginx.conf:11
```
