---
title: Scroll Bar Missing in media Tab
---

In some of the themes, the scrollbar might be missing in the media tab. This issue may occur with Bootstrap based themes. Add the following CSS code in your theme's *style.css* file to fix this issue.

    
    ```css
    body.media {
        overflow-y: scroll;
    }```
