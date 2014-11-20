---
author: apekshadeshpande
comments: false
date: 2012-01-18 06:41:02+00:00
excerpt: In Codex it is mentioned that "WP_DEBUG  is a PHP constant (a permanent global
  variable) that can be used to trigger the "debug" mode throughout WordPress". In
  other words, it is an option to enable or disable the PHP errors/warning in the
  WordPress site.
layout: page
slug: wordpress-debugger-wp_debug
title: WordPress Debugger "WP_DEBUG"
wordpress_id: 1032
---

Many times we get errors/warnings message in the code while executing certain functions. And at times, it is difficult to trace out each and every bug manually. For this reason we need a debugger to find the part of the code which is at fault. The WordPress comes with the inbuilt debugger system called "WP_DEBUG".

As a quality check we recommend all rtPanel developers to use WP-DEBUG to ensure that their themes is bug free (or with no obvious bugs).


## What is WP debug?


In Codex it is mentioned that "WP_DEBUG  is a PHP constant (a permanent global variable) that can be used to trigger the "debug" mode throughout WordPress". In other words, it is an option to enable or disable the PHP errors/warning in the WordPress site.


## How to set it true?


By default the WP_DEBUG value is false i.e. the debug mode in WordPress is disabled. To enable the debugger you need to set WP_DEBUG as true in the "wp-config.php" file.

    
    define('WP_DEBUG', true);


**Note: -** true/false are the Boolean value and DO NOT enter these value in the  apostrophes (').


## How to use WP-Debug?


Most of the error in the WordPress occurs due to installed plugins or themes (however there can be other coding issues which we will explain in later posts). The plugins that cause error to be displayed can be found out using WP-Debug. Follow the below step.



	
  1. Deactivate all plugins and uninstall all the third party plugins from the WordPress back end.

	
  2. Now activate the plugin one by one.

	
  3. If the error occurs after activating particular plugin then this plugin has fault.

	
  4. Same is with other remaining plugins.


In this way WP-Debug can be helpful to find the error in the site.


## Why to use WP Debug?


As discussed above, enabling WP_DEBUG will display all PHP errors, notices and warnings. It will have following advantages:



	
  1. It will uncover all PHP Error/warning/notice.

	
  2. Once the bug is fixed the resulting code will be bug-resistant and easier to maintain.

	
  3. It will also cause notices about deprecated functions and arguments within WordPress that are being used on your site.

	
  4. It will be helpful to find out if any plugin or theme is not compatible.




## Conclusion


WP Debug mode is one of the powerful tool in WordPress, to display PHP errors, notices and warnings. So if you are developing the site in WordPress, enabling the WP Debug will help you to counter all the PHP errors, notices and warnings. And fixing all those error will make your site more better!!!

**Warning:** You should be very careful while editing the wp-config.php file as rearranging the contents of the file may create errors on your blog


### Other Useful Links:





	
  1. [Standard Guidelines](https://rtcamp.com/blog/rtpanel-developer-program-standards-guidelines/)

	
  2. [Quality Checklist for Developers](https://rtcamp.com/blog/checklist-developers/)

	
  3. [CSS Checklist for Developers](https://rtcamp.com/blog/css-checklist-developers/)



