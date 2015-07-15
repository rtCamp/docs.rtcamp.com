# Troubleshooting



#### On logging in as a user from the front end and submitting a ticket, getting notice as shown below:

```NOTICE: UNDEFINED INDEX: RTHDDEFAULTUSER IN /HOME/WDMRESP/PUBLIC_HTML/SITE/WP-CONTENT/PLUGINS/RTBIZ-HELPDESK/ADMIN/CLASSES/RTBIZ-HD-IMPORT-OPERATION/CLASS-RTBIZ-HD-IMPORT-OPERATION.PHP ON LINE 489```


####Solution
This might be because a default assignee has not been selected. Please follow the steps as shown below:

Step 1. Go to Settings

Step 2. Open General

Step 3. Select a Default Assignee

Step 4. Click on Save

For more details regarding default assignee please check http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/general.html#3-default-assignee

##Other Issues

####  Endless loading in Set Wizard

After selecting the support Page in [Setup Wizard](http://docs.rtcamp.com/rtbiz/helpdesk/admin/setup.html) and clicking Next, the page continues to load and nothing happens.

####Solution

This might be a JavaScript issue. Try refreshing the browser cache and recheck. The wizard should work after the refresh.




