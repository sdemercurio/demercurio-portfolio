jQuery(window).scroll(function() {
    jQuery('.fade-in').each(function() {
        var top_of_element = jQuery(this).offset().top;
        var bottom_of_element = jQuery(this).offset().top + jQuery(this).outerHeight();
        var bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).innerHeight();
        var top_of_screen = jQuery(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !jQuery(this).hasClass('is-visible')) {
            jQuery(this).addClass('is-visible');
        }
    });
});