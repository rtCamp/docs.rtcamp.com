---
author: manish.songirkar
comments: false
date: 2014-01-27 14:49:48+00:00
layout: page
slug: automation-site-deployment
title: Automation site deployment
wordpress_id: 56411
---

If you are using rtPanel, you can deploy site and Database to Staging OR Live server, also can pull the code from Staging/Live to the local server.


**Important:** Refer the article [Setup rtPanel for Development](http://docs.rtcamp.com/rtpanel/developer/setup-rtpanel-development/) before start.


Now you have to modify Gruntfile.js file in rtPanel theme directory, follow the steps below,

**Define backup directory:**
This will create your site's webroot and database backup, backup directory must be outside the current working directory of your Gruntfile.

    
    backup_dir: "../../backups/"


**Arguments for rsync:**

    
    rsync_args: ['-avz']


where,
a = Archive mode
v = Increase Verbosity
z = Compress file data during the transfer

**Exclude Files or Directory:**

The listed files and directory will not transfer to a remote host, you can add your custom files by comma "," separation.

    
    exclusions: ['Gruntfile.js', '.bower.json', '.editorconfig', '.travis.yml', '.git/', '.svn/', 'tmp/*', 'wp-config.php', 'composer.json', 'composer.lock', '.gitignore', 'package.json', 'node_modules', '.sass-cache', 'npm-debug.log', '.scss-cache']


**Provide Local Server Details:**

This contains your local server details, you will get database details in your wp-config.file.

    
    local: {
    	"title"		: "local-site-title",
    	"database"	: "local_database_name",
    	"user"		: "local_database_username",
    	"pass"		: "local_database_password",
    	"host"		: "localhost",
    	"url"		: "http://local-site.com",
    	"path"		: "/var/www/local-site.com/htdocs"
    }


**Provide Staging Server Details:**

    
    staging: {
    	"title"		: "staging-site-title",
    	"database"	: "staging_database_name",
    	"user"		: "staging_database_username",
    	"pass"		: "staging_database_password",
    	"host"		: "staging_database_host",
    	"url"		: "http://staging-site.com",
    	"path"		: "/var/www/staging-site.com/",
    	"ssh_host"	: "user@staging_host"
    }


**Provide Final/Live Server Details:**

    
    final: {
    	"title"		: "final-site-title",
    	"database"	: "final_database_name",
    	"user"		: "final_database_username",
    	"pass"		: "final_database_password",
    	"host"		: "final_database_host",
    	"url"		: "http://final-site.com",
    	"path"		: "/var/www/final-site.com/",
    	"ssh_host"	: "user@final_host"
    }




Important: Make sure above all details you have provided are proper, also take backup of your remote site and database before starting site deployment.


Now go to terminal and follow these commands:

Push local webroot to staging server,

    
    grunt push_files --target=staging


Push local database to staging server,

    
    grunt push_db --target=staging


Pull staging server webroot to local server,

    
    grunt pull_files --target=staging


Pull staging database to local server,

    
    grunt pull_db --target=staging



You can change `--target=staging` to `--target=final` to reflect changes on the live server.

Useful article: [grunt-wordpress-deploy](https://npmjs.org/package/grunt-wordpress-deploy)
