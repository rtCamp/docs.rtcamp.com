---
title: rtMedia Membership Addon
---

rtMedia Membership plugin allows you to easily manage Membership-based sites using [rtMedia](https://wordpress.org/plugins/buddypress-media/).

Make sure that [rtMedia](https://wordpress.org/plugins/buddypress-media/) plugin is installed which is necessary to be able to use rtMedia Membership.


## Installation


Perform the following steps to get your Membership add-on running:



  1.  Download rtMedia Membership plugin from the **My Account** Section

	
  2. Go to your Dashboard and navigate to `Plugins > Add New > Upload `.
Select the `rtmedia-membership.zip`  file from your computer and click upload.

	
  3.  Click **Install Now** to install the plugin. Then, click the **Activate Plugin** link, to activate the plugin.


## Settings (Site Admin)


As a site admin, you can use a range of settings to help you organize memberships to your website.


### Membership


![membership settings](https://cloud.githubusercontent.com/assets/8191145/5340754/25ebe114-7f16-11e4-920b-3a256b445d91.PNG)




	
  1. Go to   `rtMedia > Settings > Membership`.

	
  2. Click the link, as shown above, to import user data in membership database tables.


### Import Plans and Calculate Media Data


![rtmedia-membership-import-user-media-data](https://cloud.githubusercontent.com/assets/8191145/5339212/8a77ba62-7f03-11e4-8df1-62a536911c5d.png)



	
  1. You can choose either **Yes** or **No** to calculate previously uploaded user data or not.

	
  2. Click **Start** to begin the import.

	
  3. After import , click the link as shown below, to navigate to Membership Settings.


[![Jump to rtMedia Membership Settings](http://docs.rtcamp.com/wp-content/uploads/2014/10/6-Jump-to-rtMedia-Membership-Settings-1024x389.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/6-Jump-to-rtMedia-Membership-Settings.png)


### File and Upload Limits


![file and upload settings](https://cloud.githubusercontent.com/assets/8191145/5339259/68513886-7f04-11e4-80eb-72085d04c120.png)



  1. General Settings for Membership plugin 
  
  2. A value of **-1** means Unlimited and **0** means No Access.

	
  3. Set **Upload Limit** in MB on Daily, Weekly, Monthly, Yearly and Lifetime basis. These upload limits can be set differently for each Membership plan.

	
  4. Similarly, set **File Limits** for each membership plan.

	
  5. Manage plans will take you to another page that allows you to add new plans or modify existing ones. (*Documentation*)

	
  6. Click the link to recalculate the number of files and the upload data used by each user.

	
  7. After all the changes are made, apply them by clicking **Save Settings.**
  

### Payment Settings
![payment settings](https://cloud.githubusercontent.com/assets/8191145/5339349/cdd4d572-7f05-11e4-88df-93d961195daf.png)

1. Payment Settings for Membership plugin

2. Option for selecting **PayPal Live** for live PayPal account or **PayPal Sandbox** for PayPal testing account.

3. You must have to enter your PayPal account's email address here.

4. You can select Membership Table Page from the listing. **Please Note: [rtmedia_membership] shortcode must be on this page.** When membership plugin is activated , this page will be created automatically.

5. You can select **Transaction Success Page** from the listing. **Please Note: [rtmedia_membership_receipt] shortcode must be on this page.** When membership plugin is activated , this page will be created automatically.

6. You can select **Transaction Failure Page** from the listing. When membership plugin is activated , this page will be created automatically.

7. You have to set this IPN URL to your Notification URL in your PayPal Profile Settings. To know how to set your Notification URL, please click [here](https://developer.paypal.com/docs/classic/ipn/integration-guide/IPNSetup/#id089EG030E5Z).

8. The values of **-1 = Do not want to set price** and **0 = Free**.

9. Currency is in **USD**.

10. You can set Price in USD on **Daily, Weekly, Monthly, Yearly and Lifetime** basis. These price can be set differently for each Membership plan.

11. After all the changes are made, apply them by clicking on **Save Settings**.

  


### Recalculate user data


Recalculate user data forcefully if you want to include previously uploaded media data for upload quota calculation.

**Example:** If you set media file count to 10/daily basis and a user has already uploaded 9 media files and now he subscribes to that daily plan then he will only be able to upload 1 media file today.

[![force-importer](http://docs.rtcamp.com/wp-content/uploads/2014/10/force-importer-1024x244.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/force-importer.png)


### Manage Plans


Click **Manage Plans** on the top-right corner to add plans or modify existing ones.

[![rtMedia-Membership-Manage-Plans](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtMedia-Membership-Manage-Plans.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtMedia-Membership-Manage-Plans.png)

Add a plan according to the following steps.


  1. Enter a name for the plan.

	
  2. Add a description of the Membership plan.

	
  3. Select a color for the plan. If you prefer, you can add CSS color code directly.

	
  4. Click **Add New Plan** to create the plan. The plan is then displayed on the list at the right.


### Update Plans


[![rtmedia-membership-update-plans](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-update-plans.png)](http://docs.rtcamp.com/wp-content/uploads/2014/10/rtmedia-membership-update-plans.png)

	
  1. You might want to modify the default plans that we have. You can check for additional options by clicking **Screen Options.**

	
  2. Click **Edit** or **Quick Edit** to make changes to the user plans. Clicking **Delete** will remove the user plan.

### Edit Plan

![edit plan](https://cloud.githubusercontent.com/assets/8191145/5339628/ed357658-7f08-11e4-8e39-9f37e1047c28.png)

1. Edit Plan   

2. You can edit **Name** of plan.

3. You can edit **Description** of plan.

4. You can edit **Color** of the plan.

5. You can edit **Upload Limit**.

6. You can edit **File Count**.

7. You can edit **Price**.

8. After all the changes are made, apply them by clicking on **Update**.


### View Members Plan


![view plans](https://cloud.githubusercontent.com/assets/8191145/5339679/a7e30d8a-7f09-11e4-96bb-119bd289aca6.png)


  1. You can manage membership for individual users by looking them up under **Users** on the WordPress Dashboard.

	
  2. You can view plans subscribed by the members.


### View Plan Details


![view plan details](https://cloud.githubusercontent.com/assets/8191145/5339733/4c08a4ce-7f0a-11e4-8ddf-4e9f67366f29.png)

Site Admins can view the plan details of other members and their own.

## Features (Users)




### Membership Plans

![membership plans table](https://cloud.githubusercontent.com/assets/8191145/5340005/53c93fd6-7f0d-11e4-8f1f-19cead6567ce.png)

  1. Clicking on **Membership Menu** will display all the available Membership Plans.


### PayPal Redirection Page

![paypal redirection page](https://cloud.githubusercontent.com/assets/8191145/5340056/0ff13b6e-7f0e-11e4-9dc5-af81a99d5b6c.png)

## PayPal 

### Single Payment (Lifetime)

#### PayPal Login Screen

![paypal login](https://cloud.githubusercontent.com/assets/8191145/5352837/426dba64-7f94-11e4-9122-a50b5f779ff9.png)

Users will see screen like above and  need to login to PayPal to proceed

#### PayPal Payment

![paypal confirmation](https://cloud.githubusercontent.com/assets/8191145/5352861/a0ce486c-7f94-11e4-9aa8-29d389aae381.png)


#### Payment Successful 

After succesful payment , users will see  a similar image as below

![payment done](https://cloud.githubusercontent.com/assets/8191145/5352906/291bc5fa-7f95-11e4-944f-daff0180774a.png)


### Subscription Payment (Daily, Weekly, Monthly, Yearly)

#### PayPal Login Screen

![paypal login subscription](https://cloud.githubusercontent.com/assets/8191145/5352921/6adb033e-7f95-11e4-9803-170bc8dbfcbd.png)

#### PayPal Payment

![paypal payment subscription](https://cloud.githubusercontent.com/assets/8191145/5352952/d797c0b6-7f95-11e4-86be-556c5a881cfc.png)

#### Payment Successful 

![payment successful subscription](https://cloud.githubusercontent.com/assets/8191145/5352969/13a17746-7f96-11e4-91fc-9065729f6d80.png)



### Transaction Successful Message 

![transaction success message after subscription](https://cloud.githubusercontent.com/assets/8191145/5340222/33dfdf7e-7f10-11e4-9b5e-f2f3976df7b6.png)

### Transaction Failure Message 

![transaction failure message](https://cloud.githubusercontent.com/assets/8191145/5340240/6aeed038-7f10-11e4-9f3d-b25a3e658404.png)

## Membership Plan After Subscription

![membership plans subscribed](https://cloud.githubusercontent.com/assets/8191145/5340255/8a72c658-7f10-11e4-8daa-a8164d6f24a8.png)

  1. Click on **Membership Menu** 
  
  2. **Subscribed** text will be shown to the member of that plan. 


## Plan Values on BuddyPress Profiles

Subscribed Plan limits will be displayed in Members Profile Pages.

![plan values bp profiles](https://cloud.githubusercontent.com/assets/8191145/5340328/7069f0f0-7f11-11e4-95f3-d4c4738d28c6.png)

## Messages Displayed to End-User


There are a number of messages that are displayed to end users. Here are some examples.


###  Message in Activity when not Subscribed to Plan

![not subscribed](https://cloud.githubusercontent.com/assets/8191145/5340491/3ea06d18-7f13-11e4-88d6-7170cc9a56ab.png)


###  Message in Media Gallery when not Subscribed to Plan

![not subscribed media gallery](https://cloud.githubusercontent.com/assets/8191145/5340508/5b5d9a20-7f13-11e4-9163-dee693840a76.png)




### File Count Limits Surpassed in Activity


When you set the limits, users will not be allowed to upload media beyond that limit.
![filecountactivity](https://cloud.githubusercontent.com/assets/8191145/5340587/7012cbec-7f14-11e4-96f4-9dfb3ad18e16.PNG)


### File Count Limits Surpassed in Media Gallery


![filecountmedia gallery](https://cloud.githubusercontent.com/assets/8191145/5340593/8aaa35d0-7f14-11e4-8450-be06d226c2ae.PNG)


### File Size Limits Surpassed in Activity

Files exceeding the upload size limit are rejected.

![file size surpassed activity](https://cloud.githubusercontent.com/assets/8191145/5340635/faf82d24-7f14-11e4-8b29-987af247def2.PNG)



### File Size Limits Surpassed in Media Gallery


![file size surpassed media gallery](https://cloud.githubusercontent.com/assets/8191145/5340644/0773cd6a-7f15-11e4-8ba3-c49b39b891d1.PNG)



## Displayed Messages to End-User (rtMedia -Pro)


These messages are only shown to users using rtMedia Pro.

###  Message in WordPress Comment when not Subscribed to Plan

![not subscribed wp comments](https://cloud.githubusercontent.com/assets/8191145/5340530/99084622-7f13-11e4-9136-de90f52bc880.png)


###  Message in Forums when not Subscribed to Plan

![not subscribed message in forum](https://cloud.githubusercontent.com/assets/8191145/5340549/df8a6774-7f13-11e4-8126-28e5179cb8ae.png)

### File Size Limits Surpassed in WP Comment Attachment


![file size surpassed wp comment](https://cloud.githubusercontent.com/assets/8191145/5340670/4ee66f90-7f15-11e4-8471-99a7d586222b.PNG)


### File Size Limits Surpassed in Forum Topic and Reply Attachments


![file size surpassed forum](https://cloud.githubusercontent.com/assets/8191145/5340675/61f1e876-7f15-11e4-993e-5acc36cb6850.PNG)



### File Count Limits Surpassed in Forums Topic and Reply Attachment

![filecountforums](https://cloud.githubusercontent.com/assets/8191145/5340597/af27a28a-7f14-11e4-9916-84c8b4e7d339.PNG)


### File Count Limits Surpassed in WP Comment Attachment

![filecountwpcomment](https://cloud.githubusercontent.com/assets/8191145/5340615/dc8bcaee-7f14-11e4-9131-ad3969b3d28c.PNG)

