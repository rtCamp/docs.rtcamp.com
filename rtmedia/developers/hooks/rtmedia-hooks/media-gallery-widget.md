## rtMedia Sidebar Widgets Hooks

rtMedia Sidebar add-on has widget to display media in sidebar.

rtMedia Sidebar Widgets add-on has provided hooks:

**Before Media**

```php
<?php do_action ("rtmedia_gallery_widget_before_media", $rt_media_gallery );?>
```
**After Media**
```php
<?php do_action("rtmedia_gallery_widget_after_media",$rt_media_gallery);?>
```

Apply this hook in current theme's **function.php** file.

example: To show title of each media in sidebar widget,

```php
add_action("rtmedia_gallery_widget_before_media", "my_widget_rtmedia_title",10,1);

function my_widget_rtmedia_title($rt_media_gallery) {
echo $rt_media_gallery->media_title;
    }
```


That's it. Now you can see the title of uploaded media in sidebar widget.

![Selection_103](https://cloud.githubusercontent.com/assets/9261540/7981406/560ba6bc-0acc-11e5-818b-5c5257985782.png)
