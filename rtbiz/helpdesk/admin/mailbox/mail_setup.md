# Mail Setup

It is required to configure a mailbox for the Helpdesk system for sending emails/ notifications to the users. Admins can set up multiple mailboxes.

You have the option to set up the mailbox during the Set up wizard (Refer [1.1 Setup Wizard. Point 5](http://docs.rtcamp.com/rtbiz/helpdesk/admin/setup.html#5-mailbox-setup) for details) or you could do the same  by going to ```Helpdesk Settings -> Mail Setup``` as explained in the video below

[![Mail Setup](http://img.youtube.com/vi/ziIclF-Tzq4/0.jpg)](https://www.youtube.com/watch?v=ziIclF-Tzq4)

## Mail setup settings

Mail setup settings look like the image shown below

![mail-setup-2](https://cloud.githubusercontent.com/assets/8191145/9407077/c41b2832-4823-11e5-8c87-ca64206f97d5.png)


## 1. Mailboxes Set Up

### **a. Email**

 Add here the email id you want to setup as a mailbox.

###**b. Password**

Enter the password for the above email id.

###**c. Provider**

Select correct provider from the options.

###**d. Test Connection**

Click Test Connection to add the mailbox.



###**e. Connected Mailbox**

If added successfully the connected mailbox  will show like this

![mail-setup-2](https://cloud.githubusercontent.com/assets/8191145/9361198/ee590d5c-46b7-11e5-87a1-a33e5f5f9069.png)


###**f. Set Assignee and Product for each Mailbox**

You have the option to configure the mailbox folders to be parsed and select a product and assignee for each mailbox.

####**i. Select Folder**

Click Select Folder button to customize the *Product* and *Assignee* associated with the mailbox.

####ii. **Select Product**

Select the product which belongs to the tickets created via this mailbox.
This is an optional field.

####iii. **Select Assignee**

Select the assignee who will be responsible for the tickets created via this mailbox. This field is also optional.

####iv. **Save**

Click this button to save the changes.

The tickets created from this mailbox will be assigned to the assignee selected here and belong to the product saved here.

![mail-setup-3](https://cloud.githubusercontent.com/assets/8191145/9361191/ee2d5cca-46b7-11e5-99df-dbe8053c03e5.png)

###**g. Another Mailbox**

Click Add Another Mailbox button as shown in the above screenshot and repeat the same steps as above in order to set up another mailbox account.

Once setup, customers can send emails to the mailboxes and their tickets will be created in the Helpdesk.

*Note: Only unread mails in the mailbox are created as tickets.*

## 2. Email Support

This setting enables customer support via emails.

###**i. Enable**:

When enabled, staff can provide support to the customers by replying to their assigned tickets via email.

###**ii. Disable**:

When disabled, staff cannot provide email support to the customers.

***Note:*** For **email only** support, please refer [7.3.1 Email Only Support](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/email_only_support.html).

![mail-setup-2](https://cloud.githubusercontent.com/assets/8191145/9407077/c41b2832-4823-11e5-8c87-ca64206f97d5.png)

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




## 6. Outgoing Emails Mailbox

Select any of the configured mailboxes which will be used to send outgoing emails/notifications.

## 7. Outgoing Emails From Same mailbox

This setting is useful when there are multiple mailboxes as shown in the screenshot below.

###**i. Enable:**

When enabled, the outgoing emails will be delivered from the same mailbox using which the tickets were initially created. This setting will override the outgoing mailbox configured in Outgoing Emails Mailbox.

###**ii. Disable:**

When this setting is disabled, outgoing emails will only be delivered by the mailbox set in Outgoing Emails Mailbox.



## 8. Outgoing Emails 'From' Name

Here admins can set any name to be used for outbound emails. This name will be used as```From: Name <email address>``` for all outgoing emails as shown in the screenshot below



![name](https://cloud.githubusercontent.com/assets/8191145/6501114/52b3b830-c33a-11e4-9dad-5f6f832b66a5.png)





## 9. Blacklist Emails

These are email addresses which are barred by the Administrator from creating any ticket.

Enter email id's to be blacklisted and blocked by Helpdesk as in screenshot below. Each  email id should be in separate line and commas should** not** be used.

![blacklist_emails](https://cloud.githubusercontent.com/assets/8191145/6487587/1f9e311e-c2b8-11e4-82ab-00a51d017331.png)

