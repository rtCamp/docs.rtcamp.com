## Upload Progress for Media Remains at 0%

Users of rtMedia prior to the 3.2 core version, have often complained that media files do not get uploaded when they are selected.

It appears that the upload progress is stalled at 0%.


### The Default Behavior

Uploading of media should start after:

1. Some text is added to be included in a BuddyPress activity update.
2. The **Post Update** button in the uploader is clicked.

![Uploading media in BuddyPress updates](https://cloud.githubusercontent.com/assets/9261540/7981969/567bfe04-0ad0-11e5-8ddf-007daa35486e.png)

### Explanation


Media will get uploaded only after you post an activity update by clicking **Post Update**.

Note that this button is disabled if there is no activity text.
