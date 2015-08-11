# Mail Setup

It is required to configure a mailbox for the Helpdesk system for sending emails/ notifications to the users. Admins can set up multiple mailboxes.

You have the option to set up the mailbox during the Set up wizard (Ref [1.1 Setup Wizard. Point 5](http://docs.rtcamp.com/rtbiz/helpdesk/admin/setup.html#5-mailbox-setup)) or you could do the same  by going to **Helpdesk Settings -> Mail Setup**

![Mail_Setup](http://git.rtcamp.com/rtbiz/rtbiz/uploads/22db71ed9a5d9ce1f4479aeca9a09144/Mail_Setup.png)



### 1. Mailboxes Set Up


 **i. Email**

 Add here the email id you want to setup as a mailbox.

**ii. Password**

Enter the password for the above email id.

**iii. Provider**

Select correct provider from the options.

**iv. Test Connection**

Click Test Connection to add the mailbox.

![mail-setup](https://cloud.githubusercontent.com/assets/8191145/9084311/f59e4baa-3b8f-11e5-9537-8ffa1b406430.png)

**v. Connected Mailbox**

If added successfully the connected mailbox  will show like this

![new-mailbox-added](https://cloud.githubusercontent.com/assets/8191145/9084353/75445430-3b90-11e5-82c1-ade342117676.png)

**vi. Set Assignee and Product for each Mailbox**

You have the option to configure mailbox folders to be parsed and select a product and assignee for each mailbox.

* **Select Folder** - Click Select Folder button to customize the *Product* and *Assignee* associated with the mailbox.

* **Select Product** - Select the product which belongs to the tickets created via this mailbox.
This is an optional field.

* **Select Assignee** - Select the assignee who will be responsible for the tickets created via this mailbox. This field is also optional.

* **Save** - Click this button to save the changes.

The tickets created from this mailbox will be assigned to the assignee selected here and belong to the product saved here.

![mb_setup](https://cloud.githubusercontent.com/assets/8191145/8983820/e9ef99de-36ea-11e5-9012-182ffd0077bf.png)

**vii. Another Mailbox**

Click Add Another Mailbox button and repeat the same steps as above in order to set up another mailbox account.

**viii. Send email to mailbox for creating tickets**

Once setup, customers can send emails to the mailboxes and their tickets will be created in the Helpdesk.


### 2. Mailbox Reading


**i. Enable**: When enabled,customers can directly send emails to the mailboxes and their tickets will be created in the Helpdesk. Customers and staff can add followups via email.

**ii. Disable**: When Disabled, tickets will not be created via mail and new followups by customer and Staff cannot be added via mail.

![enable_mailbox_reading](https://cloud.githubusercontent.com/assets/8191145/6487363/bee796b8-c2b6-11e4-8b84-0f761513cb48.png)

### 3. Reply Via Email

This is used to allow or block the email followups.

**i. Enable**: Customers and staff members connected to the ticket can create followups to the tickets by replying via email

**ii. Disable**: Customers and staff connected to the ticket can not create followups to the tickets by replying via email

![Reply via Email](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/46a4d1e93f/Reply_via_Email.png)

### 4. Outgoing Emails Mailbox

Select any of the configured mailboxes which will be used to send outgoing emails/notifications.

![outgoing_emails_mailbox](https://cloud.githubusercontent.com/assets/8191145/6487585/1f68f206-c2b8-11e4-9ba1-c0d6d52a2612.png)


### 5. Outgoing Emails 'From' Name

Here admins can set any name to be used for outbound emails. This name will be used as```From: Name <email address>``` for all outgoing emails as shown in the screenshot below

![outgoing_sysname_helpdesk](https://cloud.githubusercontent.com/assets/8191145/6501154/efa7c12c-c33a-11e4-8b76-936fc21bd2a2.png)

![name](https://cloud.githubusercontent.com/assets/8191145/6501114/52b3b830-c33a-11e4-9dad-5f6f832b66a5.png)


### 6. Outgoing Emails From Same mailbox

This setting is useful when there are multiple mailboxes as shown in the screenshot below.

**i. Enable:** When enabled, the outgoing emails will be delivered from the same mailbox using which the tickets were initially created. This setting will override the outgoing mailbox configured in Outgoing Emails Mailbox.

**ii. Disable:** When this setting is disabled, outgoing emails will only be delivered by the mailbox set in Outgoing Emails Mailbox.

![mailbox](https://cloud.githubusercontent.com/assets/8191145/9136923/e86a9d5e-3d37-11e5-9419-d8d8630d5c13.png)



### 7. Blacklist Emails

These are email addresses which are barred by the Administrator from creating any ticket.

Enter email id's to be blacklisted and blocked by Helpdesk as in screenshot below. Each  email id should be in separate line and commas should** not** be used.

![blacklist_emails](https://cloud.githubusercontent.com/assets/8191145/6487587/1f9e311e-c2b8-11e4-82ab-00a51d017331.png)

