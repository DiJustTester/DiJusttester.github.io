$(document).ready(function () {
    if ($(".bxslider")[0]) {

        $('.bxslider').bxSlider({
            auto: true,
            speed: 400,
            infiniteLoop: true,
            nextText: "Далее",
            prevText: "Назад"
        });
    }

    $(".header-btns a.btn.btn-blue").click(function (e) {
        e.preventDefault();
        $(".hb-form").slideToggle(300);
    });

    if ($(".header").hasClass("main-page-header")) {
		$(".logo-small").removeClass("active");
		$(".header").removeClass("fixed-line");		
        $(window).scroll(function () {
            if ($(this).scrollTop() > 130) {
                $(".header").addClass("fixed-line");
                $(".logo-small").addClass("active");
            } else {
                $(".header").removeClass("fixed-line");
                $(".logo-small").removeClass("active");
            }
        });
    } else {
        $(".logo-small").addClass("active");
    }


    function scrollPage(param) {
        document.onmousewheel = document.onwheel = function () {
            return param;
        };

        document.addEventListener("MozMousePixelScroll", function () {
            return param;
        }, param);

        document.onkeydown = function (e) {
            if (e.keyCode >= 32 && e.keyCode <= 40) {
                return param;
            }
        }
    };

    $(".game-in span.scroll-game").click(function () {
        $("body").removeClass("no-scroll-page");
        scrollPage(true);

        $(this).slideUp(300);

        $('html, body').animate({
            scrollTop: $(".game-description").offset().top - 69
        }, 600);
    });

    $(window).load(function () {
        if ($("body").hasClass("game-page")) {
            scrollPage(false);
        }
    });


    $(".tabs-in span").click(function () {
        $(this).parent().find("span").removeClass("active");
        $(this).addClass("active");

        $(".tab").removeClass("active");
        $(".tab").eq($(this).index()).addClass("active");
        $("img.lazy").lazyload();
    });

    $(".tab-tabs-in span").click(function () {
        $(this).parent().find("span").removeClass("active");
        $(this).addClass("active");

        $(".tab-in-next").removeClass("active");
        $(".tab-in-next").eq($(this).index()).addClass("active");
    });

    var countRoll = 3,
        countGames = 9;

    $(window).load(function () {
        $(".roll-blocks .float-left").each(function (e) {
            if (e + 1 > countRoll) {
                $(this).css("display", "none");
            }
        });

        $(".games.games-page-bg .game-bg-tour").each(function (e) {
            if (e + 1 > countGames) {
                $(this).css("display", "none");
            }
        });

        $(".vip-slider .bx-pager.bx-default-pager .bx-pager-item:nth-child(1) a").text("Назад");
        $(".vip-slider .bx-pager.bx-default-pager .bx-pager-item:nth-child(2) a").text("Далее");
    });

    $(".roll-blocks-btn.roll-btn-slide a").click(function (e) {
        e.preventDefault();

        $(".roll-blocks .float-left").fadeIn(300);
        $('img.lazy').lazyload();
        $(this).parent().css("display", "none");
    });

    var boolGameStat = false;

    $(".roll-blocks-btn.games-btn-slide a").click(function (e) {
        e.preventDefault();
        $(".games.games-page-bg .game-bg-tour").slideDown(300);
        $('img.lazy').lazyload();
        $(this).parent().css('display', 'none');
    });

    function CheckInput(name) {
        $(name).keydown(function (event) {
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                (event.keyCode == 65 && event.ctrlKey === true) ||
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                return;
            }
            else {
                if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                    event.preventDefault();
                }
            }

            if ($(this).val().length >= 4) {
                return false;
            }

            return true;

        });
    }

    CheckInput(".four-line");


    $('.watch-video').click(function (event) {
        event.preventDefault();
        $(".popup-main-iframe").fadeIn(300);
        $.ajax({
            url: "./frame/frame.php",
            cache: false,
            success: function (responce) {
                $('.popup-main-iframe .popup-main-in-iframe .popup-m-block').html(responce);
            }
        });
    });

    var hideContainer = function () {
        $(".popup-main-iframe").fadeOut(300);
        $(".popup-main-iframe .popup-main-in-iframe .popup-m-block iframe").remove();
    };

    $(".close-iframe").click(function () {
        hideContainer();
    });

    $(document).mouseup(function (e) {
        var container = $(".popup-main-iframe .popup-main-in-iframe");
        if (container.has(e.target).length === 0) {
            hideContainer();
        }
    });

    function in_array(value, array) {
        for(var i = 0; i < array.length; i++)
        {
            if(array[i] == value) return true;
        }
        return false;
    }

    $(".search-game i, .search-game span").click(function() {
        $(this).parent().parent().toggleClass("active");
        $(this).parent().find('input').focus();
    });

    $(".ag-block-menu ul li").each(function(e) {
        if($(this).find("a").hasClass("active")) {
            var num = $(this).index() + 1;
            $(".menu-animation").addClass("am" + num);
        }
    });

    /* Animation slide menu (start) */

    $(".ag-block-menu ul li a").click(function(e) {
        var num = $(this).parent().index() + 1;
        $(".menu-animation").removeClass();
        $(".ag-block-menu ul + div").addClass("menu-animation").addClass("am" + num);
    });



    $(".lb-outerContainer").insertAfter(".lb-dataContainer");
    $(".lb-closeContainer .lb-close").append("<img src='/img/games/close.png' alt=''>");

    /* Animation slide menu (end) */


    var parAnim1 = parseInt($(".par-anim1").css("left")),
        /*parAnim2 = parseInt($(".par-anim2").css("left")),*/
        parAnim3 = parseInt($(".par-anim3").css("left")),
        parAnim4 = parseInt($(".par-anim4").css("left")),
        parAnim5 = parseInt($(".par-anim5").css("right")),
        parAnim6 = parseInt($(".par-anim6").css("right"));

    $(window).scroll(function() {
        $(".par-anim1").css("left", parAnim1 - ($(this).scrollTop() / 24));
        /*$(".par-anim2").css("left", parAnim2 - ($(this).scrollTop() / 4));*/
        $(".par-anim3").css("left", parAnim3 - ($(this).scrollTop() / 5));
        $(".par-anim4").css("left", parAnim4 - ($(this).scrollTop() / 20)),
        $(".par-anim5").css("right", parAnim5 - ($(this).scrollTop() / 20)),
        $(".par-anim6").css("right", parAnim6 - ($(this).scrollTop() / 4));
    });


    /* how to play (start) */

    $(".winners-dates .winners-item .win-btn").click(function() {
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().find(".winners-item-table").hide(200);
        } else {
            $(".winners-dates .winners-item .win-btn").removeClass("active");
            $(".winners-dates .winners-item .win-btn").next().hide(200);
            $(this).addClass("active");
            $(this).parent().find(".winners-item-table").show(200);
        }
    });

    /* how to play (end) */

    /* Start popup (start) */

    $(".popup-main.pm-show1").css("display", "block");

    $(".popup-main.pm-show1").click(function() {
        $(".popup-main.pm-show1").fadeOut(500);
        $(".popup-main.pm-show2").fadeIn(500);
    });

    $(".popup-main.pm-show2").click(function() {
        $(".popup-main.pm-show2").fadeOut(500);
        $(".popup-main.pm-show3").fadeIn(500);
    });

    $(".popup-main.pm-show3").click(function() {
        $(".popup-main.pm-show3").fadeOut(500);
        $(".popup-main.pm-show4").fadeIn(500);
    });

    $(".popup-main.pm-show4").click(function() {
        $(".popup-main.pm-show4").fadeOut(500);
    });

    /* Start popup (end) */
});