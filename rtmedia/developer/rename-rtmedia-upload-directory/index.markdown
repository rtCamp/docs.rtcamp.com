---
author: Pranali Patel
comments: false
date: 2014-09-03 10:13:47+00:00
layout: page
slug: rename-rtmedia-upload-directory
title: Rename rtMedia upload directory
---

Add following code in your theme's functions.php file to rename **rtMedia** upload directory.

    
    <code>function rename_rtmedia_upload_folder_name( $folder_name ) {
         $folder_name = 'YourMedia';
         return $folder_name;
    }
    add_filter( 'rtmedia_upload_folder_name', 'rename_rtmedia_upload_folder_name', 99, 1 );</code>



