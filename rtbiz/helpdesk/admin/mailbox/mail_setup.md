# Mail Setup

It is required to configure a mailbox for the Helpdesk system for sending emails/ notifications to the users. Admins can set up multiple mailboxes.

You have the option to set up the mailbox during the Set up wizard (Ref [1.1 Setup Wizard. Point 5](http://docs.rtcamp.com/rtbiz/helpdesk/admin/setup.html#5-mailbox-setup)) or you could do the same  by going to ```Helpdesk Settings -> Mail Setup``` as explained in the video below

{% youtube %}https://www.youtube.com/watch?v=ziIclF-Tzq4 {% endyoutube %}

![new-mail-setup](https://cloud.githubusercontent.com/assets/8191145/9351734/86513754-4679-11e5-8456-5c02bbc14588.png)

## 1. Mailboxes Set Up

### **i. Email**

 Add here the email id you want to setup as a mailbox.

###**ii. Password**

Enter the password for the above email id.

###**iii. Provider**

Select correct provider from the options.

###**iv. Test Connection**

Click Test Connection to add the mailbox.

![mail-setup-test-connection](https://cloud.githubusercontent.com/assets/8191145/9351899/a14954dc-467a-11e5-8ffb-789545fcb6da.png)



###**v. Connected Mailbox**

If added successfully the connected mailbox  will show like this

![mail-setup-connected-mailbox](https://cloud.githubusercontent.com/assets/8191145/9351978/436417f2-467b-11e5-97d3-30d9edba1197.png)

###**vi. Set Assignee and Product for each Mailbox**

You have the option to configure mailbox folders to be parsed and select a product and assignee for each mailbox.

* **Select Folder** - Click Select Folder button to customize the *Product* and *Assignee* associated with the mailbox.

* **Select Product** - Select the product which belongs to the tickets created via this mailbox.
This is an optional field.

* **Select Assignee** - Select the assignee who will be responsible for the tickets created via this mailbox. This field is also optional.

* **Save** - Click this button to save the changes.

The tickets created from this mailbox will be assigned to the assignee selected here and belong to the product saved here.

![mb_setup](https://cloud.githubusercontent.com/assets/8191145/8983820/e9ef99de-36ea-11e5-9012-182ffd0077bf.png)

###**vii. Another Mailbox**

Click Add Another Mailbox button and repeat the same steps as above in order to set up another mailbox account.

###**viii. Send email to mailbox for creating tickets**

Once setup, customers can send emails to the mailboxes and their tickets will be created in the Helpdesk.

## 2. Email Support

This setting enables customer support via emails.

###**i. Enable**:

When enabled, staff can provide support to the customers by replying to their assigned tickets via email.

###**ii. Disable**:

When disabled, staff cannot provide email support to the customers.

***Note:*** For **email only** support, please refer [7.3.1 Email Only Support](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/email_only_support.html).

![mail-setup-connected-mailbox](https://cloud.githubusercontent.com/assets/8191145/9351978/436417f2-467b-11e5-97d3-30d9edba1197.png)

## 3. Mailbox Reading


**i. Enable**: When enabled, customers can directly send emails to the mailboxes and their tickets will be created in the Helpdesk. Customers and staff can add followups via email.

**ii. Disable**: When Disabled, tickets will not be created via mail and new followups by customer and Staff cannot be added via mail.

![enable_mailbox_reading](https://cloud.githubusercontent.com/assets/8191145/6487363/bee796b8-c2b6-11e4-8b84-0f761513cb48.png)

## 4. Reply Via Email

This is used to allow or block the email followups.

**i. Enable**: Customers and staff members connected to the ticket can create followups to the tickets by replying via email

**ii. Disable**: Customers and staff connected to the ticket can not create followups to the tickets by replying via email

![Reply via Email](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/46a4d1e93f/Reply_via_Email.png)

## 5. Web Support

###**i. Enable**:

When enabled, customers will be able to submit their issues via support form and will be able to access ticket's front end user interface.

###**ii. Disable**:

When disabled, customers won't be able to access the support form and they won't have access to ticket's front end user interface.

![mail-setup-connected-mailbox](https://cloud.githubusercontent.com/assets/8191145/9351978/436417f2-467b-11e5-97d3-30d9edba1197.png)

## 6. Outgoing Emails Mailbox

Select any of the configured mailboxes which will be used to send outgoing emails/notifications.



## 7. Outgoing Emails 'From' Name

Here admins can set any name to be used for outbound emails. This name will be used as```From: Name <email address>``` for all outgoing emails as shown in the screenshot below



![name](https://cloud.githubusercontent.com/assets/8191145/6501114/52b3b830-c33a-11e4-9dad-5f6f832b66a5.png)


## 8. Outgoing Emails From Same mailbox

This setting is useful when there are multiple mailboxes as shown in the screenshot below.

###**i. Enable:**

When enabled, the outgoing emails will be delivered from the same mailbox using which the tickets were initially created. This setting will override the outgoing mailbox configured in Outgoing Emails Mailbox.

###**ii. Disable:**

When this setting is disabled, outgoing emails will only be delivered by the mailbox set in Outgoing Emails Mailbox.

![new-mailsetup-image](https://cloud.githubusercontent.com/assets/8191145/9195862/bb04fba2-4043-11e5-86d4-56b3b371e4ac.png)


## 9. Blacklist Emails

These are email addresses which are barred by the Administrator from creating any ticket.

Enter email id's to be blacklisted and blocked by Helpdesk as in screenshot below. Each  email id should be in separate line and commas should** not** be used.

![blacklist_emails](https://cloud.githubusercontent.com/assets/8191145/6487587/1f9e311e-c2b8-11e4-82ab-00a51d017331.png)

