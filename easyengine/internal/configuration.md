# EasyEngine Configuration

EasyEngine Configuration Location : `/etc/ee/ee.conf`

The sections in this configuration user should focus on
```
[stack]

### IP address that will be used in Nginx configurations while installing
ip-address = 127.0.0.1

[mysql]

### MySQL database grant host name
grant-host = localhost

### Ask for MySQL db name while site creation
db-name = False

### Ask for MySQL user name while site creation
db-user = False

[wordpress]

### Ask for WordPress prefix while site creation
prefix = False

### User name for WordPress sites
user =

### Password for WordPress sites
password =

### EMail for WordPress sites
email =
```
