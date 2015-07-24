## rtMedia Photo Filters (Instagram)
---

### Installation

**Important**: You must have **ImageMagick** installed on the server on which you are running WordPress and BuddyPress Media. Click [here ](http://devilsworkshop.org/php54-imagemagick-pecl-installation/)to access the tutorial for installing ImageMagick.

**rtMedia Instagram** has been renamed to **rtMedia Photo Filters.**

Follow these simple steps to get your rtMedia Photo Filters add-on running:

* Once you complete the purchase, you will get a download link for rtMedia Photo Filters in your email inbox.
* In your **WordPress Dashboard**, click on **Plugins** > **Add New** > **Upload**. Select the **rtmedia-photo-filters.zip** file from your computer and click **Upload**.
* Click the **Activate Plugin** link to activate the plugin.
* Your users will now be able to add effects on the photo edit screen, you will see number of filters to choose for effect.

[![rtmedia-photo-filters](https://cloud.githubusercontent.com/assets/7807348/8872725/4b7ff22a-321d-11e5-9dc3-90f048f8443a.png)](https://cloud.githubusercontent.com/assets/7807348/8872725/4b7ff22a-321d-11e5-9dc3-90f048f8443a.png)

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

**While editing photos, you can see all the Photo Filters effect options, but none of them are working.**

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

Restart php on your server. Everything will work fine with Photo Filters add-on.

If you are still facing problems with the rtMedia Photo Filters add-on, feel free to [contact us](https://rtcamp.com/contact/) or use our [support forum](https://rtcamp.com/premium-support).
