# FAQ

The FAQ is a list of possible questions and their answers. These questions are kept into various categories.

## Tickets

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
