$(document).ready(function () {
    var winh = $(window).height();
    $('section').css('height', winh);
    //header 영역이 화면보다 위로 이동할때 active
    //else 해제
    //window 에 scroll event 
    $(window).scroll(function () {
        //win 맨 윗값
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);

        if (scrollTop > winh) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }

        if (scrollTop < 200) {
            $('.main_txt').removeClass('active');
            $('.sub_txt').removeClass('active');
            $('.Additional').removeClass('active');
            $('.link_container a img').removeClass('active');
        } else {
            $('.main_txt').addClass('active');
            $('.sub_txt').addClass('active');
            $('.Additional').addClass('active');
            $('.link_container a img').addClass('active');
        }

        var section = $('section');
        section.each(function () {
            var divTop = $(this).offset().top;
            if (scrollTop < divTop) {
                $(this).find('div').addClass('active');
                $(this).find('.sub_dimention').addClass('active');
            } else {
                $(this).find('div').removeClass('active');
                $(this).find('.sub_dimention').removeClass('active');
            }
        });

        var subli = $('.sub_dimention').offset().top;

        if (scrollTop > subli) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }

        $('.up').click(function () {
            $('html,body').stop().animate({
                'scrollTop': 0
            });
        });
    });
    new fullpage('#fullpage', {
        //검은반점
        navigation: true,
        keyboardScrolling: true,
        anchors: ['one', 'two', 'three', 'four']
    });
});
