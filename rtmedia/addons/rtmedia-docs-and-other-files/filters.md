## Filters

* [rtm_other_file_js_strings](#rtm_other_file_js_strings)
* [rtmedia_other_type_slug](#rtmedia_other_type_slug)
* [rtmedia_documents_slug](#rtmedia_documents_slug)
* [rtmedia_disable_google_doc_service](#rtmedia_disable_google_doc_service)
* [rtmedia_other_files_document_other_files_list_date_filter](#rtmedia_other_files_document_other_files_list_date_filter)
* [rtm_docs_file_add_column](#rtm_docs_file_add_column)

###description

* ####rtm_other_file_js_strings <a name="rtm_other_file_js_strings"></a>
***
Filter to modify js messages for docs-other-files plugin.
```php
add_filter('rtm_other_file_js_strings', 'rtmedia_other_file_js_strings' );

function rtmedia_other_file_js_strings ( $rtmedia_other_files_main_js ) {
	$rtmedia_other_files_main_js['rtmedia_file_not_deleted'] = 'Enable to delete document.';
	return $rtmedia_other_files_main_js;
}
```

* ####rtmedia_other_type_slug <a name="rtmedia_other_type_slug"></a>
***
Filter to modify Creates slug for other type files.
```php
add_filter( 'rtmedia_other_type_slug', 'rtm_other_type_slug', 10, 1 );

function rtm_other_type_slug ( $slug ) {
	return 'other';
}
```

* ####rtmedia_documents_slug <a name="rtmedia_documents_slug"></a>
***
Filter to modify slug for document type files.
```php
add_filter( 'rtmedia_documents_slug', 'rtm_documents_type_slug', 10, 1 );

function rtm_documents_type_slug ( $slug ) {
	return 'document';
}
```

* ####rtmedia_disable_google_doc_service <a name="rtmedia_disable_google_doc_service"></a>
***
Filter to modify **google docs service disabled message**.
```php
add_filter( 'rtmedia_disable_google_doc_service', 'rtm_disable_google_doc_service', 10, 1 );

function rtm_disable_google_doc_service ( $msg ) {
	return __( 'Docs service has been disabled. This file can\'t be loaded.', 'rtmedia' ) ;
}
```

* ####rtmedia_other_files_document_other_files_list_date_filter <a name="rtmedia_other_files_document_other_files_list_date_filter"></a>
***
Filter to modify documents and other file uploaded date in **Table style list**.
```php
add_filter( 'rtmedia_other_files_document_other_files_list_date_filter', 'rtm_other_files_document_other_files_list_date_filter', 10, 1 );

function rtm_other_files_document_other_files_list_date_filter ( $date_time ) {
	return $date_time;
}
```

* ####rtm_docs_file_add_column <a name="rtm_docs_file_add_column"></a>
***
Filter to add new column in **table view style** for document and other file types.
Below example is to add column for **Type of file** in table view style.
```php
add_filter( 'rtm_docs_file_add_column', 'rtm_docs_file_add_column_type', 10, 1 );
/**
 * This function is to add column heading, class and callback function.
 */
function rtm_docs_file_add_column_type( $column ) {
    $column = array('columns' => 'Type',
                    'class' => 'rtmedia-list-document-td-size',
                    'callback' => 'rtmedia_render_docs_type_content',
                    );
    return $column;
}

/**
 * This function is callback function for new column added using filter.
 */
function rtmedia_render_docs_type_content( $media_id ) {
    $type = rtmedia_media_ext( $media_id );
echo '<td data-value="'. $type .'">'. $type .'</td>';
}
```
