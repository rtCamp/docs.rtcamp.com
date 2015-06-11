## Replace Default Mediaplayer

By default rtMedia uses [mediaelement.js](http://mediaelementjs.com/) which WordPress provides. If you want to replace it with some other player than first of all you will need to remove current applied player.

You can remove default player and can assign your custom player after calling following code.

```javascript
var rtm_player;
jQuery('.rtmedia-container').find('video').each(function() {
rtm_player = jQuery(this)[0].player;
rtm_player.remove();
});
jQuery('.rtmedia-container').find('audio').each(function() {
rtm_player = jQuery(this)[0].player;
rtm_player.remove();
});
```
Now you need to bind your cusotm player. Below is the sample code to bind [JWPLAYER](http://www.jwplayer.com/) to rtMedia video.

```javascript
var media_element = jQuery( '#rtmedia-single-media-container .rtmedia-media' );
var media_element_id = jQuery( media_element ).attr( 'id' );
//Path for video
var media_path_video = jQuery( '#rtmedia-single-media-container video' ).attr( 'src' );
//Path for audio
var media_path_audio = jQuery( '#rtmedia-single-media-container audio' ).attr( 'src' );
// jwplayer for video
jwplayer( media_element_id ).setup({
file: media_path_video,
height: 360,
width: 640
});
// jwplayer for audio
jwplayer( media_element_id ).setup({
file: media_path_audio,
height: 30,
width: 640
});
```
