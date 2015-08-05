# Setup Wizard

After installing and activating Helpdesk, the Setup Wizard will guide you to set up and customize the Helpdesk system.

You will see the screen as below:

![1_support_page](https://cloud.githubusercontent.com/assets/8191145/7609097/36a138b4-f98d-11e4-876a-4b68adff359f.png)

## Installation Steps

### 1. Support Page

Here you need to select a WordPress Page to be used as a support page.

####i) Select from existing pages

From the dropdown, you can select any page already there in your site to be used as the support page.

![support_page](https://cloud.githubusercontent.com/assets/8191145/7454947/02883148-f296-11e4-9302-0f0feadd2bee.png)


####ii) Create a new Support Page

You can create a new support form page by clicking on 'Create New Page' and enter the name of the page in the textbox and click Next button.

![installer_newsupportpage](https://cloud.githubusercontent.com/assets/8191145/8981424/d3c86ce0-36d5-11e5-8f67-e0decd45c364.png)


### 2. Connect Store

####i. Connect WooCommerce and EDD Products

In this step, you can connect your WooCommerce or Easy Digital Download Products (EDD) store with Helpdesk.

![2_connect_store](https://cloud.githubusercontent.com/assets/8191145/7609244/abfc51ec-f98e-11e4-8572-4f0f31b41477.png)

####ii. Create Custom Products
You can also create custom products by checking the 'Custom' checkbox and entering the name of the product as shown in the screenshot below.

![custom_product](https://cloud.githubusercontent.com/assets/8191145/8981550/e668946e-36d6-11e5-9f02-420f65d96c0a.png)


### 3. Setup Your Team

You can setup your support team in three ways

####i) Search and add users

Search and add WordPress users as shown in the screenshot below
![3_setup_your_team](https://cloud.githubusercontent.com/assets/8191145/7610069/69c8de68-f997-11e4-8780-68f9c92558c7.png)

####ii) Add all users from domain

You can use this option if you want add all the WordPress users who have similar domain name.

####iii) Add all WordPress users

Using this option you can import all the WordPress users into Helpdesk Staff, in a single click.
You can assign Helpdesk roles to all these new staff members from the options.
#### Helpdesk Roles
The Helpdesk roles are like WordPress roles with some differences (For details you may refer to [Staff and Roles](http://docs.rtcamp.com/rtbiz/helpdesk/admin/staff_and_roles/index.html))

##### **Helpdesk Admin**
Can manage all tickets and Helpdesk settings.

##### **Helpdesk Editor**

Can manage all the tickets. No access to settings.
##### **Helpdesk Author**

 Can manage only the tickets assigned to them. No access to settings.
##### **No Role**

 No access to Helpdesk backend. Access only to the front end of ticket to which they are assigned to.

![3_2_setup_your_team](https://cloud.githubusercontent.com/assets/8191145/7610686/57f6ff58-f99c-11e4-83b1-97bf282a3e37.png)

### 4. Set Assignee

An assignee is a staff member to whom the product tickets will get assigned.
You can set ticket assignees for each of the products from dropdowns as shown in the screenshot below

![set_assignee](https://cloud.githubusercontent.com/assets/8191145/8982495/961fd36a-36df-11e5-87bc-cd86b5d40789.png)



### 5. Mailbox Setup

Mailbox is required by Helpdesk for:
* Sending emails/ notifications to the customers and staff.
* Creating tickets directly by sending emails to the set mailbox.

####i) Add a Mailbox

You can set Gmail, Yahoo, Outlook/Hotmail and other custom accounts as mailboxes as shown in screenshot below

![5_mailbox_setup](https://cloud.githubusercontent.com/assets/8191145/7610579/93cb11f0-f99b-11e4-911f-ba0ee3348e19.png)

####ii) Set Assignee and Product for each Mailbox

For every mailbox you can choose the products and assigned staff members from the dropdowns as shown in the screenshot below

* **Select Folder** - Click Select Folder button next to a mailbox.

* **Select Products, Assignee** - Every ticket created using this mailbox will be for the product chosen in Select Product dropdown and assigned to the staff member chosen in Select Assignee dropdown.

* **Save** - Click Save button to save the values. You have the option to modify them later in Mail Setup settings.

![mailbox setup](https://cloud.githubusercontent.com/assets/8191145/8981198/fd8c427e-36d3-11e5-95af-eb74e92cd58a.png)



####iii) Outgoing Mail Setup

Click on Next and add a name for the Outgoing Emails and select the mailbox from the mailboxes created by you in the previous step.

![5 1_mailbox_setup](https://cloud.githubusercontent.com/assets/8191145/7610587/98bd740a-f99b-11e4-8d36-df29e3d8e24f.png)

##### Error Message
If you receive a error message while testing connection, you should do the following:
* Check username and password
* Enable IMAP for your mailbox (Gmail - [Link](https://support.google.com/mail/troubleshooter/1668960), Outlook - Link, Yahoo - [Link](https://help.yahoo.com/kb/mobile/imap%C2%A0settings-yahoo-mail-sln4075.html) )
* Check this link if your Google account does not get connected: https://support.google.com/mail/answer/78754

### 6. Finish

Click finish to complete the setup.

To update any settings, you can visit the settings section from the Helpdesk menu.

![6_finish](https://cloud.githubusercontent.com/assets/8191145/7610584/98935512-f99b-11e4-8d8b-e668b51eb66e.png)


