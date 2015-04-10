---
title: rtmedia_post_update_click_message
---

### Description

Whenever user miss to enter content or forgot to click on 'Post Update' button while attaching media to activity feed, text saying 'Upload will start only after you enter content and click Post Update' will be appear as a reminder to user.
If you want to change this text message, then you can use this filter.

The following screen-shot shows the default text message in activity feed.

[![post-update-text-message-orig](https://cloud.githubusercontent.com/assets/7771963/7086429/814f331a-df9e-11e4-814d-f85ef12f16a2.png)](https://cloud.githubusercontent.com/assets/7771963/7086429/814f331a-df9e-11e4-814d-f85ef12f16a2.png)

### Example

You can add below code in your theme's functions.php file:

	add_filter( 'rtmedia_post_update_click_message', 'rtmedia_change_post_update_click_message', 10, 1 );

	function rtmedia_change_post_update_click_message( $message ){
		$message = "Here comes your custom message!"; 
		return $message;
	}

The following screen-shot shows modified text message in activity feed.

[![post-update-text-message-modified](https://cloud.githubusercontent.com/assets/7771963/7086431/869447de-df9e-11e4-8a1e-418c31be7788.png)](https://cloud.githubusercontent.com/assets/7771963/7086431/869447de-df9e-11e4-8a1e-418c31be7788.png)

