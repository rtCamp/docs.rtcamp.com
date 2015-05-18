# EasyEngine Internals

### NGINX config files added by EasyEngine
EasyEngine adds following file to `/etc/nginx/` directory having configurations for different purposes.

    /etc/nginx/
    ├── common
    │   ├── acl.conf
    │   ├── locations.conf
    │   ├── php.conf
    │   ├── php-hhvm.conf
    │   ├── w3tc.conf
    │   ├── w3tc-hhvm.conf
    │   ├── wpcommon.conf
    │   ├── wpfc.conf
    │   ├── wpfc-hhvm.conf
    │   ├── wpsc.conf
    │   ├── wpsc-hhvm.conf
    │   └── wpsubdir.conf
    ├── conf.d
    │   ├── blockips.conf
    │   ├── ee-nginx.conf
    │   ├── fastcgi.conf
    │   ├── pagespeed.conf
    │   └── upstream.conf
    ├── fastcgi.conf
    ├── fastcgi_params
    ├── htpasswd-ee
    ├── sites-available
    │   ├── 22222
    │   └── example.com
    ├── sites-enabled
    │   ├── 22222 -> /etc/nginx/sites-available/22222
    │   └── example.com -> /etc/nginx/sites-available/example.com
