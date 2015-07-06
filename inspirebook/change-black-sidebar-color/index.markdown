---
title: Change Black Sidebar Color
---

If you want to change the color of right sidebar from black to any other color, use below css code under Inspirebook -> Settings -> Custom Code.

![selection_208](https://cloud.githubusercontent.com/assets/1140051/8516690/39c3cc56-23d5-11e5-83e0-5f345fbd65c2.png)


Note: Change the color code as per your need.

<code> .rtp-slide-panel { background-color: #fff !important; }
.rtp-nav-container a { color: #333 !important; }
.rtp-site-logo.rtp-site-logo a, .rtp-site-logo.rtp-site-logo a:hover { color: #333; }
.rtp-nav-container li { border-bottom: 1px solid rgba(0,0,0,0.08); }

.rtp-nav-container a:hover, .rtp-nav-container a:focus { background: #f5f5f5 !important; }

.rtp-nav-container [class*="inspirebook-icon-"]:before { color: rgba(0,0,0,0.4); }

.rtp-nav-container ul { background: #f5f5f5 !important; }

.rtp-nav-container li:hover>a { background: #f5f5f5 !important; }
.current-menu-item>a, .current-menu-ancestor>a, .current-menu-parent>a, .current_page_ancestor>a, .current_page_item>a {
  background: #f5f5f5 !important;}
</code>

