
# Stack

EasyEngine manages the packages required to run your site with `stack` command.


## Manage Packages

`stack` command manages packges with subcommands `install`, `remove`, `purge`.

	ee stack [install | remove | purge ] [--nginx | --php | --mysql | --postfix | --wpcli | --adminer| --utils | --web | --admin | --mail | --all ]

#####subcommands and their meanings

**install** - install packages associated with provided stack

**remove** - removes packages from system associated with provided stack

**purge** - removes packages from system associated with provided stack with their configuration files.

In case of above subcommands, the default stack is `--web` and `--admin`

The below table enlists the packages associated with arguments.

argument | packages
--------------|----------------------------------------------------------
	--nginx   | nginx-custom, nginx-common
	--php     | php5-fpm, php5-curl, php5-gd, php5-imap, php5-mcrypt, php5-common, php5-readline, php5-mysql, php5-cli, php5-memcache, php5-imagick, memcached, graphviz, php-pear, php5-dev
	--mysql   | mariadb-server, mysqltuner, percona-toolkit
	--hhvm    | hhvm
	--postfix | postfix
	--wpcli   | wpcli
	--adminer | adminer
	--web     | nginx, php, mysql, hhvm, wp-cli, postfix
	--admin   | phpmyadmin, adminer, annemometer,
	--utils   | phpMemcachedAdmin, opcache, Opgui, Webgrind, pt-query-advisor, Anemometer
	--mail    |dovecot-core, dovecot-imapd, dovecot-pop3d, dovecot-lmtpd, dovecot-mysql, dovecot-sieve, dovecot-managesieved, postfix-mysql, php5-cgi, php-gettext, php-pear
	--mailscanner | amavisd-new, spamassassin, clamav, clamav-daemon, arj, zoo, nomarch, lzop, cabextract, p7zip, rpm, unrar-free
	-- all        | web, admin, mail, mailscanner



## Manage Services

`stack` command also manages services with subcommands like `start`, `stop`, `restart`, `reload`, `status`

	ee stack [start | stop | restart | reload | status] [--nginx | --php | --mysql | --memcache | dovecot]

## Migrate to MariaDB

Migrating to Mariadb from your MySQL can be accomplished with
	ee stack migrate --mariadb

## Upgrading packages

`upgrade` subcommand upgrade packages in the system.

	ee stack upgrade [--nginx | --hhvm | --mail | --mysql | --nginx | --no-prompt | --php | --php56 | --postfix | --web ]
