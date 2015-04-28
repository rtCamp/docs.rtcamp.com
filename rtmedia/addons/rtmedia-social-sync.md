# rtMedia Social Sync

rtMedia Social Sync is a rtMedia addon that allows you to import and publish media from popular social media sites. Make sure that [rtMedia plugin](https://wordpress.org/plugins/buddypress-media/) is installed as it is a prerequisite to use rtMedia Social Sync.

Currently it only supports media importing from Facebook. Post new upload to Facebook from rtMedia will be added in future. You will need live Facebook app in order to make this plugin work. You can create app from [here](https://developers.facebook.com/apps).


## Installation:

Perform the following steps to get the add-on running:

1. Download rtMedia Social Sync plugin from the [My Account](https://rtcamp.com/my-account/) Section.
2. Go to your Dashboard and navigate to `Plugins > Add New > Upload`. Select the `rtmedia-social-sync.zip` file from your system and click upload.
3. Click **Install Now** to install the plugin. Then, click the **Activate Plugin** link, to activate the plugin.


## Admin Settings:

You will need a live Facebook app. If you do not have any, you need to create one. You can create it from [here](https://developers.facebook.com/apps) and need to submit it to make it live.

Once you have a live Facebook app, go to app settings and click “Add a platform”. Add your website as a platform for your Facebook app. Read more about Facebook app [here](https://developers.facebook.com/docs/apps/review).

![rtmedia-social-sync-admin-settings](https://cloud.githubusercontent.com/assets/2941333/6849066/be9d7564-d3f6-11e4-9b8a-3ae77244b39a.png)

To set up rtMedia Social Sync, go to `WordPress Dashboard > rtMedia > Settings > Social Sync` and then save Facebook app ID as shown in above screenshot.

## Import Option:

The **Import** button is available in user’s media page under **Social Media Import** tab in uploader. If the user is allowed to upload media, he/she can see the import option as shown in the following screenshot.


![facebook-importer](https://cloud.githubusercontent.com/assets/2941333/6849105/00614930-d3f7-11e4-95d9-4ed77290530d.png)

On clicking **Import from Facebook**, user needs to enter Facebook login credentials if not logged in, and then authorise the application. 

If the application is already authorised, it will open lightbox with loading message.

![rtmedia-social-sync-loading-from-facebook](https://cloud.githubusercontent.com/assets/2941333/6849115/2206a1a2-d3f7-11e4-9231-8ebf8f6b1466.png)


When the application successfully loads media from Facebook, it will show albums of user, as shown in the following screenshot. By default it will load 10 albums, if there are more, it will show Load more button.

![rtmedia-social-sync-user-album-list](https://cloud.githubusercontent.com/assets/2941333/6849122/3711bae6-d3f7-11e4-89ed-188c2001f745.png)

When you click on any album, it will loads the media of that particular album, as shown below.

![rtmedia-facebook-gallery](https://cloud.githubusercontent.com/assets/2941333/6849145/584f7dce-d3f7-11e4-9efb-4cc318e5dee8.png)

From this window, users can import their Facebook media into rtMedia. In the top right corner there is an option to select or deselect all media. Users can also navigate to all albums by clicking **Your albums** in top left corner. All the selected media will be highlighted to differentiate them with others. 

By default it will load 10 media only. If there are more media, **Load more** button will be shown. 

![rtmedia-facebook-import](https://cloud.githubusercontent.com/assets/2941333/6849186/8ea6ad84-d3f7-11e4-81ba-5a99f01587b4.png)

Users can set **Privacy** of media (if allowed from rtMedia admin settings) and can select **album** before start importing selected media. You can also remove media from upload queue of you don’t want to upload it by clicking on ‘x’. Click on **START UPLOAD** button to start importing selected media from Facebook.

You can import more media by clicking on **Import from Facebook* button.

##Troubleshooting:

###Errors mentioned below:

![selection_122](https://cloud.githubusercontent.com/assets/1140051/7214855/5279e330-e5db-11e4-9a3b-196ee7cd6bbd.png)

`Given URL is not allowed by the Application configuration: One or more of the given URLs is not allowed by the App's settings. It must match the Website URL or Canvas URL, or the domain must be a subdomain of one of the App's domains.`

###Solution:

Your app should be configured with live website URL and `App Domain`. 

1. Edit your Facebook App from here https://developers.facebook.com/apps/, click on the app which you want to use with rtMedia Social sync plugin. 

2. Now, add `App Domains`. You need to add your site domain name there in which you have installed rtMedia Social Sync plugin.  ![selection_123](https://cloud.githubusercontent.com/assets/1140051/7214878/9df628ae-e5dc-11e4-8d6e-32613cc46251.png)

3. After that click on `Add Platform` and select `Website`.  You need to provide the live website URL and save changes button.  ![selection_126](https://cloud.githubusercontent.com/assets/1140051/7214887/2fc815b2-e5dd-11e4-862d-00a60968de26.png)

Now, you can go to rtMedia Social Sync settings under your WordPress site and add Facebook APP id. Start using the feature to import media from faceboook account. 


##Future Milestones:

1. Import/export media from Google+, Instagram and Flickr. 
2. Post new upload to Facebook account from website where rtMedia is installed.
