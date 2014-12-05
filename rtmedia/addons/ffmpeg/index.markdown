---
date: 2014-08-12 14:11:56+00:00
slug: ffmpeg
title: FFMPEG
---

This addon adds automatic video conversion support for the rtMedia plugin. When installed, your BuddyPress users will be able to upload videos in many more formats.

The addon's foremost feature is uploading and converting the entire audio and video file to mp3 and mp4 respectively. This plugin is the very first of its kind and a complete media package for BuddyPress which allows sharing audios, videos and images in various kind of file formats.

Along with converting your videos, the [FFMPEG converter](https://rtcamp.com/products/rtmedia-ffmpeg-addon/) also creates and sets an image thumbnail. It uses an algorithm to choose the best thumbnail. It also creates two additional thumbnails that you can switch to, in case you do not like the default one.

You can test this on our [live demo server](http://demo.rtcamp.com/bpm-ffmpeg/). The following screenshot shows the interface to select a thumbnail:

[![rtmedia-ffmpeg-video-thumbail-selection](http://docs.rtcamp.com/wp-content/uploads/2014/08/rtmedia-ffmpeg-video-thumbail-selection.png)](http://docs.rtcamp.com/wp-content/uploads/2014/08/rtmedia-ffmpeg-video-thumbail-selection.png)



## Requirements and Resources


  1. You need to have a VPS or Dedicated server to use this product. This will NOT work on shared hosting.

	
  2. You need to install a free & open-source media-node project to handle FFMPEG conversion/encoding queue, as per the [instructions here](https://rtcamp.com/media-node/).

	
  3. OS Requirement for media-node: Ubuntu 8.04 and higher, Debian 6.x and higher, Centos 6.x and higher, RHEL 6.x and higher. No support for Windows or Mac.
  
  4. Make sure that the Media-Node Server is always running.


## How does it work?

	
  * When a user uploads a media file, the plugin checks if the file is in a compatible format.

	
  * If uploaded file requires to be converted, the file is sent to the Media-Node Server for conversion.

	
  * After conversion, the converted file is downloaded and stored on the Web hosting server.

	
## Features
	
  * As an admin, you can restrict your users to uploading only certain type of Media (image, audio or video)

	
  * You can change the Server URL as per your needs. (By default it is http://localhost:1203/upload)

	
  * You can Re-Count the media files for any user if it is not matching with number of media files


## Roadmap


  * Video Thumbnail Support

	
  * Support for video merging

	
  * Download audio-only mp3 track for uploaded videos


