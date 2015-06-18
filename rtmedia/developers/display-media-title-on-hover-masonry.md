## Display Media Title On Hover For Masonry View

rtMedia 3.8 is having some major UI changes. Out of all, one minor change is the way media title displays with masonry view.

Option needs to be enabled - `Enable Masonry Cascading grid layout` from Display settings under rtMedia admin settings:

[![masonry-view-admin-setting](https://cloud.githubusercontent.com/assets/7771963/8182385/9b7e49a0-144c-11e5-8a8e-a081488d6491.png)](https://cloud.githubusercontent.com/assets/7771963/8182385/9b7e49a0-144c-11e5-8a8e-a081488d6491.png)


### Current View
Latest version of rtMedia displays media title right below the media as shown:


[![masonry-view-title-below-media](https://cloud.githubusercontent.com/assets/7771963/8182358/41563a64-144c-11e5-99a0-e04fc06f1324.png)](https://cloud.githubusercontent.com/assets/7771963/8182358/41563a64-144c-11e5-99a0-e04fc06f1324.png)

### Previous View
With older versions we were used to display it on media hover like this:

 [![masonary-media-title-on-hover](https://cloud.githubusercontent.com/assets/7771963/8182416/d3c34f4a-144c-11e5-8d55-8c6a430cb053.png)](https://cloud.githubusercontent.com/assets/7771963/8182416/d3c34f4a-144c-11e5-8d55-8c6a430cb053.png)

### Revert back to previous view
 If you still want to keep the previous behavior with updated version, you can add below piece of code into Custom Css tab under rtMedia admin settings:

```css
.masonry .rtmedia-item-title {
display:none;position: absolute;bottom: 0;background-color: rgba(0,0,0,0.5);
padding-top: 5px; padding-bottom: 10px;
}
.masonry .rtmedia-item-title h4 { color:white !important; }
.masonry li:hover .rtmedia-item-title { display:block; }
```
