---
date: 2014-08-12 12:14:41+00:00
published: false
title: Customizing InspireBook – End User
---

InspireBook is smart WordPress theme which contains hook and filters to easily modify by developer and end user.

Here is the small tweak, by using this tweak End User can add/edit content and styles easily.


## Add Custom Styles


In InspireBook theme option panel, you will see the "Custom Styles" box in General options ( or simply navigate to`/wp-admin/themes.php?page=rtp_general` link). Add CSS selector and your custom styles in this text area.

![custom_styles_textbox](https://rtcamp.com/wp-content/uploads/2014/02/custom_styles_textbox.jpg)

This styles will load after `style.css` file, so that it will overwrite current styles with your custom styles.


## Add Custom Code using hooks


To add custom code in InspireBook, you can use [rtPanel Hooks Editor](http://wordpress.org/plugins/rtpanel-hooks-editor/) plugin. After install and activate, this plugin will add extra tab to theme options panel (`Appearance > InspireBook > Hooks`).

![rtPanel_Hooks_Tab](https://rtcamp.com/wp-content/uploads/2014/02/rtPanel_Hooks_Tab.jpg)

Navigate to Hooks tab, user can see the list of textarea on this page, each textarea represents hook present in InspireBook. For the reference, [check this image](https://rtcamp.com/wp-content/uploads/2012/04/rtpanel-4-1-5-hooks.png) in which we have highlighted the position of hooks.

![rtPanel_Hooks_TextBox](https://rtcamp.com/wp-content/uploads/2014/02/rtPanel_Hooks_TextBox.jpg)

Hooks present in InspireBook are present in [rtPanel Hooks Editor](http://wordpress.org/plugins/rtpanel-hooks-editor/) plugin, hence without editing theme code, you can customize InspireBook.

If you have any suggestion, you can share it on our [support forum](https://rtcamp.com/support/forum/premium-themes/).
