$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        autoPlay: 10000,
        center: true
    });

    $('.carousel').carousel({
        interval: 7000,
        pause: false
    })





    if ($(window).width() > 700) {
        $(window).scroll(function () {
            $(".slideanim").each(function () {
                var pos = $(this).offset().top;

                var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                    $(this).addClass("slide");
                }
            });
        });
    } else {
        $(".slideanim").removeClass("slideanim");
    }




});