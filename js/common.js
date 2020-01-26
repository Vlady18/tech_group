
$(document).ready(function () {
    $(window).on('scroll', function(){
        var height_header = $('header.headerm').height();
        if($(window).scrollTop()> height_header){
            $('.menu_button').addClass('href_fix');
        } else{
            $('.menu_button').removeClass('href_fix');
        }
        if( $(window).scrollTop()>135 ){
            $('#head_new').addClass('navbar-fixed-top');
        } else {
            $('#head_new').removeClass('navbar-fixed-top');
        }
    });
    new WOW().init();

    var show = true;
    var countbox = ".wrap_second";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1500
            });
            show = false;
        }
    });
    $('.ourPartners__bottom__wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 600,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '<div class="ourPartners__top-left__arrows-item ourPartners__top-left__arrows-left"><img src="img/arrow_left.png" alt=""></div>',
        nextArrow: '<div class="ourPartners__top-left__arrows-item ourPartners__top-left__arrows-right"><img src="img/arrow_right.png" alt=""></div>',
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
        });
        $('.companyNews__bottom__wrapper').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 600,
            // cssEase: 'linear',
            arrows: true,
            prevArrow: '<div class="news__arrow news__prev"><img src="img/arrow_left.png" alt=""></div>',
            nextArrow: '<div class="news__arrow news__next"><img src="img/arrow_right.png" alt=""></div>',
            responsive: [
                {
                    breakpoint: 1150,
                    settings:{
                        slidesToShow: 1
                    }
                }
            ]
            });
    $('.menu_button').click(function(event){
        event.preventDefault();
        // $('#overlay').toggleClass('dbbl');
        $('.menu_block').css({'top': '0px', 'opacity': '1'})
        // $('body').css('overflow', 'hidden')
        // $('html').css('overflow', 'hidden')
    });
    $('.menu_close-btn').click(function(event){
        event.preventDefault();
        $('.menu_block').css({'top': '-5000px', 'opacity': '0'})
        $('body').css('overflow', 'auto')
        $('html').css('overflow', 'auto')
    });
    $("nav ul li").on("click","a", function (event) {
        if($(this).hasClass('parent_li')){
            $(this).siblings('ul').toggleClass('dbbl');
        }
        else{
            $('.menu_block').removeClass('dbbl');
        }
    });
    $('.slick_spec').on('beforeChange', function(event, slick, currentSlide, nextSlide){
// здесь навешиваете разные анимации для своих элементов, группируете их по времени выполнения и в свою очередь делаете скорость анимации в слике с учетом всех ваших временных выполнений
//         $(currentSlide).addClass('bounce')
//         $(slick.$slides)

        var all_slides = $(slick.$slides)
        Array.from(all_slides).forEach( el => {
            $(el).find('.adv-slide-one').removeClass('animated fadeOutLeft')
        })
          var cur_slide = $(slick.$slides[currentSlide]).find('.adv-slide-one');
          $(cur_slide).toggleClass('animated fadeOutLeft')
    });

    $('.slick_spec').slick({
        useTransform: true,
        cssEase: 'ease-in-out',
        arrows: true,
        draggable: false,
        prevArrow: '<div class="news__arrow news__arrow_spec news__prev"><img src="img/arrow_left.png" alt=""></div>',
        nextArrow: '<div class="news__arrow news__arrow_spec news__next"><img src="img/arrow_right.png" alt=""></div>',
        speed: 1500  // скорость анимации будет зависить от времени анимирования всех ваших блоков
});



});




