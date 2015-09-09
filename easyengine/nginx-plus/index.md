---
title: "EasyEngine with NGINX PLUS"
---

### Pre Requisites :

We assume that you have freshly installed NGINX PLUS version as instructed here.

https://cs.nginx.com/repo_setup

### Install EasyEngine

You can install EasyEngine with usual method as describe here.
http://docs.rtcamp.com/easyengine/install/#QuickSetup

### Limitations

*--wpredis* option will not work while creating site with EasyEngine.

*--wpfc*  with NGINX PLUS you can purge cache as given here.  http://nginx.org/en/docs/http/ngx_http_fastcgi_module.html#fastcgi_cache_purge

You may receive following warning when using `ee debug --nginx=on` if you have not nginx with debug option.

```
nginx: [warn] "debug_connection" is ignored, you need to rebuild nginx using --with-debug option to enable it in /etc/nginx/nginx.conf:11
```
