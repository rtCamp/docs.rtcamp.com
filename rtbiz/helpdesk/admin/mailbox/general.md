# General Settings

![settings_general](https://cloud.githubusercontent.com/assets/8191145/7652193/846b27da-fb27-11e4-8db0-0017933c5625.png)

### 1. Support Page

i) The support page is used for product support. Customers enter their queries by filling the support form. Their query becomes a Helpdesk ticket.

ii) The dropdown shows the helpdesk support form chosen during the setup. (Refer 1.1 Setup Wizard for more details)

#### Using different support Page
i) To use some other support page you need to follow the steps given below:

**a) Pages:** Click on Pages in WordPress dashboard.

**b) Add New Page:** Click Add New button to add a new page

**c) Page title:** Enter the desired title for the new page

**d) Shortcode:** Add shortcode ```[rt_hd_support_form]``` in the content area

**e) Publish page:** Click on Publish/Update when you are done.

![new_supportpage](https://cloud.githubusercontent.com/assets/8191145/7653966/36c134ba-fb37-11e4-9b43-a328d13e3ad8.png)

##### Refresh Helpdesk Settings
Refresh the settings area. The newly created support page will be populated in the drop-down. You can select this page which then will be used by your customers to send support requests.

![select_support_form](https://cloud.githubusercontent.com/assets/9676513/6480262/f5026802-c277-11e4-81e1-62145daf208e.png)

<br/>
<br/>



## Support Form
<br/>
The support form looks like the screenshot shown below
<br/><br/>

![support](http://git.rtcamp.com/rtbiz/rtbiz/uploads/efe7fef540e97417beaa54de635c5019/support.png)



### 2. Connected Store

You can select leading eCommerce plugins like WooCommerce and Easy Digital Downloads with rtBiz Helpdesk.

Products from these plugins will be synced and shown in the Products area in the backend and Choose Product dropdown in the support form page.

![connected_store](https://cloud.githubusercontent.com/assets/8191145/7654216/fd0741ea-fb38-11e4-8c87-8c4b54d23ab5.png)


### 3. Default Assignee

i. The default assignee is the staff member to whom all the newly created tickets are assigned to.

ii. By default, the WordPress admin is selected as the assignee.

iii. The dropdown is populated with all the Staff members who have access to helpdesk. To change the current assignee you can select the desired staff member from the options.

![assignee_dropdown](https://cloud.githubusercontent.com/assets/9676513/6483474/a3a8ba5e-c297-11e4-8ebe-6a1b8cfbae97.png)

iv. There is a provision to add different default assignees for different products as shown in the screenshots below (Refer section 6 for more details)

![add_assignee_via_offerings](https://cloud.githubusercontent.com/assets/8191145/6752439/89218252-cf34-11e4-9673-0ffe0403c49a.png)
<br/>
<br/>
<br/>
![offerings](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/ffec50611e/offerings.png)

<br/>


### 5. Enable Unique Hash URLs for Tickets

i. Enable this option to generate unique Hash URLs for new tickets.

ii. These links will be used to access tickets in web browser.

iii. These unique URLs will be sent in all emails of Helpdesk.

iv. Tickets can be accessed from the default WordPress permalinks as well.

** Note: **

Please flush the permalinks after enabling this option. You can do that from WordPress Settings -> Permalinks -> Permalinks Settings



