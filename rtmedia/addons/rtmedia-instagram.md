## rtMedia Instagram (Photo Filter)
---

### Installation


Important: You must have ImageMagick installed on the server on which you are running WordPress and BuddyPress Media. Click [here ](http://devilsworkshop.org/php54-imagemagick-pecl-installation/)to access the tutorial for installing ImageMagick.

Follow these simple steps to get your rtMedia Instagram add-on running:

* Once you complete the purchase, you will get a download link for rtMedia Instagram in your email inbox.
* In your **WordPress Dashboard**, click on **Plugins** > **Add New** > **Upload**. Select the **bpm-instagram.zip** file from your computer and click **Upload**.
* Click the **Activate Plugin** link to activate the plugin.
* Your users will now be able to add effects on the photo edit screen, you will see number of filters to choose for effect.


![selection_094](https://cloud.githubusercontent.com/assets/1140051/7649480/0a7e6930-fb0b-11e4-8740-94ff27b7e042.png)


## **Troubleshooting**


** How do I check if ImageMagick is installed on my server? **

Go to BuddyPress Media’s **support** tab in your WordPress dashboard. You will see the following:

*ImageMagick is not installed*

[![ImageMagick is not installed](https://rtcamp.com/wp-content/uploads/2013/03/imagick-not-installed-497x350.jpg)](https://rtcamp.com/wp-content/uploads/2013/03/imagick-not-installed.jpg)

Now, you need to install ImageMagick on your server.

To install ImageMagick, you can either get support from your hosting company, or you can do it yourself, by following the instructions mentioned in these tutorials:

* [DevilsWorkshop](http://devilsworkshop.org/php54-imagemagick-pecl-installation/) [our tutorial]
* [PHP’s official website](http://www.php.net/manual/en/imagick.installation.php)
* [ImageMagick’s official website](http://www.imagemagick.org/script/install-source.php)

Once ImageMagick is installed on your server, you can cross check it in your WordPress installation, under the **rtMedia** > **Support** tab.

Now, you can enjoy the feel of photo filter effects in your WordPress website.


**While editing photos, you can see all the Instagram effect options, but none of them are working.**


Cross-check whether all the packages are installed properly on your server.

Run this command:

```bash
dpkg -l | egrep '(imagemagick|libmagickwand-dev|php5-imagick)'
```

Or this command:

```bash
dpkg -l | egrep '(imagemagick | libmagick9-dev | php5-imagick)'

```

depending on your server configuration

You will see output as follows:
[![Packages installed](https://rtcamp.com/wp-content/uploads/2013/06/Selection_020-620x137.png)](https://rtcamp.com/wp-content/uploads/2013/06/Selection_020.png)

If those packages are installed, then you need to add this line in server's **php.ini** file:

```php
extension=imagick.so
```

If not, then install the missing packages.

Restart php on your server. Everything will work fine with Instagram add-on.

If you are still facing problems with the rtMedia Instagram add-on, feel free to [contact us](https://rtcamp.com/contact/) or use our [support forum](https://rtcamp.com/premium-support).
