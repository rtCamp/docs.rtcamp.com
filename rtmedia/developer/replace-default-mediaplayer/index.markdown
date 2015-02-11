---
title: Replace Default Mediaplayer
---

By default rtMedia uses [mediaelement.js](http://mediaelementjs.com/) which WordPress provides. If you want to replace it with some other player than first of all you will need to remove current applied player.

You can remove default player and can assign your custom player after calling following code.

	var rtm_player;
	jQuery('.rtmedia-container').find('video').each(function() {
	    rtm_player = jQuery(this)[0].player;
	    rtm_player.remove();
	});
	jQuery('.rtmedia-container').find('audio').each(function() {
	    rtm_player = jQuery(this)[0].player;
	    rtm_player.remove();
	});