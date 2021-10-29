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
    $('.but1').click(function () {
        $(this).hide();
        $('.box3').show();


    })
})
//tab栏切换
var li_ = document.getElementsByClassName('a1');
var div_ = document.getElementsByClassName('b1');
for (var i = 0; i < li_.length; i++) {

    li_[i].setAttribute('index', i);

    touch.on(li_[i], 'tap', function () {
        for (var i = 0; i < li_.length; i++) {
            li_[i].className = 'a1';
        }
        this.className = 'a1 a';
        var index = this.getAttribute('index');
        for (var i = 0; i < div_.length; i++) {
            div_[i].style.display = 'none';
        }
        div_[index].style.display = 'block';
    })
}