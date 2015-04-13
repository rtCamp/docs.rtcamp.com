---
title: 'Post-editor Shortcode Button: Galleries'
---

**Note**: This feature works only in rtMedia PRO. The plugin can be [purchased from our store](https://rtcamp.com/store/rtmedia-pro/).


Read more about shortcodes: [Shortcodes in rtMedia](/rtmedia/features/shortcodes/)

To create a gallery shortcode in the post editor:


1. Click the shortcode generator button as indicated below:

[![rtMedia post editor shortcode button](https://rtcamp.com/wp-content/uploads/2013/11/image17.png)](https://rtcamp.com/wp-content/uploads/2013/11/image17.png)

[![gallery_shortcode_button_popup](https://cloud.githubusercontent.com/assets/7771963/7118275/aad53c14-e21b-11e4-8e8e-5e62cf3ffe27.png)](https://cloud.githubusercontent.com/assets/7771963/7118275/aad53c14-e21b-11e4-8e8e-5e62cf3ffe27.png)

    
2. By default, the gallery option appears in the dropdown; leave it at that.

	
3. Set **Global** to **True** or **False** using the radio button provided. This determines if the gallery is globally visible or not.

	
4. If **Global** is set to **False** in Step 3, choose the Context from which the gallery should be drawn. 
   If **Global** is set to **True**, this drop down does not appear. The context determines the WordPress, BuddyPress or bbPress context from which media or other items are displayed. 
   If **Default** is chosen, items associated with the current context will be considered. Read more: [Context in rtMedia](/rtmedia/developer/context/).

	
5. If **Global** is set to **False** in Step 3, choose the Context ID associated with the gallery. If **Global** is set to **True**, this drop down does not appear. The Context ID uniquely identifies the context chosen in Step 4. Leave blank for default, which is the ID of the current context.
To avoid confusion, ensure that either the default is chosen in both Step 4 and 5, or specific values are set in both.

	
6. Choose the media type.

7. Specify the Favlist ID if you want to fetch associated media with it.

8. Specify the Author ID associated with the gallery. Leave blank for default, which is the ID of the current author.
	
9. Specify position to show the uploader along with the gallery. Default is **FALSE**.
	
	1. before : uploader on top of gallery
	
	2. after : uploader at the end of gallery
	
	3. true : uploader at the end of gallery (alias for after)

10. Keep **Enable** selected, if you want to open media in lighbox ( popup ).

11. Choose **Hide**, if you want to hide medie file's name which appears under the media in default gallery template. 
	
12. Click **Insert into Post**.

  

