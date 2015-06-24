---
title: Change default title 'Site-Wide Activity'
---

### How to change 'Site-Wide Activity' title.

If you want to change title 'Site-Wide Activity', You can add following lines of code in functions.php in your child theme.

<pre>// Change activity title
add_filter( 'bp_get_directory_title', 'rtp_change_activity_title', 999 );

function rtp_change_activity_title( $title ) {
    if ( $title == __( 'Site-Wide Activity', 'InspireBook' ) ) {
        $title = __( 'News Feed', 'InspireBook' );
    }
    return $title;
}</pre>