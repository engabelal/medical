//resize carousal screen view

$(function () {

    'use strict';
    var winh = $(window).height(),
        upperh = $('.infoBar').innerHeight(),
        searchh = $('.navbar').innerHeight(),
        x = $('.ay').
    navh = $('.main-nav').innerHeight();
    //        if (screen.width >= 600) {
    // $('.carousel ,.carousel-item').height(winh - (upperh + navh + searchh));
    //        }

    // Navbar Change


    $(window).on("scroll load resize", function () {
        var
            wS = $(this).scrollTop();
        if (wS >= upperh) {
            $('.infoBar').css('display', 'none');
            $('.fixed-top').css('top', '0');
            $('.navbar').addClass("scrolled").removeClass('bg-light');

        } else {
            $('.infoBar').css('display', 'block');
            $('.fixed-top').css('top', upperh);
            $('.navbar').removeClass("scrolled").addClass('bg-light');

        }
    });

    if ($(window).width() <= 990) {
        $('.mainSlider').css('padding-top', searchh + upperh);

    }

 

    var boxh = $('.top-d-first').innerHeight();
    $('.top-d-third').css('height', boxh);
})

//------------------