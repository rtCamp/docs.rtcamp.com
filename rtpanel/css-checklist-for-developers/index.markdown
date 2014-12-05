---
author: sagar.jadhav@rtcamp.com
comments: false
date: 2011-12-28 13:19:02+00:00
excerpt: 'Before you actually start with styling, just analyse the common elements
  in your theme and prepare your selectors that ways. It will eventually reduce the
  redundancy in css.

  So plan before you write any of the css code.'
layout: page
slug: css-checklist-for-developers
title: CSS Checklist for developers
---

### CSS Checklist for Developers


Before you actually start with styling, just analyse the common elements in your theme and prepare your selectors that ways. It will eventually reduce the redundancy in css.
So plan before you write any of the css code.


#### Validation


Theme is recommended to utilize current recognized version(s) of (X)HTML and CSS, and to test you can use one of the following methods:



	
  * W3C XHTML+CSS Validator (Unicorn) ( recommended )

	
  * W3C XHTML Validator + W3C CSS Validator




#### Very Important Things





	
  * Don't use inline style! (it's redundant, slower, chaotic and easier to make mistakes.)

	
  * Don't use tables for anything other than displaying data in an orderly way.

	
  * Don't use a ‘clearfix-div’ or ‘<div class=”clear”>’ if you can use a overflow:hidden;

	
  * Don’t add extra markup, extra classes/IDs.

	
  * Mouse-hover effect should be present for all links.

	
  * Remove Blank classes/IDs declaration i.e #header { } from your style.

	
  * No special characters in classes and ids.

	
  * Avoid the ‘! important’ in your style. Use the proper specificity.

	
  * If you are using position: absolute; then make sure its recent parent container ( Or the container to whom you want the absolute element to be relative with ) has position: relative;




####  Naming Convention





	
  * Giving precise and clear class names to your elements is a key. This will seriously avoid confusion & let you understand your CSS better and faster.

	
  * Name of classes/IDs based on function, not appearance.

	
  * Use classes instead of ids whenever possible.

	
  * Separate class names by dashes. e.g ‘footer-copyright’

	
  * Note: Avoid names like ‘footerCopyright’, ‘FooterCopyRight’, or ‘footer_copyright’


For more information see following article
[https://wiki.jasig.org/display/UPC/Markup+and+CSS+Naming+Conventions](https://wiki.jasig.org/display/UPC/Markup+and+CSS+Naming+Conventions)


#### Fonts





	
  * Always specify a fallback generic font.

    
    body { font-family: "Gill Sans", sans-serif; }




	
  * Check the font is whether web-safe or not. If font is not web-safe then used following site for font face generator. [http://www.fontsquirrel.com/fontface/generator](http://www.fontsquirrel.com/fontface/generator)

	
  * Use numbers (Hex color), not names, for colors.

    
    body { color : #FF0000; }




	
  * Use font size in percent (%). for more info about font size please check following article. [http://kyleschaeffer.com/best-practices/css-font-size-em-vs-px-vs-pt-vs/](http://kyleschaeffer.com/best-practices/css-font-size-em-vs-px-vs-pt-vs/)




####  Sprites


Combining all background images into one single image and displaying them using background positions is what we call CSS Sprites.

CSS Sprites reduces the number of HTTP requests, saves bandwidth and loads faster. Also avoids image flicker [eg: mouse-over a button which loads another background image causes a flicker in systems running on low internet speed].

The best and a popular example of a CSS Sprite would be [http://www.apple.com/](http://www.apple.com/)


#### Shorthand


Shorthand in CSS is where you define several properties of the same kind as one single property.
CSS Shorthand makes development much easier and keeps your CSS clean, short & accessible.
e.g For Padding refer below example,

    
    .classname { padding: 5px 8px 2px 4px; }


Instead of using,

    
    .classname {
    padding-top: 5px;
    padding-right: 8px;
    padding-bottom: 2px;
    padding-left: 4px;
    }


Colors Shorthand

Using shorthand colors is entirely legal, like so:

    
    body { color: #222; }




#### Specificity


[Selector specificity](http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/) is a process used to determine which rules take precedence in CSS when several rules could be applied to the same element in markup.

In simple words, every CSS selector has some kind of weight associated with it. The sum of all the weights in the selector determines its priority in the document. Specificity helps a lot when it comes to huge CSS documents.


#### Hacks


Even a perfect CSS will not generate an identical output in all the browsers. Its the browser that interprets your CSS in different ways. EOD, if you need a site to look the same on all the browsers, you have to use [CSS Hacks](http://www.webdevout.net/css-hacks).

I agree that using CSS Hacks will result to errors in CSS Validation. An alternate to this is to have a separate browser specific CSS and include it in the HTML using conditional tags.

This way your master CSS is valid and the IE specific is also valid but overrides the master only in IE.


#### Comments


We all love to read other people's code comments. Writing our own comments is probably not as fun, but is highly encouraged in the name of maintainability.

When you comment, use the

    
    /* comment here */


style, you can put the short description about css.

Just like for the sidebar style you can put

    
    /* Sidebar Style */


Organise your CSS



	
  * Remove unnecessary code and empty spaces from your style.

	
  * Group selectors with common CSS declarations.

	
  * Avoid quoting URLs.

	
  * Ordering of declarations, The best way to order declarations is alphabetically, it makes it far easier to scan through and visually locate a specific declaration, especially in large rules.


e.g

    
    #content-wrapper {
    background: url("img/rtp-content-sep.jpg");
    border: 3px double #DDDDDD;
    clear: both;
    height: 100%;
    overflow: hidden;
    padding: 0 5px;
    position: relative;
    z-index: 10;
    }


Useful article on for Better CSS Coding:

[http://coding.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/](http://coding.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/)

[http://www.dezinerfolio.com/2009/02/20/css-standards-best-practices](http://www.dezinerfolio.com/2009/02/20/css-standards-best-practices)


#### Regarding rtPanel child theme:


Where you want to overwrite rtpanel style use only those properties which you want to overwrite.
If you want or remove border from sidebar then see following example.
e.g rtPanel style:

    
    #sidebar { border-left: 1px solid #DDD;
    float: right;
    padding: 12px 0 12px 9px;
    width: 315px;
    }


rtPanel-child theme style:

    
    #sidebar { border-left: 0; }


Also don’t forget to add semi colon (;) after attribute and property declaration.

    
    body { font-family: Arial, Helvetica, sans-serif; }


Check following articles for more info :

**Wordpress CSS Coding Standards**
[http://codex.wordpress.org/CSS_Coding_Standards](http://codex.wordpress.org/CSS_Coding_Standards)

**Default WordPress Generated CSS Cheat Sheet**
[http://www.wpbeginner.com/wp-themes/default-wordpress-generated-css-cheat-sheet-for-beginners/](http://www.wpbeginner.com/wp-themes/default-wordpress-generated-css-cheat-sheet-for-beginners/)

**Cross-Browser CSS Coding**
[http://coding.smashingmagazine.com/2010/06/07/the-principles-of-cross-browser-css-coding/](http://coding.smashingmagazine.com/2010/06/07/the-principles-of-cross-browser-css-coding/)

**CSS Selectors and Pseudo Selectors**
Try to use Pseudo Selectors, it will save your time while developing a website.
For Pseudo selectors and their Browser compatibility, refer below links.
[http://kimblim.dk/css-tests/selectors/](http://kimblim.dk/css-tests/selectors/) or
[http://www.quirksmode.org/css/contents.html](http://www.quirksmode.org/css/contents.html)

**Follow the following sites for CSS Updates:**
[http://www.css3.info/](http://www.css3.info/)
[http://css-tricks.com/](http://css-tricks.com/)
[http://uxdesign.smashingmagazine.com/](http://uxdesign.smashingmagazine.com/)
[http://inspectelement.com/](http://inspectelement.com/)
[http://www.webdesignerdepot.com/](http://www.webdesignerdepot.com/)

Following the above check-list will ensure that website development has been perfect and no design or CSS issues remain on it. Please note that the list covers most of the CSS issues based on our experience, however we would welcome more suggestions from you to make the check-list more robust.

Cheers.
