---
comments: false
date: 2014-03-05 06:48:32+00:00
layout: page
slug: customize-rtpanel-grid
title: Customize rtPanel Grid
---

**Important:** Before starting with this tutorials, make sure you have [setup rtPanel](http://docs.rtcamp.com/rtpanel/developer/setup-rtpanel-development/) with its dependencies on your local system.

rtPanel grid is built using [Foundation](http://foundation.zurb.com/docs/components/grid.html), **rows** and **columns** are the key elements in grid. Rows create a max-width and contain the columns, columns create the actual structure. For layouts to work properly, always put your page content inside a `row` and a `column`.

![rtPanel_Grid_System](https://rtcamp.com/wp-content/uploads/2014/02/rtPanel_Grid_System.jpg)

In rtPanel, we have set row width, column gutter and total column **ONLY** and its generate grid system for us. Following is the code we used in `_settings.scss` file,


    
    $row-width: rem-calc(1200); /* Set row width */
    $column-gutter: rem-calc(20); /* Set column gutter width */
    $total-columns: 12; /* Set total columns */



In rtPanel, you can check this code in  `/assets/rtpanel/scss/_settings.scss` file.

Say suppose, you want to change site width to 1024px as per your design layout, simply change the value of `$row-width` variable. After changing width, `grunt` will re-generate columns width.

You can also reduce the space between two grids (gutter width) by changing the value of `$column-gutter` variable, it will also follow the same process as mentioned for $row-width variable.

Its recommended to NOT change the value of `$total-columns` variable. By default rtPanel support 12 column layout only.

Using this method no need to set width for each section like content, sidebar, footer etc. Also, it will work fine in mobile device, without editing any grid class.

**Note:** Do not add fixed width for any grid class, otherwise it will break your grid system, also make sure `grunt` command is running in backend (terminal) to re-generate grid.
