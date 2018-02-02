$(window).on("load resize", function () {
    "use strict";
    if (window.matchMedia("(max-width: 767px)").matches) {
        $("nav").prependTo("body");
        $(".nav-panel").prependTo("body");
    } else {
        $("nav").prependTo("header");
        $(".nav-panel").appendTo("nav .container .row");
    }
});

$(document).ready(function () {
    "use strict";
    $('#menu-trigger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("body").toggleClass("open");

        if ($(this).hasClass('open')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    $("main").click(function () {
        if ($('body').hasClass("open")) {
            $('body').toggleClass("open");
            $("#menu-trigger").toggleClass("open");
            enableScroll();
        }
    });

    $(".dropdown-link").click(function (e) {
        e.preventDefault();
    });

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) { // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    if (window.matchMedia("(max-width: 767px)").matches) {

        $(".smooth").click(function () {
            $("body").toggleClass("open");
            $("#menu-trigger").toggleClass("open");
            enableScroll();
        });

        //new
        $(".dropdown").click(function (e) {
            if ($(this).hasClass('active')) {
                $('.dropdown').removeClass('active');
            } else {
                $('.dropdown').removeClass('active');
                $(this).addClass('active');
            }
        });

    } else if (window.matchMedia("(min-width: 768px)").matches) {
        //new
        $(".dropdown").hover(function () {
            $(this).toggleClass('active');
        });
    }
});
/**
 * Created by alexrewrew on 09.09.17.
 */

$(document).ready(function () {
    "use strict";

    //  ----- SLIDER -----

    // SLICK SLIDER COUNTER
    $('#link3 .slider').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.slider-counter').text(i + '/' + slick.slideCount);
    });

    // SLICK SLIDER
    $(".slider-full").slick({
        // slide: ".slide",
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        dots: true

    });

    $(".slider-two").slick({
        // slide: ".slide",
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".slider-three").slick({
        // slide: ".slide",
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],


    });

    // ----- SELECT -----

    //CHOSEN
    $(".chosen-select").chosen({
        // disable_search_threshold: 10,
        no_results_text: "Нічого не знайдено"
    });
    // $(".chosen-image").chosenImage({disable_search_threshold: 10});

    // ----- MODAL -----

    // MODAAL PLUGIN
    // $(".inline").modaal();

    // ----- ANIMATION -----

    // WOW JS
    // new WOW().init();


    // ----- ACCORDION -----
    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            heightStyle: "content"
        });
    });

    // ----- TABS -----
    $(function () {
        $("#tabs").tabs();
    });

    // ----- SCROLLSPY -----

    // $(function(){ // on document load
    //     $('.menu').ddscrollSpy({ // initialize first demo
    //         scrolltopoffset: -50
    //     });
    // });

    // SCROLLING CLASS CHANGE
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".link-up").addClass("visible");
        }
        else {
            $(".link-up").removeClass("visible");
        }
    });

    // ANCHOR LINKS SCROLLING
    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top - 70;
        $("body,html").animate({
            scrollTop: top
        }, 1500);
    });

    // DATEPICKER
    $.datepicker.regional['ua'] = {
        closeText: 'Закрити', // set a close button text
        currentText: 'Сьогодні', // set today text
        monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'], // set month names
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'], // set short month names
        dayNames: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Cубота'], // set days names
        dayNamesShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'], // set short day names
        dayNamesMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'], // set more short days names
        dateFormat: 'dd/mm/yy' // set format date
    };

    $.datepicker.setDefaults($.datepicker.regional['ua']);

    $(".datepicker").datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });


    //  SELECT2


    $('.select2-select').select2({
        placeholder: "Select a state",
        allowClear: true
        // dropdownParent: $('.select-select2-container'),
        // minimumResultsForSearch: Infinity
    });


    // RANGE SLIDER
    // ----- RANGE SLIDER -----

    // var keypressSlider = document.getElementById('range-slider');
    // var input0 = document.getElementById('range-slider-input0');
    // var input1 = document.getElementById('range-slider-input1');
    // var inputs = [input0, input1];
    //
    // noUiSlider.create(keypressSlider, {
    //     start: [12, 18416],
    //     connect: true,
    //     direction: 'ltr',
    //     range: {
    //         'min': [0],
    //         'max': 20000
    //     },
    //     format: wNumb({
    //         decimals: 0,
    //     })
    // });
    //
    // keypressSlider.noUiSlider.on('update', function (values, handle) {
    //     inputs[handle].value = values[handle];
    // });
    //
    // function setSliderHandle(i, value) {
    //     var r = [null, null];
    //     r[i] = value;
    //     keypressSlider.noUiSlider.set(r);
    // }
    //
    // inputs.forEach(function (input, handle) {
    //
    //     input.addEventListener('change', function () {
    //         setSliderHandle(handle, this.value);
    //     });
    //
    //     input.addEventListener('keydown', function (e) {
    //
    //         var values = keypressSlider.noUiSlider.get();
    //         var value = Number(values[handle]);
    //
    //         // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
    //         var steps = keypressSlider.noUiSlider.steps();
    //
    //         // [down, up]
    //         var step = steps[handle];
    //
    //         var position;
    //
    //         // 13 is enter,
    //         // 38 is key up,
    //         // 40 is key down.
    //         switch (e.which) {
    //
    //             case 13:
    //                 setSliderHandle(handle, this.value);
    //                 break;
    //
    //             case 38:
    //
    //                 // Get step to go increase slider value (up)
    //                 position = step[1];
    //
    //                 // false = no step is set
    //                 if (position === false) {
    //                     position = 1;
    //                 }
    //
    //                 // null = edge of slider
    //                 if (position !== null) {
    //                     setSliderHandle(handle, value + position);
    //                 }
    //
    //                 break;
    //
    //             case 40:
    //
    //                 position = step[0];
    //
    //                 if (position === false) {
    //                     position = 1;
    //                 }
    //
    //                 if (position !== null) {
    //                     setSliderHandle(handle, value - position);
    //                 }
    //
    //                 break;
    //         }
    //     });
    // });


});

// !!! RESPONSIVE SCRIPTS !!!

// $(window).on('load resize', function() {
//     'use strict';
//     if (window.matchMedia("(max-width: 767px)").matches) {
//
//     } else if (window.matchMedia("(min-width: 768px)").matches) {
//
//     }
// });


