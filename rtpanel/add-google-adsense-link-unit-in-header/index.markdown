---
excerpt: Google Ad-sense Link unit in the header section of the rtPanel child theme,
  which looks some thing like we have done in the Devils' Workshop.
title: Add Google Adsense Link Unit In Header
---

Majority of bloggers and other content based sites rely on Google Ad-sense for generating revenues through their websites. And it's a good practice to blend the Google ads with the site's content.

Here, in this post, we will be demonstrating the addition of **Google Ad-sense Link unit** in the header section of the rtPanel child theme, which looks some thing like we have done in the [Devils' Workshop](http://devilsworkshop.org/).

[![](https://rtcamp.com/wp-content/uploads/2012/02/Google-Adsense1.png)](https://rtcamp.com/wp-content/uploads/2012/02/Google-Adsense1.png)

All you need to do is,



	
  * Install the [rtPanel Theme Framework](http://wordpress.org/extend/themes/download/rtpanel.2.0.8.zip)

	
  * Install the [rtPanel child theme](https://github.com/rtCamp/rtpanel-child-theme/downloads)

	
  * _Activate the rtPanel child theme_


In the rtPanel child theme, you will find the _'lib_' directory. Open the _rtp-custom-hooks-applied.php_ file in the '_lib_' directory and create a function something like:

    
    function rtp_google_ad_link_header() {
      $google_ad_unit = '  [ADD YOUR SNIPPET FOR THE GOOGLE AD LINK UNIT HERE]  ';
      echo $google_ad_unit;
    }


Next, we create the action at the [appropriate hook](https://rtcamp.com/rtpanel/docs/developer/). Going specific to the current topic, we want the Google Ad Link Unit to be added up in the header section after the logo. So I proceed as:

    
    add_action('rtp_hook_after_header','rtp_google_ad_link_header',1);


There it is! We have successfully added the **Google Ad Link Unit** in the header. Further blending with the content can be easily handled using CSS.

For any doubt about adding Google Ad Link Unit to your rtPanel theme, ask your questions on our [support forum.](https://rtcamp.com/support/forum/rtpanel/forum/user/)


