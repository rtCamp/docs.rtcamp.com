---
title: Adding rtMedia updates to activity show dropdown
---

If you want to add rtMedia updates in activity's `show` dropdown, use the following piece of code in your function.php file:

	`add_filter('bp_get_activity_show_filters_options', 'add_media_show_filter', 10, 2);

	function add_media_show_filter( $filters, $context ){
		$filters['rtmedia_update'] = 'rtMedia Updates';
		return $filters;
	}`

