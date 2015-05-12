## Featured Media

rtmedia_featured($user_id)

The older tag (**bp_media_featured()**) will continue to work till the next few versions. Kindly change all instances, ASAP.


Used to display any media that the user has set as featured. It could be a video, audio or a photo.

For this to work, the appropriate switch will need to be turned on in **rtMedia** > **Settings** >**Types**. Read more: [rtMedia settings' types](/addons/rtmedia-pro/settings/types.md) tab.


## Arguments

### **$user_id**


(Optional, not required on user profile)

The id of the user for whom the featured media is to be fetched. For example, if an admin decides to set a media item as featured for everyone in the community, his own user id can be passed to this function.


## Example


In the default BuddyPress theme, find


    /members/single/member-header.php


Replace the following code:


    <?php if ( bp_is_active( 'activity' ) ) : ?>
    	<div id="latest-update">
    		<?php bp_activity_latest_update( bp_displayed_user_id() ); ?>
    	</div>
    <?php endif; ?>


with:


    <div id="featured-media">
    	<?php rtmedia_featured(); ?>
    </div>


And instead of the latest update, the featured media would show up!
