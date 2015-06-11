##  Migration from BuddyPress-Media 2.x to rtMedia 3.x

Follow this guideline for migrating content smoothly from BuddyPress-Media 2.x to rtMedia 3.x.

**Caution: Ensure that your WordPress database has been backed up before starting the migration.**

1. rtMedia needs two database tables i.e. *wp_rt_rtm_media* and *wp_rt_rtm_media_meta*. If it fails to create them, migration will NOT work.
2. rtMedia migration is designed to run forever if the browser tab is kept open. To speed up migration, please deactivate other plugins.
3. Apart from speed issues, other plugins can also interfere in the migration process.
4. If you have a live site, create a test site with live data to first test the migration script.
5. Make sure the test site has exactly the same server environment, permission and configuration. Otherwise, what works on the test site may fail on the live site.


![migration](https://cloud.githubusercontent.com/assets/9261540/7981784/dd52b014-0ace-11e5-8c60-2cd22fb5f4dc.png)
