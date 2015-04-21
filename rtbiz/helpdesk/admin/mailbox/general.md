# General Settings


![general_settings_tab](https://cloud.githubusercontent.com/assets/8191145/6751860/19317bbe-cf2f-11e4-8c86-af030c7ff1bb.png)


##### 1. Menu Label
Text field for adding label. This label will be used for in the Helpdesk menu.

##### 2. Logo

i. Logo is used for all menu, submenu, post types icons in Helpdesk.

ii. Upload any logo using the WordPress uploader, preferably of size of 16x16.

iii. The default logo is at present at [Your Site Name]/wp-content/plugins/rtbiz-helpdesk/app/assets/img/hd-16X16.png

##### 3. Default Assignee

i. The default assignee is the staff member to whom all the newly created tickets are assigned to.

ii. By default, the WordPress admin is selected as the assignee.

iii. The dropdown is populated with all the Staff members who belongs to department that has access to helpdesk. Select the desired Staff member.

![assignee_dropdown](https://cloud.githubusercontent.com/assets/9676513/6483474/a3a8ba5e-c297-11e4-8ebe-6a1b8cfbae97.png)

iv. A department can be given access to Helpdesk from rtBiz access control settings.

v. There is a provision to add different Default assignees for different offerings (products or services) via rtBiz Offerings.

![add_assignee_via_offerings](https://cloud.githubusercontent.com/assets/8191145/6752439/89218252-cf34-11e4-9673-0ffe0403c49a.png)

![offerings](http://git.rtcamp.com/uploads/rtbiz/rtbiz-helpdesk/ffec50611e/offerings.png)
##### 4. Support Form

Setup Helpdesk support form using shortcode and configure as per steps below.

i. The dropdown lists all the current pages present in the Wordpress system.

![support_form_default](https://cloud.githubusercontent.com/assets/9676513/6480243/ba65605a-c277-11e4-9ce6-c427e001490e.png)


![support_form_page](https://cloud.githubusercontent.com/assets/9676513/6480244/ba8579f8-c277-11e4-86c3-bb96e69b36e8.png)

ii. Create a support page and add [rt_hd_support_form] shortcode in the content area.


![create_support_page](https://cloud.githubusercontent.com/assets/9676513/6480319/89ce59e6-c278-11e4-8beb-b37be40e7880.png)

iii. Refresh the settings area. The newly created support page will be populated in the drop-down. Select this page. This support page will now be used by customers to send support requests.

![select_support_form](https://cloud.githubusercontent.com/assets/9676513/6480262/f5026802-c277-11e4-81e1-62145daf208e.png)


iv) The support form looks similar to the image below

![support_form](https://cloud.githubusercontent.com/assets/8191145/6779592/a8187b42-d183-11e4-9cfd-807f3d16bbd2.png)




##### 5. Enable Unique Hash URLs for Tickets

i. Enable this option to generate unique Hash URL for new tickets.

ii. These links will be used to access tickets in web browser.

iii. These unique URLs will be sent in all emails of Helpdesk.

iv. Tickets can be accessed from the default WordPress permalinks as well.

** Note: **

Please flush the permalinks after enabling this option.



