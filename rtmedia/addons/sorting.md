## Sort Media

Users can sort their media in ascending (ASC) and descending (DESC) order based on Upload Date, Size and Titles.

![selection_064](https://cloud.githubusercontent.com/assets/1140051/7628922/0edcd98c-fa46-11e4-8594-36892a2b8137.png)


## Sort Parameters

By default **rtMedia Sorting** provides sort options to sort media by Title, Upload Date and Media Size. More sorting option like sort by views, likes, comments and rate has been added for media gallery rendered via gallery shortcode.

**Note:** This option is available in **rtMedia Sorting** only.

You can use `sort_parameters` parameter in gallery shortcode and can specify sort options.

Use following shortcode to provide view and like sort options:

``` [rtmedia_gallery global=true sort_parameters="view,like"] ```


Use following shortcode to provide view, like and rate sort options:

``` [rtmedia_gallery global=true sort_parameters="view,like,rate"] ```

Following are the allowed values for `sort_parameters`. Use comma separated values for multiple sort options.

1. **new:** Sort media based on Uploaded Date
2. **view:** Sort media based on Most Viewed
3. **like:** Sort media based on Most Liked
4. **comment:** Sort media based on Most Commented
5. **rate:** Sort media based on Most Rated

**EXAMPLE**
``` [rtmedia_gallery global=true media_type=photo media_title=false sort_parameters="view,like,rate"] ```
![sort parameters](https://cloud.githubusercontent.com/assets/9261540/7983535/04098b64-0adf-11e5-9f3f-438e410699ef.png)