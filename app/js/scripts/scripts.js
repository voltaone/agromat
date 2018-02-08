$(document).ready(function () {
    "use strict";

    // SLICK SLIDER
    $(".slider-full").slick({
        prevArrow: "<div class='arrow left'><img src='img/icons/angle-left.svg'></div>",
        nextArrow: "<div class='arrow right'><img src='img/icons/angle-right.svg'></div>"
    });

    // SCROLLING CLASS CHANGE
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $("nav").addClass("scroll");
        }
        else {
            $("nav").removeClass("scroll");
        }
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
    $('.select2-select.from').select2({
        dropdownParent: $('.select-container-select2.from'),
        placeholder: "<img src='img/icons/from.svg'> Откуда",
        escapeMarkup: function (markup) {
            return markup;
        }
    });

    $('.select2-select.to').select2({
        dropdownParent: $('.select-container-select2.to'),
        placeholder: "<img src='img/icons/to.svg'> Куда",
        escapeMarkup: function (markup) {
            return markup;
        }
    });
    $('.select2-select.from2').select2({
        dropdownParent: $('.select-container-select2.from2'),
        placeholder: "<img src='img/icons/from.svg'> Откуда",
        escapeMarkup: function (markup) {
            return markup;
        }
    });

    $('.select2-select.to2').select2({
        dropdownParent: $('.select-container-select2.to2'),
        placeholder: "<img src='img/icons/to.svg'> Куда",
        escapeMarkup: function (markup) {
            return markup;
        }
    });


    // ----- PASSANGERS -----
    $(document).mouseup(function (e) {

        if ($(".form-tickets--passengers").has(e.target).length === 0) {
            $('.form-tickets--passengers-select, .form-tickets--passengers-options').removeClass('active');
        }
    });

    $('.form-tickets--passengers-select').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).siblings('.form-tickets--passengers-options').toggleClass('active');
        } else {
            $('.form-tickets--passengers-select').removeClass('active');
            $('.form-tickets--passengers-options').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.form-tickets--passengers-options').toggleClass('active');
        }

    });


    // ----- QUANTITY -----

    $('.minus').click(function () {

        var val = parseInt($(this).siblings('input').val());
        if (val !== 0) {
            val--;
            $(this).siblings('input').val(val);
        }
    });

    $('.plus').click(function () {
        var val = parseInt($(this).siblings('input').val());
        val++;
        $(this).siblings('input').val(val);
    });


    // ----- TICKET TABS -----
    $('.tabs-tickets li a').click(function (e) {
        e.preventDefault();
        $('.tabs-tickets li a').removeClass('active');
        $(this).addClass('active');

        var x = $(this).attr('data-tab');

        switch (x) {
            case '1':
                $('.form-tickets').removeClass('way-one').removeClass('way-hard');
                $('.form-tickets--inputs').removeClass('visible');
                break;
            case '2':
                $('.form-tickets').addClass('way-one').removeClass('way-hard');
                $('.form-tickets--inputs').removeClass('visible');
                break;
            case '3':
                $('.form-tickets').removeClass('way-one').addClass('way-hard');
                $('.form-tickets--inputs').addClass('visible');
                break;

            default:
                $('.form-tickets').removeClass('way-one').removeClass('way-hard');
                break;
        }
    });

    $('.link-more-options').click(function (e) {
        e.preventDefault();
        $('.form-tickets--more-options').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.form-tickets--more-options--section-block').slimScroll({
        height: '97px'
    });

    $('.form-tickets--more-options--section-block ul li a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });


    //  ----- SLIDER -----

    // SLICK SLIDER COUNTER
    // $('#link3 .slider').on('init reInit afterChange', function (event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.slider-counter').text(i + '/' + slick.slideCount);
    // });


    // $(".slider-two").slick({
    //     dots: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });
    //
    //
    // $(".slider-three").slick({
    //     dots: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     prevArrow: "<div class='arrow left'><i class='fa fa-angle-left'></i></div>",
    //     nextArrow: "<div class='arrow right'><i class='fa fa-angle-right'></i></div>",
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ],
    //
    //
    // });

    // ----- SELECT -----

    //CHOSEN
    // $(".chosen-select").chosen({
    // disable_search_threshold: 10,
    // no_results_text: "Нічого не знайдено"
    // });
    // $(".chosen-image").chosenImage({disable_search_threshold: 10});

    // ----- MODAL -----

    // MODAAL PLUGIN
    // $(".inline").modaal();

    // ----- ANIMATION -----

    // WOW JS
    // new WOW().init();


    // ----- ACCORDION -----
    // $(function () {
    //     $("#accordion").accordion({
    //         collapsible: true,
    //         heightStyle: "content"
    //     });
    // });

    // ----- TABS -----
    // $(function () {
    //     $("#tabs").tabs();
    // });

    // ----- SCROLLSPY -----

    // $(function(){ // on document load
    //     $('.menu').ddscrollSpy({ // initialize first demo
    //         scrolltopoffset: -50
    //     });
    // });


    // ANCHOR LINKS SCROLLING
    // $(".smooth").click(function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr("href"),
    //         top = $(id).offset().top - 70;
    //     $("body,html").animate({
    //         scrollTop: top
    //     }, 1500);
    // });


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


