---
title: Old Shortcodes
---

**Read Me**: This documentation is for BuddyPress Media, the precursor to rtMedia 3.0. Click the links on this page to read about the new shortcodes: [Shortcodes: Galleries and Uploaders](/rtmedia/features/shortcodes/)

    
    [[bpmedia type="all" title="true" count="10" loadmore="true"]]


Used to display public media of all the users of the site. The simplest way to use it with the default options is as follows:

    
    [[bpmedia]]




## Options




### **type**

	
  * all(_default_) - displays all media types

	
  * music

	
  * video

	
  * photos


Specifies the type of media to display. More than one type can be specified using comma separation. For eg, to show music _and_ video

    
    [[bpmedia type="music,video"]]


To only show photos,

    
    [[bpmedia type="photos"]]


If not specified, all media types are displayed.


### **title**


  * true(_default_)

	
  * false


Specifies whether the media title would be shown.


### **count**


_any number_ (default as saved in BuddyPress Media settings)

Specifies how many media files would load on each load (using load more). Defaults to what is saved in the settings for BuddyPress Media. To show 30 photos, at a time, use:

    
    [[bpmedia type="photos" count="30"]]

### **loadmore**

	
  * true(_default_)

	
  * false


Specifies whether a loadmore button would be shown. To show the most recent 100 photos without load more, use this:

    
    [[bpmedia type="photos" count="100" loadmore="false"]]
