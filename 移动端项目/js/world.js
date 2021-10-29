//导航栏
$(function () {
    $('#fenlei').click(function () {
        $('nav').stop().fadeIn()
        $(this).stop().fadeOut().siblings('#err').stop().fadeIn()
    });
    $('#err').click(function () {
        $('nav').stop().fadeOut()
        $(this).stop().fadeOut().siblings('#fenlei').stop().fadeIn()
    });

    //详情页1
    $('#look').click(function () {
        $('.xiangqing').css('display', 'block');
    })
    $('#guanbi').click(function () {
        $('.xiangqing').css('display', 'none');
    })
    //详情页2
    $('#look2').click(function () {
        $('.xiangqing2').css('display', 'block');
    })
    $('#guanbi2').click(function () {
        $('.xiangqing2').css('display', 'none');
    })
    //详情页3
    $('#look3').click(function () {
        $('.xiangqing3').css('display', 'block');
    })
    $('#guanbi3').click(function () {
        $('.xiangqing3').css('display', 'none');
    })

    //页面滚动
    var juli = 667;
    $('#jiantou').click(function () {
        $('body,html').animate({
            scrollTop: juli
        })
        $('.nav').show();
    });
    //点击导航  栏 跳转

    $('.o1').click(function () {
        var boxjuli1 = $('.juli').eq(0).offset().top;
        $('body,html').animate({
            scrollTop: boxjuli1
        });
    })

    $('.o2').click(function () {
        var boxjuli2 = $('.juli').eq(1).offset().top;
        $('body,html').animate({
            scrollTop: boxjuli2
        });
    })

    $('.o3').click(function () {
        var boxjuli3 = $('.juli').eq(2).offset().top;
        $('body,html').animate({
            scrollTop: boxjuli3
        });
    })




    //排他
    $('.nav ul div').click(function () {
        $(this).addClass('donghua').parent().siblings().children('div').removeClass('donghua');

        // console.log($(this).index());

        // var boxjuli = $('.juli').eq(0).offset().top;
        // $('body,html').animate({
        //     scrollTop: boxjuli
        // });

    });











    // var look = document.getElementsByClassName('box2');
    // var guanbi = document.getElementById('guanbi');
    // var xiangqing = document.getElementsByClassName('xiangqing')[0];
    // touch.on(look, 'swiperight', function () {
    //     xiangqing.style.dislpay = 'block';
    // })
});

