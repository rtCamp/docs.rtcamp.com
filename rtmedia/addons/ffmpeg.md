## FFMPEG

This addon adds automatic video conversion support for the rtMedia plugin. When installed, your BuddyPress users will be able to upload videos in many other formats.

The addon's foremost feature is uploading and converting the entire audio and video file to mp3 and mp4 respectively. This plugin is the very first of its kind and a complete media package for BuddyPress which allows sharing audios, videos and images in various kind of file formats.

Along with converting your videos, the [FFMPEG converter](https://rtcamp.com/products/rtmedia-ffmpeg-addon/) also creates and sets an image thumbnail. It uses an algorithm to choose the best thumbnail. It also creates two additional thumbnails that you can switch to, in case you do not like the default one.

You can test this on our [live demo server](http://demo.rtcamp.com/rtmedia-ffmpeg/). The following screenshot shows the interface to select a thumbnail:

![rtmedia-ffmpeg-video-thumbail-selection](https://cloud.githubusercontent.com/assets/1140051/7650512/d2df2ab4-fb14-11e4-9031-105c24cfca5a.png)


### Requirements and Resources


  1. You need to have a VPS or Dedicated server to use this product. This will NOT work on shared hosting.

	2. Install a free & open-source media-node project to handle FFMPEG conversion/encoding queue, as per the [instructions here](https://rtcamp.com/media-node/).

  3. OS Requirement for media-node: Ubuntu 8.04 and higher, Debian 6.x and higher, Centos 6.x and higher, RHEL 6.x and higher. No support for Windows or Mac servers.

  4. Make sure that the Media-Node Server is always running.


### How does it work?

* If media node is installed on other server (remote server), in rtMedia -> FFMPEG settings add your remote server URL or IP along with port number. Click on `Save Button`.

* If media node installed on current server where WordPress site is running, the `Server URL` will be automatically setup.

* `Media Node is not installed/configured properly. Media Node must be configured properly to use rtMedia FFMPEG` This message display only if media node is not setup on local or remote server. Nothing will work for this.

* Once the media node setup, you can cross check it by generating video thumbnails. Also use a `Check Status` button which will let you know if media node installed or not.

* When a user uploads a media file, the plugin checks if the file is in a compatible format.

* If uploaded file requires to be converted, the file is sent to the Media-Node Server for conversion.

* After conversion, the converted file is downloaded and stored on the Web hosting server.

![selection_097](https://cloud.githubusercontent.com/assets/1140051/7650402/844ded46-fb13-11e4-9ae0-c6700360ba19.png)


### Features

  * As an admin, you can restrict your users to uploading only certain type of Media (image, audio or video)

  * You can change the Server URL as per your needs. (By default it is http://localhost:1203/upload)


### Roadmap


  * Support for video merging

  * Download audio-only mp3 track for uploaded videos
