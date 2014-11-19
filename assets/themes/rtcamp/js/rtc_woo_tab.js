(function() {
    tinymce.create('tinymce.plugins.rtc_woo_tab_button', {
        init : function(d, url) {
                    var theme_url = url.replace('/js', '');
                    d.addButton('rtc_woo_tab_button', {
                        title : 'rtC Woo Tab Button',
                        image : theme_url+'/img/tab.gif',
                        cmd : 'mcertcWooTabButton'

                    });
                    d.addCommand("mcertcWooTabButton",function(){d.windowManager.open({file:theme_url+"/js/rtc_woo_tab_button.html",
                        width:'500px',
                        height:'100px',
                        inline:1});
                    });
                },
        createControl : function(n, cm) {
                            return null;
                        },
        getInfo : function() {
                        return {
                            longname : "rtcWooTabButton",
                            author : 'rtCamp',
                            authorurl : 'http://rtcamp.com/',
                            infourl : 'http://rtcamp.com/',
                            version : "1.0"
                        };
                    }
    });
    tinymce.PluginManager.add('rtc_woo_tab_button', tinymce.plugins.rtc_woo_tab_button);
})();