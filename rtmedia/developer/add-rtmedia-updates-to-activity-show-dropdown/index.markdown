---
title: Reordering Media Tab in BuddyPress
---

If you want to reorder the position of the `Media` tab in BuddyPress, use the following piece of code:


    
    `add_action('bp_init','change_media_tab_position', 12);
    function change_media_tab_position(){
        global $bp;
        if( isset ($bp->bp_nav['media'])){
            $bp->bp_nav['media']['position'] = 70;
        }
    }`



Set the value for the position as you require.
