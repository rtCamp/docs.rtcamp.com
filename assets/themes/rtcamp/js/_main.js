/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
        jQuery(document).on('change', '.vc-wraper-colored-dropdown select', function(e){
            switch(jQuery(this).val()){
                case 'rtp-darkgray':
                    jQuery(this).css('background-color', '#37454D');
                    jQuery(this).css('color', '#FFF');
                    break;
                case 'rtp-lightgray':
                    jQuery(this).css('background-color', '#E1E6EA');
                    jQuery(this).css('color', '#000');
                    break;
                default:
                    jQuery(this).css('background-color', 'inherit');
                    jQuery(this).css('color', '#000');
            }
        });

        jQuery( '.rtp-search-slide .search-field' ).on( 'focus blur', function() {
            jQuery( this ).parent().parent().toggleClass( 'rtp-open-search' );
        } );

       if (location.hash !== ''){
            jQuery('a[href="#' + location.hash + '"]').tab('show');
       }

       jQuery('#rt-single-product-tab  a').click(function (e) {
          $(this).tab('show');
          window.location=jQuery(this).attr('href');
       });

       jQuery(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
            event.preventDefault();
            return jQuery(this).ekkoLightbox({});
        });

      // JavaScript to be fired on all pages
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);
})(jQuery); // Fully reference jQuery after this point.