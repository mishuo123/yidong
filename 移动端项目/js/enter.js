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











var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');



//用户名
input1.addEventListener('blur', function () {
    var reg = /^[\w\u4e00-\u9fa5]{6,12}$/;
    if (input1.value == '') {
        p1.innerHTML = '不能为空';
        p1.style.color = 'red';
    } else {
        p1.style.color = 'green';
        p1.innerHTML = '账号可用';
    }
})
//密码框
input2.addEventListener('blur', function () {
    var reg1 = /^\w{6,12}$/;
    var reg2 = /^\d+$/;//全部为数字
    var reg3 = /^[a-z]+$/i;//全部是字母  i代表部分大小写
    if (input2.value == '') {
        p2.innerHTML = '不能为空';
        p2.style.color = 'red';
    } else {
        p2.innerHTML = '请尝试登录';
        p2.style.color = 'green';
    }
})