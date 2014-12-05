---
comments: false
date: 2012-04-18 09:51:57+00:00
layout: page
slug: browser-specific-styling
title: Browser Specific Styling
---

Day by day the website design is becoming more sophisticated. To overcome this and to give website more better look, web developers are coming with idea of using CSS to control the layouts of sites.  Using CSS has many advantage such as  Web pages are easier to load, it allows you greater control of page structure etc.

But the main drawback of CSS is that, it has been a lack of browser support. For example if you are adding rounded corner of the radius '6' to the DIV, then the DIV in all browser will not have same look. In IE browser it might look less rounded than any other browser. In in this case we do the CSS styling which is Browser Specific.

In rtPanel,  the **rtp-init.php** file present in the lib folder of rtPanel theme has in-build code for browser specific class. This styling is for standard browser such as Chrome, Opera, Safari, IE and operating system such as Linux, Mac and Windows. Thus while creating theme from rtPanel we do not have to write any extra code browser specific class.

Followings are the list of CSS classes which add to body tag,

    
    <strong>OS related classes</strong>
    osx
    linux
    windows
    
    <strong>Browser related class</strong>
    lynx
    gecko
    opera
    ns4
    safari
    chrome
    ie
    ie10
    ie9
    ie8
    
    <strong>Device related class</strong>
    iphone




### Conclusion:


Thus using rtPanel or the rtPanel child theme helps us to save lots of time. It mostly reduces our time which is needed to fix the CSS styling issue which are browser specific.
