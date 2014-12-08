---
title: rtMedia Membership Addon
---

rtMedia Membership plugin allows you to easily manage Membership-based sites using [rtMedia](https://wordpress.org/plugins/buddypress-media/).

Make sure that [rtMedia](https://wordpress.org/plugins/buddypress-media/) plugin is installed which is necessary to be able to use rtMedia Membership.


## Installation


Perform the following steps to get your Membership add-on running:



  1.  Download rtMedia Membership plugin from the **My Account** Section

	
  2. Go to your Dashboard and navigate to `Plugins > Add New > Upload `.
Select the `rtmedia-membership.zip`  file from your computer and click upload.

	
  3.  Click **Install Now** to install the plugin. Then, click the **Activate Plugin** link, to activate the plugin.


## Settings (Site Admin)


As a site admin, you can use a range of settings to help you organize memberships to your website.


### Membership


[![rtMedia-membership-settings](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtMedia-membership-settings.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtMedia-membership-settings.png)


	
  1. Go to   `rtMedia > Settings > Membership`.

	
  2. Set a default membership plan for the new members of your site.

	
  3. Click the link, as shown above, to import user data in membership database tables.


### Import Plans and Calculate Media Data


[![rtmedia-membership-import-user-media-data](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-import-user-media-data.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-import-user-media-data.png)

	
  1. You can pre-select a default plan for all users. Gold, Silver and Bronze plans can be set as default plans.

	
  2. Choose either **Yes** or **No** to calculate previously uploaded user data or not.

	
  3. Click **Start** to begin the import.

	
  4. After import , click the link as shown below, to navigate to Membership Settings.


[![Jump to rtMedia Membership Settings](http://docs.rtcamp.com/wp-content/uploads/2014/10/6-Jump-to-rtMedia-Membership-Settings-1024x389.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/6-Jump-to-rtMedia-Membership-Settings.png)


### File and Upload Limits


[![file and upload settings](https://cloud.githubusercontent.com/assets/8191145/5299248/45bc82f6-7beb-11e4-847f-67703c0b6a45.png)](https://cloud.githubusercontent.com/assets/8191145/5299248/45bc82f6-7beb-11e4-847f-67703c0b6a45.png)


  1. General Settings for Membership plugin 
  
  2. A value of **-1** means Unlimited and **0** means No Access.

	
  3. Select a default plan for a newly created user.

	
  4. Set **Upload Limit** in MB on Daily, Weekly, Monthly, Yearly and Lifetime basis. These upload limits can be set differently for each Membership plan.

	
  5. Similarly, set **File Limits** for each membership plan.

	
  6. Manage plans will take you to another page that allows you to add new plans or modify existing ones. (*Documentation*)

	
  7. Click the link to recalculate the number of files and the upload data used by each user.

	
  8. After all the changes are made, apply them by clicking **Save Settings.**


### Recalculate user data


Recalculate user data forcefully if you want to include previously uploaded media data for upload quota calculation.

[![force-importer](http://docs.rtcamp.com/wp-content/uploads/2014/10/force-importer-1024x244.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/force-importer.png)


### Manage Plans


Click **Manage Plans** on the top-right corner to add plans or modify existing ones.

[![rtMedia-Membership-Manage-Plans](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtMedia-Membership-Manage-Plans.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtMedia-Membership-Manage-Plans.png)

Add a plan according to the following steps.


  1. Enter a name for the plan.

	
  2. Add a description of the Membership plan.

	
  3. Select a color for the plan. If you prefer, you can add CSS color code directly.

	
  4. Click **Add New Plan** to create the plan. The plan is then displayed on the list at the right.


### Update Plans


[![rtmedia-membership-update-plans](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-update-plans.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-update-plans.png)

	
  1. You might want to modify the default plans that we have. You can check for additional options by clicking **Screen Options.**

	
  2. Click **Edit** or **Quick Edit** to make changes to the user plans. Clicking **Delete** will remove the user plan.


### Add Plan Members


[![rtmedia-membership-add-plans-users](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-add-plans-users.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-add-plans-users.png)


  1. You can manage membership for individual users by looking them up under **Users** on the WordPress Dashboard.

	
  2. Select the user as shown in the second step in the image above.

	
  3. Always remember to use **Screen Options** on the right top corner, if you do not see all options on your screen .

	
  4. You can Add the selected user to a particular plan you have created. Select the user, select the **Add users to** option, and select the plan from the drop down list as shown in point 4 in the image above.

	
  5. Click **Update** to save all the changes you made to membership plans for that individual user.


### Manage Plan Limits


[![rtmedia-memebership-manage-plan-limits](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-memebership-manage-plan-limits.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-memebership-manage-plan-limits.png)

	
  1. Admins can change plans for users.

	
  2. Admins can micro-manage Upload Limit and No of Files for the user.

	
  3. You can also select **Use Plan Default Value **to apply the plan values saved in Membership Settings.

	
  4. Do note that 0 = No Access and -1 = Unlimited.

	
  5. Click on **Update Profile **to save these changes for the particular user.

## Features (Users)




### Plan Values on BuddyPress Profiles


Members plan values will be visible in their BuddyPress profiles.[|](http://docs.rtcamp.com/wp-content/uploads/2014/10/membership-values-in-buddypress-profile.png)[![membership-values-in-buddypress-profile](http://docs.rtcamp.com/wp-content/uploads/2014/10/membership-values-in-buddypress-profile.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/membership-values-in-buddypress-profile.png)


## Messages Displayed to End-User


There are a number of messages that are displayed to end users. Here are some examples.


### File Count Limits Surpassed in Activity


When you set the limits, users will not be allowed to upload media beyond that limit.[![limit-exceed-during-activity-upload](http://docs.rtcamp.com/wp-content/uploads/2014/10/limit-exceed-during-activity-upload.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/limit-exceed-during-activity-upload.png)


### File Count Limits Surpassed in Media Gallery


[![limit-exceed-during-media-gallery-upload](http://docs.rtcamp.com/wp-content/uploads/2014/10/limit-exceed-during-media-gallery-upload.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/limit-exceed-during-media-gallery-upload.png)


### File Size Limits Surpassed in Activity


Files exceeding the upload size limit are rejected.

[![](http://docs.rtcamp.com/wp-content/uploads/2014/10/file-size.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/file-size.png)


### File Size Limits Surpassed in Media Gallery


[![](http://docs.rtcamp.com/wp-content/uploads/2014/10/Media-Gallery-file-size.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/Media-Gallery-file-size.png)


## Displayed Messages to End-User (rtMedia -Pro)


These messages are only shown to users using rtMedia Pro.


### File Size Limits Surpassed in WP Comment Attachment


[![](http://docs.rtcamp.com/wp-content/uploads/2014/10/WP-comment-attachment.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/WP-comment-attachment.png)


### File Size Limits Surpassed in Forum Topic and Reply Attachments


[![](http://docs.rtcamp.com/wp-content/uploads/2014/10/forum-file-size1.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/forum-file-size1.png)


### File Count Limits Surpassed in WP Comment Attachment


[![limit-exceed-during-wordpress-comment-upload](http://docs.rtcamp.com/wp-content/uploads/2014/10/limit-exceed-during-wordpress-comment-upload.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/limit-exceed-during-wordpress-comment-upload.png)


### File Count Limits Surpassed in Forum Topic and Reply Attachments


[![](http://docs.rtcamp.com/wp-content/uploads/2014/10/forum-file-count.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/forum-file-count.png)
