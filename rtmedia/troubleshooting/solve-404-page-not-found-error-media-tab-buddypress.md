## 404 - Page Not Found Error on Clicking the Media Tab


### The Problem


You have just installed rtMedia. You get a_ Page Not Found_(404) error message on trying to access the media tabs.

[![Clicking the media tab results in a 404 Page Not Found, sometimes.](https://rtcamp.com/wp-content/uploads/2013/07/ClickingMediaTabResultsIn404.png)](https://rtcamp.com/wp-content/uploads/2013/07/ClickingMediaTabResultsIn404.png)


### The Solution


rtMedia uses a custom permalink structure. To use rtMedia, [pretty permalinks](http://codex.wordpress.org/Using_Permalinks) must be enabled. First check if they are enabled.

When rtMedia is freshly installed, it refreshes WordPress's permalinks, automatically. At times, this does not happen and you have to manually refresh them. To do so, go to, **Settings >> Permalinks** and just **Save Changes**. This will refresh the permalink settings and rtMedia custom permalinks will start working with WordPress.

[![Permalink settings](https://rtcamp.com/wp-content/uploads/2013/07/permalinkSettingsWordPress.png)](https://rtcamp.com/wp-content/uploads/2013/07/permalinkSettingsWordPress.png)

**Note:**

If the media tabs still display the 'page not found' error, the problem is usually another plugin that also uses custom permalinks. If such a plugin does not follow the standard hooks and actions provided by WordPress, it can break rtMedia's permalink structure.

Check if a plugin is causing such a conflict. Use this [Conflict Diagnosis Guide](conflict-diagnosis-guide-wordpress-plugins.md).

If it still persists, [contact support](http://community.rtcamp.com/category/rtmedia/) with details.
