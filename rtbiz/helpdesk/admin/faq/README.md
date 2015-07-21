# FAQ

The FAQ is a list of possible questions and their answers. These questions are kept into various categories.

## Tickets

#### Q. Who can create support tickets and How? Can a non logged in user create a support ticket?

There are three ways a ticket could be created which are mentioned in [3.2. Ticket Creation](http://docs.rtcamp.com/rtbiz/helpdesk/admin/tickets/ticket_creation.html).

A user has to be logged in when creating tickets via web support form. However, when tickets are created via email, any user (including non-logged users) can create tickets by sending their emails to the support [mailbox(es)](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/mail_setup.html).


#### Q.How to find Helpdesk Contact for a WordPress User?

Go to your Users area in the Wordpress dashboard. For example: yoursitename.com/wp-admin/users.php. You will find the column Staff/customer, which represents the respective helpdesk contact for that user. When clicked, it will redirect you to the contact where you can see the tickets created by that user.


#### Q. What will happen if I delete the Helpdesk contact of a customer who has created a ticket?

The ticket will still be linked to the customer's WordPress user. However, if the WordPress user too is deleted, then the ticket will then not have any creator.

#### Q. Who can see content of a ticket?

Customer, assignee of ticket and staff member who is added to ticket as a subscriber. All these are also called as ticket participants.

Apart from participants, Helpdesk admin and editor too can see any ticket's content.


#### Q. Who can see staff only replies?

Only staff participants on the ticket, and the helpdesk editor & admin.

#### Q. Who can see sensitive replies?

All participants on a ticket. Though no content of sensitive reply is sent in the emails.



#### Q. For some reason, the tickets are left in the mailbox itself. How to adjust or know how often the plugin checks the mail server and what's the use of wp_cron?

The plugin uses a cron after every 5 minutes to check for new mails. So once the plugin is installed, every incoming mail would be converted into ticket. Though the mails that were there before the installation will not be brought into helpdesk.
You can manually run the cron by using [WP Crontrol](https://wordpress.org/plugins/wp-crontrol/ ) Plugin .
Please check the  [doc](http://docs.rtcamp.com/rtbiz/helpdesk/admin/wpcron/index.html) for more details.

#### Q. How do I customize the ticket frontend?

You can customize the look and feel of the plugin.
You can find the classes that we used in /public/css folder.It is advised that your dev team use the helpdesk classes and update them in the theme itself. This way any future plugin updates will not override the styling changes.

#### Q. What are the acceptable file types which could be used in Helpdesk Web user interface or sent via email?

Helpdesk supports file types mentioned [here](https://codex.wordpress.org/Uploading_Files).

#### Q.How to control the layout of the tickets being displayed? Tickets in xyz.com/ticket are displaying using full width of the page?

To customize display, you can add your own css in `.rthd-container` class in your theme.

```
.rthd-container{
/* Your css */
}

```

For example :

```
.rthd-container {
  width: 100%;
  margin: 0px auto;
  max-width: 67.5em;
}

```

## Settings

#### Q. I am getting error message when I try to connect my mailbox with Helpdesk.

You should do the following:
* Check username and password
* Enable IMAP for your mailbox (Gmail - [Link](https://support.google.com/mail/troubleshooter/1668960), Yahoo - [Link](https://help.yahoo.com/kb/mobile/imap%C2%A0settings-yahoo-mail-sln4075.html), Outlook)
* Check this link if your Google account does not get connected: https://support.google.com/mail/answer/78754

#### Q. How can I enable 'Reply via email' feature?

You have to first connected a email to helpdesk. Go to Settings --> Mail Setup
Once the mailbox is connected, you will see options to enable reply via email .
See section [7.3](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/mail_setup.html#3-reply-via-email) for more details.

#### Q. By default, the notifications are going to any of the assignee we give in the Settings. How to notify a team?

You can add your team's email address for group notifications. Notifications will be sent to this group based on events you (admin) have selected.
Please see this [link](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/notification_email_setup.html) for more details.

#### Q. One of my staff member is receiving adult content mails though I have already enabled the filter?

Probably the customer did not check the 'Adult content' box while creating the ticket.
Or you (admin) might not have checked the filter from the staff's his/her profile.

Read more about adult content settings in [#7.5](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/advanced_settings.html#3-adult-content-filter).

#### Q. How do attributes work?

Attributes adds dynamic [taxonomy](https://codex.wordpress.org/Taxonomies) to the ticket post type.

For example: You can create an attribute named Ticket priority. You can add terms as High, Medium and Low.

A New column(Ticket priority) will be added in ticket listing page in the backend and you can filter your tickets using ticket priority and assign ticket priority from ticket's backend.


##Setup Wizard

####  Endless loading in Set Wizard

After selecting the support Page in [Setup Wizard](http://docs.rtcamp.com/rtbiz/helpdesk/admin/setup.html) and clicking Next, the page continues to load and nothing happens.

####Solution

This might be a JavaScript issue. Try refreshing the browser cache and recheck. The wizard should work after the refresh.

##Errors/Warnings/Notices

####UI

####Q. On logging in as a user from the front end and submitting a ticket, I'm getting notice as shown below:

```NOTICE: UNDEFINED INDEX: RTHDDEFAULTUSER IN /HOME/WDMRESP/PUBLIC_HTML/SITE/WP-CONTENT/PLUGINS/RTBIZ-HELPDESK/ADMIN/CLASSES/RTBIZ-HD-IMPORT-OPERATION/CLASS-RTBIZ-HD-IMPORT-OPERATION.PHP ON LINE 489```


####Solution
This might be because a default assignee has not been selected. Please follow the steps as shown below:

Step 1. Go to Settings

Step 2. Open General

Step 3. Select a Default Assignee

Step 4. Click on Save

For more details regarding default assignee please check http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/general.html#3-default-assignee


##General Questions
#### Q. Are there any monthly costs to use this plugin?

No. You only have to make one time payment for a one year regular update license.

#### Q. Can all my current customers use this helpdesk?

Yes. They can create a ticket from their my-account and orders pages.

#### Q. Who owns my data?

Only you. The plugin will be installed into your WordPress on server owned by you.

#### Q. Will I be refunded if I don’t like this Helpdesk?

Yes, no questions asked. :)
Read more here: https://rtcamp.com/refund-policy/

####Q. None of the above solves my problem. How to reach out for support?

We encourage you to check out the doc including FAQ before asking for support. But if the problem you are facing isn't mentioned here or not described in detail, you are requested to create a ticket on our [premium support form](https://rtcamp.com/premium-support/.). We'll be happy to help.









