jQuery(document).ready(function() {

    var navHeight = jQuery('.navbar-fixed-top').height();

    jQuery('body').scrollspy({
        target: '#navbar-main',
        offset: 200
    });

    jQuery('#navbar-main [href=#]').click(function(e) {
        e.preventDefault()
    });

});

jQuery(document).ready(function() {
    jQuery('body').scrollspy('refresh')
});

jQuery('.navbar-default').addClass('opaqued');

var windowsHeight = $(window).height();
$('#headerwrap').css('height', windowsHeight + 'px');

$('#headerwrap').backstretch([
    "images/bg1.jpg"
], );


$(window).scroll(function() {
    if (jQuery('body').hasClass('single')) {
        var scroll_pos = 0;
        $(document).scroll(function() {
            var windowsHeight = $(window).height();
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > 300) {
                $(".navbar-default").css('background-color', 'rgba(255,255,255,1.0)');
                $('.navbar-default').removeClass('opaqued');
            } else {
                $(".navbar-default").css('background-color', 'rgba(255,255,255,0.0)');
                $('.navbar-default').addClass('opaqued');
            }
        });
    } else {
        var scroll_pos = 0;
        $(document).scroll(function() {
            var windowsHeight = $(window).height();
            scroll_pos = $(this).scrollTop();
            if (scroll_pos > windowsHeight) {
                $(".navbar-default").css('background-color', 'rgba(255,255,255,1.0)');
                $('.navbar-default').removeClass('opaqued');
            } else {
                $(".navbar-default").css('background-color', 'rgba(255,255,255,0.0)');
                $('.navbar-default').addClass('opaqued');
            }
        });
    }

});