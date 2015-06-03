## rtMedia js hooks

rtMedia has several js hooks defined which works like WordPress hooks, you can use them in your theme or plugin for rtMedia related tasks.

**rtmedia_after_gallery_load:** after rtMedia gallery load/refresh

**rtmedia_js_file_added:** after file added in queue for upload (need to return true/false)

**rtmedia_js_file_remove:** after file removed from upload queue

**rtmedia_js_after_file_upload:** after single file upload

**rtmedia_js_after_files_uploaded:** after all the files uploaded

**rtmedia_js_after_comment_added:** after comment added for media

**rtmedia_js_after_comment_deleted:** after comment delete

**rtmedia_js_popup_after_content_added:** after lightbox open

**rtmedia_js_after_activity_added:** after rtMedia activity added in BuddyPress activity page

To use rtMedia js hook, you need to register corresponding function to hook. Check below example for how to use rtMedia js hooks.

```php
if( typeof rtMediaHook == "object" ){	// check if rtMediaHook defined or not
rtMediaHook.register(
 'rtmedia_js_after_file_upload', // hook id here
  function ( args ) { // your function here
 // your code here
  }
);
}
```
