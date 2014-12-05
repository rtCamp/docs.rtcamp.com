---
date: 2012-03-30 10:14:47+00:00
excerpt: In previous post, we have seen the rtPanel Hooks map. Now lets see how we
  can we use 'rtPanel Hooks' to add extra functionality while developing theme.
title: Add Google ad-banner above logo in rtPanel
---

In [previous post](https://rtcamp.com/blog/hooks-rtpanel-child-theme/), we have seen the rtPanel Hooks map. Now lets see how we can we use 'rtPanel Hooks' to add extra functionality while developing theme.


### Example - Adding Google-ad banner to rtPanel Child Theme  above logo:




### Step 1:


At first we will create a custom field (textarea) in the custom theme option. So that when google ads script is added to that field, the google ads will appear before logo of the site. The custom field can be defined in the file 'rtp-custom-theme-options.php' which is under the lib folder of Child theme of rtPanel. (learn more about - [custom theme options in rtPanel](https://rtcamp.com/blog/custom-theme-options-rtpanel-child-theme/))


### Step 2:


Once textarea field is created, we will add the google ads script to this textarea. Now first we will create custom function as "rtp_google_ads" in the 'function.php' which is present in the child theme folder. This is to display the google-ads.

    
    function rtp_google_ads(){
        global $rtp_custom_theme_options;
        echo $rtp_custom_theme_options['google_ads'];
    }


So once function is created, we need to “hook” the function to the 'rtp_hook_before_logo' action hook so that Google ad will be displayed before the logo. So the code will be as below:

    
    add_action('rtp_hook_before_logo','rtp_google_ads');




After adding this code the google ads will be displayed before the logo. It is show in below screenshot.




[![](https://rtcamp.com/wp-content/uploads/2012/02/google-ads-600x226.jpg)](https://rtcamp.com/blog/roundup-4-portals-and-1-blog-launched-by-rtcamp-in-2010/)





### Step 3:


Once google ad is displayed we will add style it according. This can be done by adding CSS styling to the 'style.php' file in the child theme folder.

Isn't it pretty easy to add our own functionality to the theme!!! :)

This is just a small example to demonstrate how our 'rtp_hook_before_logo' can be used. But there are many more things that can be achieved using this hook, as long as your creativity will not end. Some example usages are adding social networking icons, adding images, adding search textbox etc.

Do let us know, your creative usages of rtPanel Hooks via comments.
