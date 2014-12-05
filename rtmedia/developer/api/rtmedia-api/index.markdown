---
date: 2013-06-12 07:30:52+00:00
layout: page
slug: rtmedia-api
title: rtMedia API
---

**Read Me**: This documentation is for rtMedia 3.0. rtMedia is a successor of BuddyPress Media, and is [_currently under development_](https://rtcamp.com/news/getting-ready-for-rtmedia/). Parts of this document may not be implemented in the [code](https://github.com/rtCamp/buddypress-media/tree/rtmedia), yet.


rtMedia boasts of a very extensive API that allows fine grained control on rtMedia. It is highly flexible and can be used to customise rtMedia to a great extent


## API Parts


The rtMedia API is roughly divided into three parts:



	
  1. an [Upload API](hthttp://rtcamp.com/buddypress-media/docs/developer/rtmedia-api/upload-api), that allows interaction with the **uploader**, and the **create** functionality of media.

	
  2. a [Media API](https://rtcamp.com/rtmedia/docs/developer/rtmedia-api/media-api), that allows interaction with the media collections, and their **display**.

	
  3. an [API Core](https://rtcamp.com/rtmedia/docs/developer/rtmedia-api/api-core/), that allows general interaction with the plugin and contains functionality **common** to both the APIs, above.




## RESTful


The API is accessible on RESTful [API endpoints](https://rtcamp.com/rtmedia/docs/developer/rtmedia-api/endpoints/), as well and allows manipulation of Media objects in rtMedia. Both the [Upload Endpoint](https://rtcamp.com/rtmedia/docs/developer/rtmedia-api/endpoints/upload-endpoint) (/upload/) and [Media Endpoint](https://rtcamp.com/rtmedia/docs/developer/rtmedia-api/endpoints/media-endpoint) (/media/) are documented separately.


## Concepts


To create meaningful interaction with the API, some concepts are required before exploring it any further:



	
  1. [Database Description](https://rtcamp.com/rtmedia/docs/developer/database-description/),

	
  2. the Media Object,

	
  3. the Upload Object,

	
  4. the Media Endpoint, and

	
  5. the Upload Endpoint


