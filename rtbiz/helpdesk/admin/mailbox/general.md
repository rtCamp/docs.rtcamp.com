# General Settings

![settings_general](https://cloud.githubusercontent.com/assets/8191145/7652193/846b27da-fb27-11e4-8db0-0017933c5625.png)

### 1. Support Page

i) The support page is used for product support. Customers enter their queries by filling the support form. Their query becomes a Helpdesk ticket.

ii) The dropdown shows the helpdesk support form chosen during the setup. It will be blank if nothing was chosen during the Set up wizard. (Refer[ 1.1 Setup Wizard](http://docs.rtcamp.com/rtbiz/helpdesk/admin/setup.html#1-support-page) for more details)

### Steps to add a support page

To add a support page you need to follow the steps given below:

**1. Pages:**

Click on Pages in WordPress dashboard.

**2. Add New Page:**

Click Add New button to add a new page

**3. Page title:**

Enter the desired title for the new page

**4. Shortcode:**

Add shortcode ```[rt_hd_support_form]``` in the content area

**5. Publish page:**

Click on Publish/Update when you are done.



**6. Refresh Helpdesk Settings**

Refresh the settings area. The newly created support page will be populated in the drop-down. You can select this page which then will be used by your customers to send support requests.

![select_support_form](https://cloud.githubusercontent.com/assets/9676513/6480262/f5026802-c277-11e4-81e1-62145daf208e.png)

<br/>
<br/>



## Support Form

<br/>
The support form looks like the screenshot shown below
<br/><br/>

![support](http://git.rtcamp.com/rtbiz/rtbiz/uploads/efe7fef540e97417beaa54de635c5019/support.png)



**1. Title**

Customers need to enter the title or subject of their query here

**2. Choose Product**

Customers have to chose the Product from this dropdown for which they want to enquire or raise an issue.

**3. Email**

Customers have to enter their email address here. They can also add/subscribe another people to the ticket by clicking <u>**Add CC**</u> link.

**4. Description**

Customers have to enter detailed description for their query here.

**5. Preview**

Customers can preview the content they added in the description above by clicking Preview.

**6. Markdown and HTML Support**

Customers can use Markdown syntax along with html tags in the Description box.

Customers can use these HTML tags - a, abbr, acronym, b, blockquote, cite, code, del, em, i, q, s, strike and strong and Markdown Syntax. You can learn more about markdown from [here](https://help.github.com/articles/markdown-basics/) or from [here](https://guides.github.com/features/mastering-markdown/).

**7. Adult Content**

Customers can mark the ticket as an adult ticket by checking Adult Content checkbox. This helps in filtering out this ticket and only show it to the appropriate staff members and make the adult ticket hidden from other staff members.(Refer [7.5 Advanced Settings](http://docs.rtcamp.com/rtbiz/helpdesk/admin/mailbox/advanced_settings.html#3-adult-content-filter) for more details)

**8. Attach Files**

This is used to add attachments.

**9. Submit**

Customers need to click on this button to submit their query.



### 2. Connected Store
<br/>
You can select leading eCommerce plugins like WooCommerce and Easy Digital Downloads with rtBiz Helpdesk.

Products from these plugins will be synced and shown in the Products area in the backend and Choose Product dropdown in the support form page.
<br/>
<br/>
![connected_store](https://cloud.githubusercontent.com/assets/8191145/7654216/fd0741ea-fb38-11e4-8c87-8c4b54d23ab5.png)


### 3. Default Assignee

i. The default assignee is the staff member to whom all the newly created tickets are assigned to.

ii. By default, the WordPress admin is selected as the assignee.

iii. The dropdown is populated with all the Staff members who have access to helpdesk. To change the current assignee you can select the desired staff member from the options.

![assignee_dropdown](https://cloud.githubusercontent.com/assets/9676513/6483474/a3a8ba5e-c297-11e4-8ebe-6a1b8cfbae97.png)

iv. **Adding default assignees to Products**

There is a provision to add different default assignees for different products as shown in the screenshots below (Refer section 6 [Products](http://docs.rtcamp.com/rtbiz/helpdesk/admin/offerings/index.html) for more details)

<br/>

![add_assignee_via_offerings](https://cloud.githubusercontent.com/assets/8191145/6752439/89218252-cf34-11e4-9673-0ffe0403c49a.png)
<br/>
<br/>
<br/><br/>
![offerings](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/ffec50611e/offerings.png)

<br/>


### 5. Enable Unique Hash URLs for Tickets

i. Enable this option to generate unique Hash URLs for new tickets.

ii. These links will be used to access tickets in web browser.

iii. These unique URLs will be sent in all emails of Helpdesk.

iv. Tickets can be accessed from the default WordPress permalinks as well.

** Note: **

Please flush the permalinks after enabling this option. You can do that from WordPress Settings -> Permalinks -> Permalinks Settings



