## Conflict Diagnosis Guide for WordPress Plugins


### What is Conflict?


There are many plugins and themes in the WordPress ecosystem. At times, multiple plugins try and modify the same feature in WordPress. WordPress recommends using the Hooks, Actions and Filters so that these can work in a coordinated way and minimize conflicts.

However, a lot of plugins and themes by inexperienced authors, for various reasons do not follow the standard recommended methods. Due to this, a poorly written plugin or theme can break functionality of other plugins. In effect, there is a conflict between the two (plugin or theme).


### JavaScript Conflicts


Many themes and plugins need to add JavaScript on the front end, the dashboard or both. Again, there are standard methods for this (for example, *wp_enqueue_script*). Some plugins and themes, do not follow the standards for various reasons, due to which some expected functionality breaks.

More problematic is when JavaScript code has an error(s). An error in JavaScript prevents anything after that to run. If the JavaScript code added by one plugin has an error, the execution of the code will stop. Subsequent scripts loaded by any other plugin or theme will not be run and the functionality breaks.


### Find the Source


This is useful, especially in case of JavaScript. By looking at the console, you might be able to locate the file that is throwing the error. If the file is inside a particular plugin or theme's directory, you know the offending one. However, you might have to toggle debug mode in WordPress to pinpoint such errors. This requires a bit of technical know-how and modifications to *wp-config.php*.

See more on [Debugging in WordPress](http://codex.wordpress.org/Debugging_in_WordPress)[
](http://codex.wordpress.org/WP_DEBUG)


### Isolating the Culprit


The other, simpler, but more time consuming method is this:

* Disable all the plugins except the plugin that is having problems.
* If the problem persists, switch to a default 'twenty-...' series theme.
* If the problem still persists, it is most likely not a conflict. Contact the plugin developer(s) with details of the problem.
* If the problem disappears, after switching to the default theme, there is a conflict with your theme. Contact both the teams to get this fixed.
* If the problem disappears immediately after disabling all the remaining plugins, even before switching to a default theme, use the following steps:

 * Enable one plugin, check if the problem comes back.
 * If the problem still does not reappear, disable this plugin and enable the next plugin.
 * Check if the problem reappears.
 * Repeat the cycle till the problem reappears. Once that happens, you know the conflicting plugin. Contact authors of both the plugins.

### This Does Not Help. What Else Can I Do?

Unfortunately, beyond this, there are no general steps or processes that can identify and resolve conflicts. After this, you really need to have technical know-how to diagnose the conflict. Doing that is a whole art form and requires expertise beyond the scope of a one page tutorial. You will have to hire a professional.
