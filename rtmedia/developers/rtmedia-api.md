## rtMedia API

**Read Me**: This documentation is for rtMedia 3.0. rtMedia is a successor of BuddyPress Media, and is [_currently under development_](https://rtcamp.com/blog/getting-ready-for-rtmedia/). Parts of this document may not be implemented in the [code](https://github.com/rtCamp/buddypress-media/tree/rtmedia), yet.


rtMedia boasts of a very extensive API that allows fine grained control on rtMedia. It is highly flexible and can be used to customise rtMedia to a great extent


## API Parts


The rtMedia API is roughly divided into three parts:

  1. [Upload API](./upload-api.md), that allows interaction with the **uploader**, and the **create** functionality of media.

  2. Media API, that allows interaction with the media collections, and their **display**.


## RESTful


The API is accessible on RESTful API endpoints, as well and allows manipulation of Media objects in rtMedia. Both the [Upload Endpoint](./upload-endpoint.md) (/upload/) and Media Endpoint (/media/) are documented separately.


## Concepts


To create meaningful interaction with the API, some concepts are required before exploring it any further:




  1. [Database Description](./database-description.md),

  2. the Media Object,

  3. the Upload Object,

  4. the Media Endpoint, and

  5. the Upload Endpoint
