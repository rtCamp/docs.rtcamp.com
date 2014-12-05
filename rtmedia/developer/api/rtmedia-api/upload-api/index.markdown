---
title: Upload API
---

**Read Me**: This documentation is for rtMedia 3.0. rtMedia is a successor of BuddyPress Media, and is [_currently under development_](https://rtcamp.com/news/getting-ready-for-rtmedia/). Parts of this document may not be implemented in the [code](https://github.com/rtCamp/buddypress-media/tree/rtmedia), yet. Not recommended for production environments.


Using the Upload API, any media file can be added to rtMedia for display elsewhere using the Media API. The uploader can be completely customised and custom upload/import methods can be added easily.


## Accessing the API


The Upload API for rtMedia is accessible in multiple ways:



	
  1. Uploader Shortcode

	
  2. Uploader Template Tag

	
  3. Uploader Template System (not recommended)

	
  4. Hooks and Filters

	
  5. RESTful API




## The Upload Endpoint


The Anywhere Uploader of the Upload API works via the upload endpoint. It is a good idea to start with an understanding of the endpoint.


## Concepts and Definitions






	
  1. The Upload API in rtMedia allows for seamless front-end media uploads and integration with rtMedia for WordPress, BuddyPress and bbPress. Furthermore, it allows for complete customisation and extension via addons.


The Upload API provides following interactions

	
  1. Extending th

	
  2. Adding additional fields in the default modes

	
  3. Adding a custom upload mode

	
  4. Directly uploading to the upload endpoint via REST

	
  5. Integration into form submissions




## Adding additional fields in the default modes


rtmedia_before_{mode}_ui

This action hook, lets you add the

rtmedia_after_{mode}_ui




## Upload Modes


rtMedia ships with two default modes:



	
  1. _file_upload_ For uploading media from user's system

	
  2. _link_input_ For adding media via URLs




### Adding Custom Modes


A custom mode can be added using the filter

Processing Custom Mode Input

The custom mode processing can be accessed at the action hook. The hook passes the rtMedia upload object, which can be used for further processing. After processing the input, rtMedia expects a well formatted media object.


