## rtMedia Membership Addon


rtMedia Membership plugin allows you to easily manage Membership-based sites using rtMedia plugin.

Make sure that [rtMedia](https://wordpress.org/plugins/buddypress-media/) plugin is installed as it is a prerequisite to use rtMedia Membership.

### Installation


Perform the following steps to get your Membership add-on running:

  1.  Download rtMedia Membership plugin from the **My Account** Section

  2. Go to your Dashboard and navigate to `Plugins > Add New > Upload `.
Select the `rtmedia-membership.zip`  file from your computer and click upload.

  3.  Click **Install Now** to install the plugin. Then, click the **Activate Plugin** link, to activate the plugin.


### Settings (Site Admin)

As a site admin, you can use a range of settings to help you organize memberships to your website.

**Membership**


![1 membership-settings](https://cloud.githubusercontent.com/assets/1140051/7650696/a9723994-fb16-11e4-9361-b6c8b7418440.png)

  1. Go to   `rtMedia > Settings > Membership`.

  2. Click the link, as shown above, to import user data in membership database tables.


**Import Plans and Calculate Media Data**

![2 rtmedia-membership-import-user-media-data](https://cloud.githubusercontent.com/assets/1140051/7650716/e6bf804a-fb16-11e4-8926-81c303225bf3.png)

  1. Choose either **Yes** or **No** to calculate previously uploaded user data or not.

  2. Click **Start** to begin the import.

  3. After import , click the link as shown below, to navigate to Membership Settings.

![3 jump-to-rtmedia-membership-settings](https://cloud.githubusercontent.com/assets/1140051/7650733/0d494020-fb17-11e4-970c-b0206d64906a.png)

**File and Upload Limits**

![4 file-and-upload-settings](https://cloud.githubusercontent.com/assets/1140051/7650749/45054090-fb17-11e4-8bd9-28a7def70add.png)

  1. General Settings for Membership plugin

  2. A value of **-1** means Unlimited and **0** means No Access.

  3. Set **Upload Limit** in MB on Daily, Weekly, Monthly, Yearly and Lifetime basis. These upload limits can be set differently for each Membership plan.

  4. Similarly, set **File Limits** for each membership plan.

  5. Manage plans will take you to another page that allows you to add new plans or modify existing ones. [Documentation](#ManagePlans)

  6. Click the link to recalculate the number of files and the upload data used by each user.

  7. After all the changes are made, apply them by clicking **Save Settings.**


**Payment Settings**

![5 payment-settings](https://cloud.githubusercontent.com/assets/1140051/7650774/6bec5ac2-fb17-11e4-994f-793544d3eb6d.png)


1. Payment Settings for Membership plugin

2. Option for selecting **PayPal Live** for live PayPal account or **PayPal Sandbox** for PayPal testing account.

3. Enter your PayPal account's email address here.

4. Select Membership Table Page from the listing. **Note: [rtmedia_membership] shortcode must be on this page**. When membership plugin is activated , this page will be created automatically.

5. Select **Transaction Success Page** from the listing. **Note: [rtmedia_membership_receipt] shortcode must be on this page**. When membership plugin is activated , this page will be created automatically.

6. Select **Transaction Failure Page** from the listing. When membership plugin is activated , this page will be created automatically.

7. Set this IPN URL to your Notification URL in your PayPal Profile Settings. To know how to set your Notification URL, click [here](https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNSetup/#id089EG030E5Z).

8. The values of **-1 = Not for Sale** and **0 = Free**. When set to **-1** it means that the plan is NOT for sale. The subscription button will be disabled for the plan. When set to **0**, the plan is free and the user will be subscribed without being redirected to pay with Paypal.

9. Currency is in **USD**.

10. You can set Prices in USD on **Daily, Weekly, Monthly, Yearly and Lifetime** basis. These prices can be set differently for each Membership plan.

11. Click **Save Settings** to save and apply the settings.


**Recalculate user data**


Recalculate user data forcefully if you want to include previously uploaded media data for upload quota calculation.

**Example:** If you set media file count to 10 on a daily basis and a user has already uploaded 9 media files and now subscribes to that daily plan, then the user will only be able to upload 1 media file today.

![6 force-importer](https://cloud.githubusercontent.com/assets/1140051/7650806/b257ce56-fb17-11e4-9dc1-1edc79f12c08.png)

### Manage Plans


Click **Manage Plans** on the top-right corner to add plans or modify existing ones.

![7 rtmedia-membership-manage-plans](https://cloud.githubusercontent.com/assets/1140051/7650816/c944306e-fb17-11e4-88ef-df3de8bae92e.png)

Add a plan according to the following steps.

  1. Enter a name for the plan.

  2. Add a description of the Membership plan.

  3. Select a color for the plan. If you prefer, you can add CSS color code directly.

  4. Click **Add New Plan** to create the plan. The plan is then displayed on the list at the right.


### Update Plans

![8 rtmedia-membership-update-plans](https://cloud.githubusercontent.com/assets/1140051/7650824/e00249ee-fb17-11e4-921c-17bc50516368.png)

  1. You might want to modify the default plans that we have. You can check for additional options by clicking **Screen Options.**

  2. Click **Edit** or **Quick Edit** to make changes to the user plans. Clicking **Delete** will remove the user plan.

### Edit Plan

![9 edit-plan](https://cloud.githubusercontent.com/assets/1140051/7650829/efea0fea-fb17-11e4-9ecb-5e0fbcd2a236.png)

1. Edit Plan

2. Enter any **Name** for the plan. Plan names should be unique.

3. Enter any **Description** for the plan.

4. Select a **Color** for the plan.

5. Set the **Upload Limit**. Remember **-1** means Unlimited and **0** means No Access.

6. Set the **File Count**. Remember **-1** means Unlimited and **0** means No Access.

7. Enter the plan **Prices**. Remember **-1** means the plan is NOT for sale and **0** means Free.

8. Click **Update** to save and apply the changes.


### View Members Plan & Limit

![10 view-plans-and-limit](https://cloud.githubusercontent.com/assets/1140051/7650838/052b4752-fb18-11e4-85c7-92225dc8747c.png)


  1. Manage membership for individual users by looking them up under **Users** on the WordPress Dashboard.

  2. View plans & limits subscribed by the members.


### View Plan Details of User


![11 view-plan-details](https://cloud.githubusercontent.com/assets/1140051/7650843/1792cd5c-fb18-11e4-9b8e-8ea32ccbb904.png)

Site Admins can view the plan details of other members and their own.


### Edit Members Plan & Limit

![selection_099](https://cloud.githubusercontent.com/assets/1140051/7651116/8e53b1c0-fb1a-11e4-8bfa-142a221633f2.png)


  1. Manage membership for individual users by looking them up under **Users** on the WordPress Dashboard.

  2. Select **Users** of which plan & limit you want to change.

  3. You can **Add Users To** or **Remove Users From** different plan & limit.

  4. Select **Plan**

  5. Select **Limit**

  6. Click **Update**


### Edit Plan Details of User


[![edit plan limit of user](https://cloud.githubusercontent.com/assets/7807348/6823754/333b5cce-d311-11e4-96b5-c58beaad031c.png)](https://cloud.githubusercontent.com/assets/7807348/6823754/333b5cce-d311-11e4-96b5-c58beaad031c.png)


  1. Select **Plan**

  2. Select **Limit**

  3. Enter **Upload Limit** value in **MB**

  4. Enter **No. of Files**

  5. If you want to allow **Plan's Default** value then you need to check this checkbox.

  6. You can go to **Plan Listing Page** from here.


## Features (Users)


### Membership Plans

[![membership plans table](https://cloud.githubusercontent.com/assets/8191145/5340005/53c93fd6-7f0d-11e4-8f1f-19cead6567ce.png)](https://cloud.githubusercontent.com/assets/8191145/5340005/53c93fd6-7f0d-11e4-8f1f-19cead6567ce.png)

Click the **Membership** option to display all the available Membership Plans.


### PayPal Redirection Page

[![paypal redirection page](https://cloud.githubusercontent.com/assets/8191145/5340056/0ff13b6e-7f0e-11e4-9dc5-af81a99d5b6c.png)](https://cloud.githubusercontent.com/assets/8191145/5340056/0ff13b6e-7f0e-11e4-9dc5-af81a99d5b6c.png)

## PayPal

### Single Payment (Lifetime)


#### **PayPal Login Screen**

[![paypal login](https://cloud.githubusercontent.com/assets/8191145/5352837/426dba64-7f94-11e4-9122-a50b5f779ff9.png)](https://cloud.githubusercontent.com/assets/8191145/5352837/426dba64-7f94-11e4-9122-a50b5f779ff9.png)

Users will see a screen like the one shown above and  need to login to PayPal to proceed.


#### **PayPal Payment**

[![paypal confirmation](https://cloud.githubusercontent.com/assets/8191145/5352861/a0ce486c-7f94-11e4-9aa8-29d389aae381.png)](https://cloud.githubusercontent.com/assets/8191145/5352861/a0ce486c-7f94-11e4-9aa8-29d389aae381.png)



#### **Payment Successful**

After succesful payment , users will see  a similar image as below :

![payment done](https://cloud.githubusercontent.com/assets/8191145/5352906/291bc5fa-7f95-11e4-944f-daff0180774a.png)((https://cloud.githubusercontent.com/assets/8191145/5352906/291bc5fa-7f95-11e4-944f-daff0180774a.png)


### Subscription Payment (Daily, Weekly, Monthly, Yearly)


#### **PayPal Login Screen**

![paypal login subscription](https://cloud.githubusercontent.com/assets/8191145/5352921/6adb033e-7f95-11e4-9803-170bc8dbfcbd.png)](https://cloud.githubusercontent.com/assets/8191145/5352921/6adb033e-7f95-11e4-9803-170bc8dbfcbd.png)

#### **PayPal Payment**


[![paypal payment subscription](https://cloud.githubusercontent.com/assets/8191145/5352952/d797c0b6-7f95-11e4-86be-556c5a881cfc.png)](https://cloud.githubusercontent.com/assets/8191145/5352952/d797c0b6-7f95-11e4-86be-556c5a881cfc.png)

#### **Payment Successful**


![payment successful subscription](https://cloud.githubusercontent.com/assets/8191145/5352969/13a17746-7f96-11e4-91fc-9065729f6d80.png)



### Transaction Successful Message

[![transaction success message after subscription](https://cloud.githubusercontent.com/assets/8191145/5340222/33dfdf7e-7f10-11e4-9b5e-f2f3976df7b6.png)](https://cloud.githubusercontent.com/assets/8191145/5340222/33dfdf7e-7f10-11e4-9b5e-f2f3976df7b6.png)

### Transaction Failure Message

[![transaction failure message](https://cloud.githubusercontent.com/assets/8191145/5340240/6aeed038-7f10-11e4-9f3d-b25a3e658404.png)](https://cloud.githubusercontent.com/assets/8191145/5340222/33dfdf7e-7f10-11e4-9b5e-f2f3976df7b6.png)

## Membership Plan After Subscription

[![membership plans subscribed](https://cloud.githubusercontent.com/assets/8191145/5340255/8a72c658-7f10-11e4-8daa-a8164d6f24a8.png)](https://cloud.githubusercontent.com/assets/8191145/5340255/8a72c658-7f10-11e4-8daa-a8164d6f24a8.png)

  1. Click the **Membership** option.

  2. **Subscribed** text will be shown for the members of that plan.


## Plan Values on BuddyPress Profiles

Subscribed plan limits will be displayed in Members Profile Pages.

[![plan values bp profiles](https://cloud.githubusercontent.com/assets/8191145/5340328/7069f0f0-7f11-11e4-95f3-d4c4738d28c6.png)](https://cloud.githubusercontent.com/assets/8191145/5340328/7069f0f0-7f11-11e4-95f3-d4c4738d28c6.png)

## Messages Displayed to End Users

There are a number of messages that are displayed to end users. Here are some examples.


###  Message in Activity When Not Subscribed to Plan

[![not subscribed](https://cloud.githubusercontent.com/assets/8191145/5340491/3ea06d18-7f13-11e4-88d6-7170cc9a56ab.png)](https://cloud.githubusercontent.com/assets/8191145/5340491/3ea06d18-7f13-11e4-88d6-7170cc9a56ab.png)


###  Message in Media Gallery When Not Subscribed to Plan

![not-subscribed-media-gallery](https://cloud.githubusercontent.com/assets/1140051/7650933/ed90de26-fb18-11e4-806c-dc1487fc12d8.png)


###  Message in WordPress Comment When Not Subscribed to Plan

![not-subscribed-wp-comments](https://cloud.githubusercontent.com/assets/1140051/7650944/05581204-fb19-11e4-92dc-7db8770e54ef.png)

###  Message in Forums When Not Subscribed to Plan

![not-subscribed-message-in-forum](https://cloud.githubusercontent.com/assets/1140051/7650959/1866900a-fb19-11e4-96ea-0f630452f67d.png)


### File Count Limits Surpassed in Activity


When you set the limits, users will not be allowed to upload media beyond that limit.

![file-count-activity](https://cloud.githubusercontent.com/assets/1140051/7651003/8d75ff84-fb19-11e4-8d4d-365a7e30862f.png)


### File Count Limits Surpassed in Media Gallery

![file-count-media-gallery](https://cloud.githubusercontent.com/assets/1140051/7650998/7e8c6206-fb19-11e4-8c05-aa8aa55667ce.png)

### File Size Limits Surpassed in Activity

Files exceeding the upload size limit are rejected.

![file-size-surpassed-activity](https://cloud.githubusercontent.com/assets/1140051/7650979/42f5fe6e-fb19-11e4-8a87-7ded8977a6b3.png)

### File Size Limits Surpassed in Media Gallery

![file-size-surpassed-media-gallery](https://cloud.githubusercontent.com/assets/1140051/7650988/55e90d54-fb19-11e4-99d6-4ab2c4a94af7.png)


## Displayed Messages to End Users (rtMedia Pro)


These messages are only shown to users using rtMedia Pro.

###  Message in WordPress Comment when not Subscribed to Plan

![file-size-surpassed-wp-comment](https://cloud.githubusercontent.com/assets/1140051/7651019/b7b3864a-fb19-11e4-96eb-c35f80fd117f.png)


###  Message in Forums when not Subscribed to Plan

![not-subscribed-message-in-forum](https://cloud.githubusercontent.com/assets/1140051/7651030/d2cf3104-fb19-11e4-8f75-ffe306f314ac.png)

### File Size Limits Surpassed in WP Comment Attachment


[![file size surpassed wp comment](https://cloud.githubusercontent.com/assets/8191145/5340670/4ee66f90-7f15-11e4-8471-99a7d586222b.PNG)](https://cloud.githubusercontent.com/assets/8191145/5340670/4ee66f90-7f15-11e4-8471-99a7d586222b.PNG)


### File Size Limits Surpassed in Forum Topic and Reply Attachments


[![file size surpassed forum](https://cloud.githubusercontent.com/assets/8191145/5340675/61f1e876-7f15-11e4-993e-5acc36cb6850.PNG)](https://cloud.githubusercontent.com/assets/8191145/5340675/61f1e876-7f15-11e4-993e-5acc36cb6850.PNG)



### File Count Limits Surpassed in Forums Topic and Reply Attachment

[![filecountforums](https://cloud.githubusercontent.com/assets/8191145/5340597/af27a28a-7f14-11e4-9916-84c8b4e7d339.PNG)](https://cloud.githubusercontent.com/assets/8191145/5340597/af27a28a-7f14-11e4-9916-84c8b4e7d339.PNG)


### File Count Limits Surpassed in WP Comment Attachment

[![filecountwpcomment](https://cloud.githubusercontent.com/assets/8191145/5340615/dc8bcaee-7f14-11e4-9131-ad3969b3d28c.PNG)](https://cloud.githubusercontent.com/assets/8191145/5340615/dc8bcaee-7f14-11e4-9131-ad3969b3d28c.PNG)
