---
author: abhimanyu1
comments: false
date: 2011-12-13 13:23:12+00:00
excerpt: Child themes are extension of parent theme, which can be further customized
  without affecting the core codes of parent theme or theme framework (for example
  rtPanel).
layout: page
slug: child-theme-development-using-rtpanel-part-i
title: Child Theme development using rtPanel - Part I
---

Being a WordPress theme framework; rtPanel carries the functionality of developing child themes.

Child themes are extension of parent theme, which can be further customized without affecting the core codes of parent theme or theme framework (for example rtPanel). You can read more about child theme in our earlier post: [rtPanel Child Theme Released](https://rtcamp.com/blog/child-theme-rtpanel/)

rtPanel serves as the parent and as well as the framework for the child themes we develop, with several custom hooks and filters to add to the elegance.  Just to allow more flexibility, [hooks](https://rtcamp.com/rtpanel/docs/developer/#rtpanel-hooks) have been added to the rtPanel. So in future if the rtPanel developers update their core code, the child theme customizations still remain intact, which otherwise could have been lost.

To make the development process further easy, we have recently provided a custom plugin for rtPanel - [rtPanel Hooks editor.](https://rtcamp.com/blog/rtpanel-hooks-editor/)

Now, let's know how the parent child duo works out.


#### Styling the Child Theme:


We start with installing whatever our parent theme is. Therefore we go to Appearance > Themes on the backend and Search for rtPanel. Install it and done! We have our rtPanel parent theme ready.

Now, the most important component of a child theme is the **style.css**, which must start with the information header followed by the `@import` rule as shown:

    
    /*
    Theme Name: TASC Design
    Template: rtpanel
    Version: 1.0
    Author: rtCamp
    Author URI: http://rtcamp.com
    Contributor: User-Name,rtCamp
    */
    
    @import url("../rtpanel/style.css");


Note: You can change the User-Name with your name also ;)

The @import rule has been used to include the default styling provided by rtPanel into your own style.css. That is, if your style.css contains only the lines mentioned above, activating the child theme will show the same layout design as would show if activating the parent theme instead. So now we can start overriding the default rtPanel stylings as and when needed, without writing the complete styling for your child theme. That means override the ones you need to and leave out those you don't.

In case, we have provided a sample child theme with some options [here](https://github.com/rtCamp/rtpanel-child-theme/downloads), so you can take a look, analyze and start your own child theme development.

Tune-in for our further posts about using functions.php and template.css, where we will be providing you with some examples and snippets on using actions, hooks and filters.
