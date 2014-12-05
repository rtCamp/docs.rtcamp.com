---
date: 2014-11-19 09:13:28+00:00
slug: customize-slide-panel-menu-bar
title: Customize slide panel menu bar
---

InspireBook slide panel menu bar can be customize with hooks. We have provided following hooks, so it can be easy to make changes.

![slide-hooks](http://docs.rtcamp.com/wp-content/uploads/2014/11/slide-hooks.png)


## rtp_hook_begin_slide_panel :**
**


You can insert content at starting of menu bar. Following the example of use case.

`function rtp_test() {
echo 'test';
}
add_action( 'rtp_hook_begin_slide_panel', 'rtp_test' );`


## rtp_hook_end_slide_panel :**
**


You can insert content at the end of menu bar. Following the example of use case.

`function rtp_test() {
echo 'test';
}
add_action( 'rtp_hook_end_slide_panel', 'rtp_test' );`

**Note:** If you want to add some content after/bellow logo, just need to add priority to the hook.

`add_action( 'rtp_hook_begin_slide_panel', 'rtp_test', 99 );`
