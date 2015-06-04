## Fixing Orientation of Images in BuddyPress Media, Using PHP

Users of [BuddyPress Media](http://wordpress.org/extend/plugins/buddypress-media/) have submitted bug reports saying images uploaded via the plugin have random orientations. This might happen often, if you are developing a plugin that uploads images into WordPress.

### The Problem:

The issue is most often reported by iPhone and iPad users. You click a photo and upload it and expect it show straight up as illustrated below:

![What you expect](https://rtcamp.com/wp-content/uploads/2013/03/whatuexpect-283x350.jpg)](https://rtcamp.com/wp-content/uploads/2013/03/whatuexpect.jpg)
What you expect,

What happens instead is this:

![What you get, instead](https://rtcamp.com/wp-content/uploads/2013/03/whatuget-432x350.jpg)](https://rtcamp.com/wp-content/uploads/2013/03/whatuget.jpg) What you get, instead!

What can be guessed from the images is that these smartphones do not correct the rotation in the image's [EXIF data](http://en.wikipedia.org/wiki/Exchangeable_image_file_format). The phone's native app reads the EXIF data and displays it properly. However, when uploaded into WordPress, this reading is not done and hence images appear rotated.

### The Ideal Solution

Ideally, the application that displays the image should read the image's orientation and rotate it as required on display. In our case, browsers should know that the image is rotated and correct the display. Unfortunately, apart from the latest (surprise!) Internet Explorer, no browser is known to implement this.

### How We Fixed the Issue in PHP!

The other way to solve this is, read the EXIF data and fix the rotation. With [BuddyPress Media ](http://wordpress.org/extend/plugins/buddypress-media/changelog/), we did this:
```php
<?php
$file = wp_handle_upload($file);
$file = exif($file);
?>
```

The exif function reads the exif data and fixes it:

```php

<?php
function exif($file) {
//This line reads the EXIF data and passes it into an array
$exif = read_exif_data($file['file']);
//We're only interested in the orientation
$exif_orient = isset($exif['Orientation'])?$exif['Orientation']:0;
$rotateImage = 0;
//We convert the exif rotation to degrees for further use
if (6 == $exif_orient) {
$rotateImage = 90;
    $imageOrientation = 1;
    } elseif (3 == $exif_orient) {
    $rotateImage = 180;
    $imageOrientation = 1;
    } elseif (8 == $exif_orient) {
    $rotateImage = 270;
    $imageOrientation = 1;
    }
//if the image is rotated
if ($rotateImage) {
//WordPress 3.5+ have started using Imagick, if it is available since there is a noticeable difference in quality
//Why spoil beautiful images by rotating them with GD, if the user has Imagick
if (class_exists('Imagick')) {
$imagick = new Imagick();
$imagick->readImage($file['file']);
$imagick->rotateImage(new ImagickPixel(), $rotateImage);
$imagick->setImageOrientation($imageOrientation);
$imagick->writeImage($file['file']);
$imagick->clear();
$imagick->destroy();
} else {
//if no Imagick, fallback to GD
//GD needs negative degrees
$rotateImage = -$rotateImage;
switch ($file['type']) {
    case 'image/jpeg':
    $source = imagecreatefromjpeg($file['file']);
    $rotate = imagerotate($source, $rotateImage, 0);
    imagejpeg($rotate, $file['file']);
        break;
    case 'image/png':
    $source = imagecreatefrompng($file['file']);
    $rotate = imagerotate($source, $rotateImage, 0);
    imagepng($rotate, $file['file']);
    break;
    case 'image/gif':
    $source = imagecreatefromgif($file['file']);
    $rotate = imagerotate($source, $rotateImage, 0);
    imagegif($rotate, $file['file']);
        break;
    default:
        break;
    }
    }
    }
    // The image orientation is fixed, pass it back for further processing
    return $file;
    }
?>
```

The image used in the example is from [rtParty](https://rtcamp.com/blog/rtcamp-4-years/) where rtCampers chill out after a year of hard work!

**Link:** [BuddyPress-Media](https://rtcamp.com/rtmedia/)
