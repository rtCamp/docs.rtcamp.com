---
author: abhimanyu1
comments: false
date: 2011-12-19 13:48:36+00:00
layout: page
slug: implementing-rtp-slider-in-the-child-theme
title: Implementing rtp-slider in the child theme
wordpress_id: 849
---

As we are now using rtPanel as the framework for our development and you might be aware that it also provides a preset image slider, which is quite easier to use just by creating an action on the appropriate hook. So, why go googling for some other sliders like (Nivo slider, Easing slider, etc) when using rtPanel development framework.

The rtp-slider is already there in the child theme you download prior to starting your development. The basic components related to our rtp-slider that are necessarily included in the child theme lib directory are _rtp-slideshow.php_ , _rtp-cycle-slideshow.js_ and _jquery.cycle.js_. These files are already present in the child theme directory by default. The usage or rather implementation of the slider is so very simple that it hardly takes much time.

The _rtp-slideshow.php_ file has the required function**_ rtp_get_cycle_slider()_** in it. You just have to add the required query to it. Modify the markup there itself and now you are ready to insert the rtp-slider on your page. It's that easy! Like suppose I want to add the slider to the top of my homepage. I can either use the hooks to do so as:

    
    function rtp_add_slider() {
        echo rtp_get_cycle_slider();
    }
    add_action('rtp_hook_after_logo','rtp_add_slider'); //choose the appropriate hook


or, I can simply over-ride header.php file in the child theme directory and insert the php function **_rtp_get_cycle_slider()_** wherever we want the slider to be displayed. Suppose that I want it to be displayed only on the homepage. I will add the following in my header.php file as:

    
    if (is_page_template('template-home.php'))
    {
        echo rtp_get_cycle_slider(); ?>
    }
    else {
        //custom code
    }


We are now done. Refreshing the page, we can see the slider being displayed in the header exactly at the place we wanted it to be. Further stylings can be done through CSS quite easily. Also, as an added feature, you can also change the transition effects, speed and many other slider parameters just by entering their respective values in the _rtp-cycle-slideshow.js_ page. I hope this was even more easier than you would have expected.

Stay tuned as we come up with some more posts on child theme development using rtPanel framework.
