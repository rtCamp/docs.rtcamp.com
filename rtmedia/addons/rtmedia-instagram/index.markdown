---
date: 2013-06-14 05:13:18+00:00
title: rtMedia Instagram
---

## Installation


Important: You must have ImageMagick installed on the server on which you are running WordPress and BuddyPress Media. Click [here ](http://devilsworkshop.org/tutorial/php54-imagemagick-pecl-installation/61444/)to access the tutorial for installing ImageMagick.

Follow these simple steps to get your rtMedia Instagram add-on running:



	
  * Once you complete the purchase, you will get a download link for BuddyPress-Media Instagram in your email inbox.

	
  * In your **WordPress Dashboard**, click on **Plugins** > **Add New** > **Upload**. Select the **bpm-instagram.zip** file from your computer and click on **Upload**.

	
  * Activate it through the **Plugins** section.

	
  * Done. _Your users will now be able to add effects on the photo edit screen, like the effects we added on our team photo below._ :-)


[![Instagram plugin View](https://rtcamp.com/wp-content/uploads/2013/06/Selection_018-nashville.png)](https://rtcamp.com/wp-content/uploads/2013/06/Selection_018-nashville.png)


## **Troubleshooting**


1. How to check if ImageMagick is installed on my server?

Go to BuddyPress Media’s **support** tab in your WordPress back-end. You will see the following:

[caption id="attachment_34386" align="aligncenter" width="497"][![ImageMagick is not installed](https://rtcamp.com/wp-content/uploads/2013/03/imagick-not-installed-497x350.jpg)](https://rtcamp.com/wp-content/uploads/2013/03/imagick-not-installed.jpg) ImageMagick is not installed[/caption]

Now, you need to install ImageMagick on your server.
To install ImageMagick, you can either get support from your hosting company, or you can do it yourself by following the simple instructions mentioned in these tutorials:



	
  * [DevilsWorkshop](http://devilsworkshop.org/tutorial/php54-imagemagick-pecl-installation/61444/) [our tutorial]

	
  * [PHP’s official website](http://www.php.net/manual/en/imagick.installation.php)

	
  * [ImageMagick’s official website](http://www.imagemagick.org/script/install-source.php)


Once ImageMagick is installed on your server, you can cross check it in your WordPress, under **BuddyPress Media** > **Support** tab.

Now, you can enjoy the feel of Instagram effects in your WordPress - BuddyPress Media website.


2. While editing photos, you can see all the Instagram effect options, but none of them are working.


Cross-check whether all the packages are installed properly on your server.

For that, run this command:

` dpkg -l | egrep '(imagemagick|libmagickwand-dev|php5-imagick)'`

Or this command:

` dpkg -l | egrep '(imagemagick | libmagick9-dev | php5-imagick)' `  depending on your server configuration.

You will see an output like this:
[![Packages installed](https://rtcamp.com/wp-content/uploads/2013/06/Selection_020-620x137.png)](https://rtcamp.com/wp-content/uploads/2013/06/Selection_020.png)

If those packages are installed, then you need to add this line in server's **php.ini** file:

` extension=imagick.so `
If not, then install the missing packages.

Restart php on your server. Everything will work fine with Instagram add-on.

If you are still facing problems with the rtMedia Instagram add-on, feel free to [contact us](https://rtcamp.com/contact/) or use our [support forum](https://rtcamp.com/groups/buddypress-media/forum/).
