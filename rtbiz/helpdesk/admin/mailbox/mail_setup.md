# Mail Setup

It is required to configure a mailbox for the Helpdesk system for sending emails/ notifications to the users. Administrators can set up multiple mailboxes.

##### 1. Mail Set Up

i. Set up the mailbox by going to **rtHelpdesk Settings -> Mail Setup**.


ii.Click on 'Add Email'

![add email](https://cloud.githubusercontent.com/assets/8191145/6484041/1db83af8-c29e-11e4-92c0-c2370731de49.png)


iii. Select server connection type IMAP.( You might need to enable IMAP for your mailbox accounts.  For gmail, check
[here](https://support.google.com/mail/troubleshooter/1668960?authuser=6&hl=en&authuser=6&rd=2) )

Select any mail server, add the login details as shown below

![select_mail_server](https://cloud.githubusercontent.com/assets/8191145/6484590/5f490a42-c2a3-11e4-90ae-05c045573c23.png)


Then click on 'Connect'.

![click_on_connect](https://cloud.githubusercontent.com/assets/8191145/6502484/d8f12dec-c349-11e4-9710-a34bf4642502.png)

iv. If added successfully the connected mailbox  will show like this

![added_successfully](https://cloud.githubusercontent.com/assets/8191145/6484791/e5f53736-c2a4-11e4-87aa-751a0065c885.png)

Click on 'Show' button. Select atleast one mail folder to read . All the incoming mails coming from this folder of the mailbox will be read and parsed by Helpdesk.

![show_and_select_folder](https://cloud.githubusercontent.com/assets/8191145/6485463/ed24cc9c-c2a9-11e4-847b-644bde6fe0c3.png)

v. Click on save after selecting the folder(s).

vi. To set up another mailbox account click on 'Add Email' button

![multiple_mailboxes](https://cloud.githubusercontent.com/assets/8191145/6485751/e26f34a2-c2ab-11e4-8e12-4367e252d94b.png)


vii. Once setup, the Ticket Authors/ customers can directly send mails to the mailboxes and their tickets will be created in the Helpdesk.

![customer_address_to_mailbox](https://cloud.githubusercontent.com/assets/8191145/6486330/301e0198-c2b0-11e4-9c27-156782b18ccb.png)

Sample Ticket :

![test_ticket](https://cloud.githubusercontent.com/assets/8191145/6486488/65f90bfe-c2b1-11e4-910f-154bd53cbae1.png)


##### 2. Enable Mailbox Reading

![enable_mailbox_reading](https://cloud.githubusercontent.com/assets/8191145/6487363/bee796b8-c2b6-11e4-8b84-0f761513cb48.png)

i. When Enabled : Ticket Authors can directly send mails to the mailboxes and their tickets will be created in the Helpdesk. Ticket authors and Staff can followup via mail.

ii. When Disabled: Tickets will not be created via mail and new followups by Ticket Author and Staff cannot be added via mail.

##### 3. Reply Via Email

This is used to allow or block the email followups.

i. When Enabled : Ticket Authors and staff members connected to the ticket can create followups to the tickets when replying via email

ii. When Disabled : Ticket Authors and staff members connected to the ticket can not create followups to the tickets when replying via email

![Reply via Email](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/46a4d1e93f/Reply_via_Email.png)

##### 4. Outgoing Emails' Mailbox

Select any of the configured Mailboxes which will be used to send outgoing emails/notifications.

![outgoing_emails_mailbox](https://cloud.githubusercontent.com/assets/8191145/6487585/1f68f206-c2b8-11e4-9ba1-c0d6d52a2612.png)


##### 5. Outgoing Emails' FROM Name

Here Administrators can set any name to be used for outbound emails. This Name will be used as FROM: name < email address > for all outgoing emails.

![outgoing_sysname_helpdesk](https://cloud.githubusercontent.com/assets/8191145/6501154/efa7c12c-c33a-11e4-8b76-936fc21bd2a2.png)

![name](https://cloud.githubusercontent.com/assets/8191145/6501114/52b3b830-c33a-11e4-9dad-5f6f832b66a5.png)


##### 5. Blacklist Emails

These are email addresses which are barred by the Administrator from creating any ticket.

Enter email id's to be blacklisted and blocked by Helpdesk as in screenshot below. Each  mail id should be in separate line and commas should not be used.

![blacklist_emails](https://cloud.githubusercontent.com/assets/8191145/6487587/1f9e311e-c2b8-11e4-82ab-00a51d017331.png)

