//banner轮播图

var mySwiper = new Swiper('.swiper-container', {
    autoplay: 4000,//可选选项，自动滑动effect : 'flip',
    speed: 1500,
    effect: 'flip',
    flip: {
        slideShadows: true,
        limitRotation: true
    }
});


//goTop
$(".goTop").click(function () {
    var T = $(window).scrollTop();
    var t = setInterval(function () {
        if (T <= 0) {
            T = 0;
            clearInterval(t);
        }
        else {
            T -= 10;
            $(window).scrollTop(T);
        }

    }, 10);
});


//menu 动画

$(".menu").on("click", function () {
    $(".menuFixed").css("display", "block");
    $(".menuTab ul li").each(function (index, item) {
        $(this).addClass("animated bounceInLeft").css({"animation-delay": index / 5 + "s"})
            .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                $(this).removeClass("animated bounceInLeft");
            })
    });
});
$(".menuTabNext").click(function () {
    $(".menuFixed").addClass("animated bounceOutLeft").css("animation-duration", "1.5s");
    var timer = window.setTimeout(function () {
        $(".menuFixed").removeClass("animated bounceOutLeft").css("display", "none");
        window.clearTimeout(timer);
        timer = null;
    }, 1500);
});


//messege验证码

if ($(".box2")) {
    var str = "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".toUpperCase() + "1234567890";

    function getCode() {
        var strCode = "";
        for (var i = 0; i < 4; i++) {
            var n = Math.round(Math.random() * (61 - 0) + 0);
            if (strCode.indexOf(str[n]) === -1) {
                strCode += str[n];
            }
            else {
                i -= 1;
                continue
            }
        }

        $(".box2 span").html(strCode);
    }

    getCode();
    $(".box2 span").click(getCode);
    $(".box3 input").click(function () {
        if ($(".box2 input")[0].value !== $(".box2 span").html()) {
            alert("验证码错误，请重新输入...");
        }
    })

}


//detail.js
if ($(".detail")) {

    window.onscroll = function () {
        var JXCtop = $(window).scrollTop();
        var target = $(".d_banner").height() - $(".d_header").height();
        if (JXCtop >= target) {
            JXCtop = target;
            $(".d_tab ul").addClass("fixed");
        } else {
            $(".d_tab ul").removeClass("fixed");
        }
        $(".d_header").css("backgroundColor", "rgba(255,255,255," + JXCtop / target + ")");
    };


    $(".d_header span:nth-child(2)").click(function () {
        var dis = $(".d_header .icon-home").css("display");
        if (dis == "none") {
            $(".d_header .icon-home").css({"display": "block"}).addClass("animated bounceInDown");
            $(".d_header .icon-pinterest-sign").css({"display": "block"}).addClass("animated bounceInDown");
            ;
        } else if (dis == "block") {
            $(".d_header .icon-home").removeClass("animated bounceInDown").css({"display": "none"});
            $(".d_header .icon-pinterest-sign").removeClass("animated bounceInDown").css({"display": "none"});
        }
        ;

    });


    $(".d_tab ul li").each(function (index, item) {
        $(this).click(function () {
            $(this).addClass("active").siblings("li").removeClass("active");
            var a = index + 2;
            $(".d_tab .con:nth-child(" + a + ")").addClass("active").siblings(".con").removeClass("active");
        })
    })

}


//phone.js

$(".phone .bottom p").click(function () {
    $(".phone").removeClass("animated bounceInUp").css({"display": "none"});
});
$(".tab .item1").click(function () {
    $(".phone").css({"display": "block"}).addClass("animated bounceInUp");
});


//map.js

$(".map .header .icon").click(function () {
    $(".map").addClass("animated bounceOutDown");
        window.setTimeout(function (e) {
            $(".map").removeClass("animated bounceInUp bounceOutDown").css({display:"none"});
        },1500)
});

$(".tab .item3").on("click",function(){
    $(".map").addClass("animated bounceInUp").css({"display":"block"});
});





















