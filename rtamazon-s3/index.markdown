---
title: rtAmazon S3
---

rtAmazon S3 allows site admin to move WordPress media uploads to Amazon S3 Bucket. This plugin works fine with [rtMedia](https://wordpress.org/plugins/buddypress-media/) plugin also.

## Installation
Perform the following steps to install rtAmazon s3 plugin:

  1. Download **rtAmazon S3** plugin from the [My Account](https://rtcamp.com/my-account) section
  
  2. Go to WordPress site dashboard and navigate to `Plugins > Add New > Upload`.
  
  3. Select the`rtamazon-s3.zip` file from your computer and click upload.
  
  4. Click **Install Now** to install the plugin. Then, click the **Activate Plugin** link, to activate the plugin.

## Settings

[![rtamazon-s3-login](https://cloud.githubusercontent.com/assets/7807348/7199130/c345f6f2-e50f-11e4-9702-ef813c9a3f86.png)](https://cloud.githubusercontent.com/assets/7807348/7199130/c345f6f2-e50f-11e4-9702-ef813c9a3f86.png)

1. Enter `Amazon Access Kay ID`

2. Enter `Amazon Secret Access Key`

3. Click `Next` to get started

4. If you don't have an account then you can [Sign Up](https://console.aws.amazon.com/iam/home?region=us-east-1#users) to Amazon S3

5. Do not use your root credentials to login, it is best practice to use [IAM user](http://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html) and assign amazon s3 full access to the user,as this will protect your sensitive data.

## Bucket Selection

After successfully logged in, a dropdown will appear to select `Bucket selection` page.

[![rtamazon-s3-bucket-selection](https://cloud.githubusercontent.com/assets/7807348/7202116/cca169e4-e52c-11e4-8b75-0c9676a365f7.png)](https://cloud.githubusercontent.com/assets/7807348/7202116/cca169e4-e52c-11e4-8b75-0c9676a365f7.png)

1. You can see your `Access Key ID` and `Secret Access Key`

2. If you want to change your `Access Key ID` and `Secret Access Key` then enter new details and click on **Change** button

3. You can see you `Amazon S3 Buckets`.

4. If you want to add new bucket, click on `Create new Bucket` button

## Create Bucket

After clicking on `Create new Bucket`, you will be able to see `Bucket Creation Popup`

[![rtamazon-s3-create-bucket](https://cloud.githubusercontent.com/assets/7807348/7202131/0324ad00-e52d-11e4-8612-2d474d4c62d0.png)](https://cloud.githubusercontent.com/assets/7807348/7202131/0324ad00-e52d-11e4-8612-2d474d4c62d0.png)

1. Enter `Bucket Name`

2. Select `Region`

3. Click `Create Bucket` button.

4. You can see `Rules for creating Bucket`

5. If you don't want to create a Bucket then simply `Close` the popup.

## Bucket Settings

After `Selecting a Bucket` or `Creating a Bucket` you can see `Selected Bucket's` or `Created Bucket's` Settings.

[![rtamazon-s3-bucket-settings](https://cloud.githubusercontent.com/assets/7807348/8429046/acee8358-1f41-11e5-9dc9-fd1de0a4fa33.png)](https://cloud.githubusercontent.com/assets/7807348/8429046/acee8358-1f41-11e5-9dc9-fd1de0a4fa33.png)

1. Upload media files to **Virtual Folder** on Amazon S3 Bucket. For example if the name of input folder is **test**, media are stored under **test** folder, if folder name is `test/sample`, media are stored under **sample** folder which is a folder under **test** and so on.

2. You can delete local media files after they have been successfully uploaded to your **S3 Bucket**. If you enable this option then uploaded files are served with their `S3 URL`. **Strongly Not Recommended!**

3. You can serve media URL with different options:

    1. **WordPress Media URL**: `http://sp.com/wp-content/uploads/2015/06/photo.jpg`

    2. **Bucket Name as Subdomain**: `http://bucket-name.s3.amazonaws.com/wp-content/uploads/2015/06/photo.jpg`

    3. **Bucket Name in Path**: `http://s3.amazonaws.com/bucket-name/wp-content/uploads/2015/06/photo.jpg`

    4. **Custom Domain**: This option is useful for CDN, CloudFront, etc. For example if you enter **abc** in the textbox, media URL will become `http://abc/wp-content/uploads/2015/06/photo.jpg`

    **Note**: This will affect only new uploads.

4. You can directly copy uploaded media files to **S3 Bucket** as they are uploaded from media library, blog post or rtmedia plugin.

5. **Save Settings** after changes

6. You can see **Bucket Info** like:

    1. Bucket Name
  
    2. Bucket Owner
  
    3. Bucket Creation Date
  
    4. Bucket Versioning
  
    5. Bucket Location

7. You can **Delete Bucket** directly from here. If there are objects in the Bucket then you need to **Delete Objects** first.

8. You can see **Media Stats**

9. You can chnage the Bucket, if you want to see other Bucket details.

10. You can upload all the remaining media which are not uploded to Amazon S3 Bucket. Just click on **Upload All** button.

## Bucket Objects

[![rtamazon-s3-bucket-objects](https://cloud.githubusercontent.com/assets/7807348/7202755/d1589060-e532-11e4-85e8-78bdda52bbf9.png)](https://cloud.githubusercontent.com/assets/7807348/7202755/d1589060-e532-11e4-85e8-78bdda52bbf9.png)

1. If you want to list the latest bucket objects then click on **Refresh Bucket Object List**

2. Select Object

3. Bulk Actions

    1. `Download` -> You can download single object or multiple objects by selecting Download from Bulk Actions.
  
    2. `Delete` -> You can directly delete single object or multiple objects from the bucket by selecting Delete from Bulk Actions.
  
    3. `Move` -> First you have to select media and then select Move from Bulk Actions. After that select Destination Bucket.

4. Click `Apply` After select bulk action.

5. `Pagination` for bucket objects

## Upload All

You will be able to see **Remaining media count** which are not uploaded to Amazon S3 Bucket.

[![rtamazon-s3-upload-all](https://cloud.githubusercontent.com/assets/7807348/7202305/b4e26eb4-e52e-11e4-9d4f-f00ac468e69f.png)](https://cloud.githubusercontent.com/assets/7807348/7202305/b4e26eb4-e52e-11e4-9d4f-f00ac468e69f.png)

After Upload complete, click the link to navigate to **rtAmazon S3 Settings** as shown below

[![rtamazon-s3-upload-complete](https://cloud.githubusercontent.com/assets/7807348/7202390/6fbbca64-e52f-11e4-95b4-762ed61f47b9.png)](https://cloud.githubusercontent.com/assets/7807348/7202390/6fbbca64-e52f-11e4-95b4-762ed61f47b9.png)

### Upload Media
You can upload selected media to Amazon S3 Bucket.

[![rtamazon-s3-upload-media](https://cloud.githubusercontent.com/assets/7807348/7202476/4d0bc9f0-e530-11e4-894e-295c993e81f6.png)](https://cloud.githubusercontent.com/assets/7807348/7202476/4d0bc9f0-e530-11e4-894e-295c993e81f6.png)

1. Select the media you want to **Upload** to S3 Bucket

2. Click on **Upload**

## Media Library

You can upload media directly from WordPress' Media Library to **S3 Bucket** or see the uploaded media with their `S3 URL`

[![rtamazon-s3-media-library](https://cloud.githubusercontent.com/assets/7807348/7370914/f98fe2b2-edda-11e4-8ca1-b4af2faefa61.png)](https://cloud.githubusercontent.com/assets/7807348/7370914/f98fe2b2-edda-11e4-8ca1-b4af2faefa61.png)

1. You can see `Admin Notice` to upload remaining media to S3 Bucket.

2. New column to see/upload media i.e., `S3 URL`

3. `Upload` to S3 Bucket

4. `Link` to see the uploaded media

5. You can `Bulk Upload` by selecting multiple media and select `Upload to S3` from Bulk Actions DropDown.
