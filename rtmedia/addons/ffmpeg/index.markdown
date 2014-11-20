---
author: adityakane
comments: false
date: 2014-08-12 14:11:56+00:00
layout: page
slug: ffmpeg
title: FFMPEG
wordpress_id: 67191
---

This addon adds automatic video conversion support for rtMedia plugin. When installed, your BuddyPress users will be able to upload videos in many more formats.

Now, along with converting your videos, the [FFMPEG converter](https://rtcamp.com/store/buddypress-media-ffmpeg-converter/) also creates and sets an image thumbnail. It uses an algorithm to choose the best thumbnail. It also creates two additional thumbnails that you can switch to, in case you don’t like the default one.

You can test this on our [live demo server](http://demo.rtcamp.com/bpm-ffmpeg/). Also following screenshot shows interface to select thumbnail:

[![rtmedia-ffmpeg-video-thumbail-selection](http://docs.rtcamp.com/wp-content/uploads/2014/08/rtmedia-ffmpeg-video-thumbail-selection.png)](http://docs.rtcamp.com/wp-content/uploads/2014/08/rtmedia-ffmpeg-video-thumbail-selection.png)




## Requirements and Resources





	
  1. You need to have VPS/Dedicated server to use this product. This will NOT work on shared hosting.

	
  2. You need to install free & open-source media-node project to handle FFMPEG conversion/encoding queue, as per the instructions here.

	
  3. OS Requirement for media-node: Minimum Ubuntu 8.04, Debian 6.x, Centos 6.x, RHEL 6.x. No support for Windows or Mac.


rtMedia FFMPEG Converter Plugin’s foremost feature is uploading and converting the entire audio and video file to mp3 and mp4 respectively. This plugin is the very first of its kind and a complete media package for BuddyPress which allows sharing audio, video and image in different kind of file formats.


## How it will work





	
  * When a user uploads a media file, the plugin will check if the file is in compatible format.

	
  * If uploaded file requires to be converted, the file will be sent to the Media-Node Server for conversion.

	
  * It will then be pulled back and stored on the Webhosting server.

	
  * Please make sure that at all times the Media-Node Server is running.




## Features






	
  * As an admin you can restrict your users to share any type of Media (image, audio or video)

	
  * You can change the Server URL as per your needs. (By default it is http://localhost:1203/upload)

	
  * You can Re-Count the media files for any user if it is not matching with number of media files





## Roadmap





	
  * Video Thumbnail Support

	
  * Support for video merging

	
  * Download audio-only mp3 track for uploaded videos


