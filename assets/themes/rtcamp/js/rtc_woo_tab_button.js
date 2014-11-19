var rtcWooTabButton = {
                init : { forced_root_blocks: false, convert_newlines_to_brs : true },

                insert : function() {
                    if( document.getElementById('rtc_woo_tab-name').value ) {
                        // Convert linebreaks into paragraphs
                        /*jshint multistr: true */
                        var content = '[rtc-woo-tab name="'+document.getElementById('rtc_woo_tab-name').value+'"]\n\
    Your tab content goes here\n\
[/rtc-woo-tab]';
                        tinyMCEPopup.editor.execCommand('mceInsertContent', true, tinyMCEPopup.dom.encode(content));
                        tinyMCEPopup.close();
                    } else {
                        alert( 'Please Enter a tab name.' );
                    }
                    return false;
                }
        };

        tinyMCEPopup.onInit.add(rtcWooTabButton.init, rtcWooTabButton);