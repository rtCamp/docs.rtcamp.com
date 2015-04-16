---
title: "update"
---
## Policies EasyEngine uses before updating any site
ee site update command follows following procedure while updating current site.

Before Updating any site easyengine

- Creates nginx configuration backup for site.
- Moves htdocs to backup while updating html/php/mysql site.
- Creates database dump in backup.
- While updating current mysql site easyengine uses same database for installing wordpress tables.
- All these backup are stored outside htdocs, in backup directory.

## Update WordPress User Password
This command is used to update password for wordpress

	ee site update example.com --password

## Update Site
<iframe src="https://docs.google.com/spreadsheets/d/1n-yofh39TCb3ISFB5n5yEWPATnps6_-3kMJJNgaMMOM/pubhtml?widget=true&amp;headers=false" width="780" height="500"></iframe>

### Update Non WordPress Sites to WordPress sites
Update html/php/mysql site created with easyengine to WordPress site.
Update example.com to wordpress site

	ee site update example.com --wp

### Update cache type for WordPress Sites
Update cache type for currently WordPress Sites created with easyengine

	ee site update example.com --wp --wpfc

### Update WordPress Single site to WordPress Multisite
Update currently WordPress single site created with easyengine to WordPress Multisite.

	ee site update example.com --wpsubdir


Similarly, you can use these commands.

	ee site update example.com --wp --wpfc
	ee site update example.com --wp --w3tc
	ee site update example.com --wp --wpsc
	ee site update example.com --wpsubdir
	ee site update example.com --wpsubdir --wpfc
	ee site update example.com --wpsubdir --w3tc
	ee site update example.com --wpsubdir --wpsc
	ee site update example.com --wpsubdomain
	ee site update example.com --wpsubdomain --wpfc
	ee site update example.com --wpsubdomain --w3tc
	ee site update example.com --wpsubdomain --wpsc


### Enable/Disable HHVM on site

(Note: This feature is available with EasyEngine 3.1.0 and onwards)

To enable HHVM on site you can use following commands:

	ee site update example.com --hhvm=on

Similarly,to disable HHVM on site you can use following commands:

	ee site update example.com --hhvm=off


### Enable/Disable Pagespeed on site

(Note: This feature is available with EasyEngine 3.1.0 and onwards)

To enable Pagespeed on site you can use following commands:

	ee site update example.com --pagespeed=on

Similarly,to disable Pagespeed on site you can use following commands:

	ee site update example.com --pagespeed=off


By default EasyEngine does not enables any filters for Pagespeed, you can add various filters from https://developers.google.com/speed/pagespeed/module/config_filters using command

	ee site edit example.com --pagespeed
