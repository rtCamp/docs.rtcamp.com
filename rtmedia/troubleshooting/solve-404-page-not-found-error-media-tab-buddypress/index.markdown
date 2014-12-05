---
date: 2013-07-30 04:59:46+00:00
excerpt: Clicking on the Media tab on a BuddyPress profile on having installed the
  rtMedia plugin may result in a 404. Refresh the permalink structure to fix this.
slug: solve-404-page-not-found-error-media-tab-buddypress
title: 404 - Page not found error on clicking media tab
---

## The problem


You've just installed rtMedia. You get a_ Page Not Found_(404) error message on trying to access the media tabs.

![Clicking the media tab results in a 404 Page Not Found, sometimes.](https://rtcamp.com/wp-content/uploads/2013/07/ClickingMediaTabResultsIn404.png)


## The solution


rtMedia uses a custom permalink structure. To use rtMedia [pretty permalinks](http://codex.wordpress.org/Using_Permalinks) must be enabled. So first check if they are enabled.

When rtMedia is freshly installed, it refreshes WordPress's permalinks, automatically. At times, this doesn't happen and you'd have to manually refresh them. To do so, go to, **Settings >> Permalinks** and just **Save Changes**. This will refresh the permalink settings and rtMedia custom permalinks will start working with WordPress.

![Permalink settings](https://rtcamp.com/wp-content/uploads/2013/07/permalinkSettingsWordPress.png)

***Note: **

If the media tabs still display 'page not found' error, it is usually another plugin that also uses custom permalinks. If such a plugin doesn't follow the standard hooks and actions provided by WordPress, it can break rtMedia's permalink structure.

Please check if a plugin is causing such a conflict. Use this [Conflict Diagnosis Guide](https://rtcamp.com/rtmedia/docs/troubleshooting/conflict-diagnosis-guide-wordpress-plugins/).

If it still persists, please [contact support](https://rtcamp.com/support) with details.
