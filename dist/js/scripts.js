$(document).ready(function(){"use strict";function e(){var e=$("#passenger1").val()+"М, ",t=$("#passenger2").val()+"Р, ",n=$("#passenger3").val()+"Ю, ",s=$("#passenger4").val()+"В, ",i=$("#passenger5").val()+"П";$(".form-tickets--passengers-select").addClass("focus"),$(".form-tickets--passengers-select span").html(e+t+n+s+i)}$(".slider-main").slick({prevArrow:"<div class='arrow left'><img src='img/icons/angle-left.svg'></div>",nextArrow:"<div class='arrow right'><img src='img/icons/angle-right.svg'></div>",fade:!0}),$(".slider-gallery").slick({prevArrow:"<div class='arrow left'><img src='img/icons/angle-left-blue-s.svg'></div>",nextArrow:"<div class='arrow right'><img src='img/icons/angle-right-blue-s.svg'></div>",dots:!0,fade:!0}),$(window).scroll(function(){$(this).scrollTop()>10?$("nav").addClass("scroll"):$("nav").removeClass("scroll")}),$.datepicker.regional.ua={closeText:"Закрити",currentText:"Сьогодні",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],monthNamesShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],dayNames:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Cубота"],dayNamesShort:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],dayNamesMin:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],dateFormat:"dd/mm/yy"},$.datepicker.setDefaults($.datepicker.regional.ua),$(".datepicker").datepicker({showOtherMonths:!0,selectOtherMonths:!0}),$(".select2-select.from").select2({dropdownParent:$(".select-container-select2.from"),placeholder:'<svg width="33px" height="21px" viewBox="0 0 33 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">\n        <g id="Ticket_form_first_view" transform="translate(-20.000000, -12.000000)" fill-rule="nonzero" fill="#3C3C3C">\n            <g id="City1">\n                <g>\n                    <path d="M50.2642278,12.1728161 C49.4601235,11.9047813 48.5411472,11.943072 47.8136243,12.3259788 L39.9640352,15.6955585 L32.1910275,13.8576059 C31.884702,13.7810246 31.5783766,13.8193153 31.3103418,13.972478 L29.5106799,14.8531636 C29.0511918,15.0829077 28.7448664,15.5423958 28.7448664,16.0784653 C28.7448664,16.6145348 29.0511918,17.074023 29.5106799,17.2654763 L33.5312012,19.1034289 L27.2898206,22.2815552 C27.2515299,22.3198459 27.1749485,22.3198459 27.1366579,22.2815552 L22.2737417,20.5967654 C21.8525442,20.4436027 21.3930561,20.4818934 20.9718586,20.6733467 C20.4357891,20.9413815 20.091173,21.4008696 20.0145916,21.9752298 C19.9380103,22.54959 20.1677544,23.1239502 20.5889518,23.506857 L25.336996,27.4890875 C25.7199028,27.795413 26.2176816,27.8719943 26.6771697,27.7188316 L36.2498394,24.1960892 L34.4501775,30.0162723 C34.2587241,30.6672139 34.4501775,31.3947368 34.986247,31.8159342 C35.2925724,32.083969 35.7137699,32.2371317 36.0966767,32.2371317 C36.3647114,32.2371317 36.5944555,32.1605503 36.8624902,32.0456783 L38.3558267,31.3181554 C38.7004428,31.1649927 39.0067683,30.8586673 39.159931,30.5140512 L43.448487,21.477451 L50.5322625,18.146162 C51.2980761,17.7632552 51.910727,17.1123136 52.1787617,16.2699187 C52.4467965,15.4658145 52.4085058,14.5468382 52.025599,13.7810246 C51.7192736,13.0535017 51.068332,12.4408508 50.2642278,12.1728161 Z M51.1832041,15.9253026 C50.9917507,16.4613721 50.6088439,16.8825696 50.1110651,17.1123136 L42.8358361,20.520184 C42.7209641,20.5584747 42.606092,20.6733467 42.5678014,20.7882188 L38.1643733,30.054563 C38.1260826,30.1694351 38.0112106,30.2843071 37.8963386,30.3225978 L36.4030021,31.0501207 C36.0966767,31.2032834 35.8286419,31.01183 35.7903512,30.9735393 C35.7137699,30.8969579 35.5223165,30.7055046 35.5988979,30.3608884 L37.7431759,23.4302756 C37.8197572,23.2388222 37.7431759,23.0090781 37.5900131,22.8559154 C37.4751411,22.7410434 37.3219784,22.7027527 37.2071064,22.7027527 C37.130525,22.7027527 37.0922343,22.7027527 37.015653,22.7410434 L26.3325536,26.6466926 C26.2559723,26.6849833 26.1793909,26.6466926 26.1411002,26.6084019 L21.4313468,22.6261714 C21.278184,22.5112993 21.2016027,22.3198459 21.2398934,22.1283925 C21.278184,21.9369391 21.3930561,21.7837764 21.5462188,21.7071951 C21.6610908,21.6306137 21.8142535,21.6306137 21.9674163,21.6689044 L26.8303324,23.3536943 C27.1749485,23.4685663 27.5578553,23.4302756 27.8641808,23.2771129 L35.1394097,19.5629171 C35.3308631,19.448045 35.4457351,19.2565916 35.4457351,19.0268476 C35.4457351,18.7971035 35.2925724,18.6056501 35.101119,18.5290687 L29.9701681,16.1933373 C29.8552961,16.1550467 29.8552961,16.0784653 29.8552961,16.0401746 C29.8552961,16.001884 29.8552961,15.9253026 29.9701681,15.8487212 L31.76983,14.9680356 C31.8081207,14.9297449 31.8464113,14.9297449 31.884702,14.9680356 L39.8491632,16.8442789 C39.9640352,16.8825696 40.0789073,16.8442789 40.1937793,16.8059882 L48.2348218,13.3215364 C48.7326006,13.0917924 49.3069608,13.0535017 49.8430303,13.2066644 C50.3790998,13.3981178 50.8002973,13.7810246 51.068332,14.2788034 C51.3363668,14.8531636 51.3746575,15.3892331 51.1832041,15.9253026 Z" id="Shape"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg> Откуда',language:{noResults:function(){return"Ничего не найдено"},inputTooShort:function(e){return"Пожалуйста, введите"+(e.minimum-e.input.length)+"или более символов"}},escapeMarkup:function(e){return e},minimumInputLength:3}),$(".select2-select.to").select2({dropdownParent:$(".select-container-select2.to"),placeholder:'<svg width="31px" height="21px" viewBox="0 0 31 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">\n        <g id="Ticket_form_first_view" transform="translate(-219.000000, -10.000000)" fill-rule="nonzero" fill="#2F2F2F">\n            <g id="City2">\n                <g transform="translate(189.000000, 0.000000)">\n                    <path d="M56.992762,12.566468 C56.1788482,12.2984332 55.2486609,12.3367239 54.5122627,12.7196307 L46.5669136,16.0892104 L38.69908,14.2512578 C38.3890176,14.1746765 38.0789552,14.2129672 37.8076506,14.3661299 L35.986034,15.2468155 C35.5209404,15.4765596 35.210878,15.9360477 35.210878,16.4721172 C35.210878,17.0081867 35.5209404,17.4676748 35.986034,17.6591282 L40.0556031,19.4970808 L33.7380815,22.6752071 C33.6993237,22.7134978 33.6218081,22.7134978 33.5830503,22.6752071 L28.6608096,20.9904173 C28.2344738,20.8372546 27.7693802,20.8755452 27.3430444,21.0669986 C26.8004352,21.3350334 26.451615,21.7945215 26.3740994,22.3688817 C26.2965838,22.9432419 26.5291306,23.5176021 26.9554664,23.9005089 L31.7614337,27.8827394 C32.1490117,28.1890649 32.6528631,28.2656462 33.1179567,28.1124835 L42.8074069,24.5897411 L40.9857903,30.4099242 C40.7920013,31.0608658 40.9857903,31.7883887 41.5283995,32.2095861 C41.8384619,32.4776209 42.2647977,32.6307836 42.6523757,32.6307836 C42.9236803,32.6307836 43.1562271,32.5542022 43.4275317,32.4393302 L44.9390859,31.7118073 C45.2879062,31.5586446 45.5979686,31.2523192 45.7529998,30.907703 L50.0938734,21.8711029 L57.2640666,18.5398138 C58.0392226,18.1569071 58.6593474,17.5059655 58.930652,16.6635706 C59.2019566,15.8594663 59.1631988,14.94049 58.7756208,14.1746765 C58.4655584,13.4471536 57.8066758,12.8345027 56.992762,12.566468 Z M57.9229492,16.3189545 C57.7291602,16.855024 57.3415822,17.2762214 56.8377308,17.5059655 L49.4737486,20.9138359 C49.3574752,20.9521266 49.2412018,21.0669986 49.202444,21.1818707 L44.7452969,30.4482149 C44.7065391,30.5630869 44.5902657,30.677959 44.4739923,30.7162497 L42.9624381,31.4437725 C42.6523757,31.5969353 42.3810711,31.4054819 42.3423133,31.3671912 C42.2647977,31.2906098 42.0710087,31.0991564 42.1485243,30.7545403 L44.3189611,23.8239275 C44.3964767,23.6324741 44.3189611,23.40273 44.1639299,23.2495673 C44.0476565,23.1346953 43.8926253,23.0964046 43.7763519,23.0964046 C43.6988363,23.0964046 43.6600785,23.0964046 43.5825629,23.1346953 L32.7691365,27.0403445 C32.6916209,27.0786352 32.6141053,27.0403445 32.5753475,27.0020538 L27.808138,23.0198232 C27.6531068,22.9049512 27.5755912,22.7134978 27.614349,22.5220444 C27.6531068,22.330591 27.7693802,22.1774283 27.9244114,22.100847 C28.0406848,22.0242656 28.195716,22.0242656 28.3507472,22.0625563 L33.2729879,23.7473461 C33.6218081,23.8622182 34.0093861,23.8239275 34.3194485,23.6707648 L41.6834307,19.956569 C41.8772197,19.8416969 41.9934931,19.6502435 41.9934931,19.4204995 C41.9934931,19.1907554 41.8384619,18.999302 41.6446729,18.9227206 L36.4511276,16.5869892 C36.3348542,16.5486986 36.3348542,16.4721172 36.3348542,16.4338265 C36.3348542,16.3955358 36.3348542,16.3189545 36.4511276,16.2423731 L38.2727442,15.3616875 C38.311502,15.3233968 38.3502598,15.3233968 38.3890176,15.3616875 L46.4506402,17.2379308 C46.5669136,17.2762214 46.683187,17.2379308 46.7994604,17.1996401 L54.9385985,13.7151883 C55.4424499,13.4854443 56.023817,13.4471536 56.5664262,13.6003163 C57.1090354,13.7917697 57.5353712,14.1746765 57.8066758,14.6724553 C58.0779804,15.2468155 58.1167382,15.782885 57.9229492,16.3189545 Z" id="Shape" transform="translate(42.732453, 22.512218) rotate(-315.000000) translate(-42.732453, -22.512218) "></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg> Куда',language:{noResults:function(){return"Ничего не найдено"},inputTooShort:function(e){return"Пожалуйста, введите"+(e.minimum-e.input.length)+"или более символов"}},escapeMarkup:function(e){return e},minimumInputLength:3}),$(".select2-select.from2").select2({dropdownParent:$(".select-container-select2.from2"),placeholder:'<svg width="33px" height="21px" viewBox="0 0 33 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">\n        <g id="Ticket_form_first_view" transform="translate(-20.000000, -12.000000)" fill-rule="nonzero" fill="#3C3C3C">\n            <g id="City1">\n                <g>\n                    <path d="M50.2642278,12.1728161 C49.4601235,11.9047813 48.5411472,11.943072 47.8136243,12.3259788 L39.9640352,15.6955585 L32.1910275,13.8576059 C31.884702,13.7810246 31.5783766,13.8193153 31.3103418,13.972478 L29.5106799,14.8531636 C29.0511918,15.0829077 28.7448664,15.5423958 28.7448664,16.0784653 C28.7448664,16.6145348 29.0511918,17.074023 29.5106799,17.2654763 L33.5312012,19.1034289 L27.2898206,22.2815552 C27.2515299,22.3198459 27.1749485,22.3198459 27.1366579,22.2815552 L22.2737417,20.5967654 C21.8525442,20.4436027 21.3930561,20.4818934 20.9718586,20.6733467 C20.4357891,20.9413815 20.091173,21.4008696 20.0145916,21.9752298 C19.9380103,22.54959 20.1677544,23.1239502 20.5889518,23.506857 L25.336996,27.4890875 C25.7199028,27.795413 26.2176816,27.8719943 26.6771697,27.7188316 L36.2498394,24.1960892 L34.4501775,30.0162723 C34.2587241,30.6672139 34.4501775,31.3947368 34.986247,31.8159342 C35.2925724,32.083969 35.7137699,32.2371317 36.0966767,32.2371317 C36.3647114,32.2371317 36.5944555,32.1605503 36.8624902,32.0456783 L38.3558267,31.3181554 C38.7004428,31.1649927 39.0067683,30.8586673 39.159931,30.5140512 L43.448487,21.477451 L50.5322625,18.146162 C51.2980761,17.7632552 51.910727,17.1123136 52.1787617,16.2699187 C52.4467965,15.4658145 52.4085058,14.5468382 52.025599,13.7810246 C51.7192736,13.0535017 51.068332,12.4408508 50.2642278,12.1728161 Z M51.1832041,15.9253026 C50.9917507,16.4613721 50.6088439,16.8825696 50.1110651,17.1123136 L42.8358361,20.520184 C42.7209641,20.5584747 42.606092,20.6733467 42.5678014,20.7882188 L38.1643733,30.054563 C38.1260826,30.1694351 38.0112106,30.2843071 37.8963386,30.3225978 L36.4030021,31.0501207 C36.0966767,31.2032834 35.8286419,31.01183 35.7903512,30.9735393 C35.7137699,30.8969579 35.5223165,30.7055046 35.5988979,30.3608884 L37.7431759,23.4302756 C37.8197572,23.2388222 37.7431759,23.0090781 37.5900131,22.8559154 C37.4751411,22.7410434 37.3219784,22.7027527 37.2071064,22.7027527 C37.130525,22.7027527 37.0922343,22.7027527 37.015653,22.7410434 L26.3325536,26.6466926 C26.2559723,26.6849833 26.1793909,26.6466926 26.1411002,26.6084019 L21.4313468,22.6261714 C21.278184,22.5112993 21.2016027,22.3198459 21.2398934,22.1283925 C21.278184,21.9369391 21.3930561,21.7837764 21.5462188,21.7071951 C21.6610908,21.6306137 21.8142535,21.6306137 21.9674163,21.6689044 L26.8303324,23.3536943 C27.1749485,23.4685663 27.5578553,23.4302756 27.8641808,23.2771129 L35.1394097,19.5629171 C35.3308631,19.448045 35.4457351,19.2565916 35.4457351,19.0268476 C35.4457351,18.7971035 35.2925724,18.6056501 35.101119,18.5290687 L29.9701681,16.1933373 C29.8552961,16.1550467 29.8552961,16.0784653 29.8552961,16.0401746 C29.8552961,16.001884 29.8552961,15.9253026 29.9701681,15.8487212 L31.76983,14.9680356 C31.8081207,14.9297449 31.8464113,14.9297449 31.884702,14.9680356 L39.8491632,16.8442789 C39.9640352,16.8825696 40.0789073,16.8442789 40.1937793,16.8059882 L48.2348218,13.3215364 C48.7326006,13.0917924 49.3069608,13.0535017 49.8430303,13.2066644 C50.3790998,13.3981178 50.8002973,13.7810246 51.068332,14.2788034 C51.3363668,14.8531636 51.3746575,15.3892331 51.1832041,15.9253026 Z" id="Shape"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg> Откуда',language:{noResults:function(){return"Ничего не найдено"},inputTooShort:function(e){return"Пожалуйста, введите"+(e.minimum-e.input.length)+"или более символов"}},escapeMarkup:function(e){return e},minimumInputLength:3}),$(".select2-select.to2").select2({dropdownParent:$(".select-container-select2.to2"),placeholder:'<svg width="31px" height="21px" viewBox="0 0 31 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">\n        <g id="Ticket_form_first_view" transform="translate(-219.000000, -10.000000)" fill-rule="nonzero" fill="#2F2F2F">\n            <g id="City2">\n                <g transform="translate(189.000000, 0.000000)">\n                    <path d="M56.992762,12.566468 C56.1788482,12.2984332 55.2486609,12.3367239 54.5122627,12.7196307 L46.5669136,16.0892104 L38.69908,14.2512578 C38.3890176,14.1746765 38.0789552,14.2129672 37.8076506,14.3661299 L35.986034,15.2468155 C35.5209404,15.4765596 35.210878,15.9360477 35.210878,16.4721172 C35.210878,17.0081867 35.5209404,17.4676748 35.986034,17.6591282 L40.0556031,19.4970808 L33.7380815,22.6752071 C33.6993237,22.7134978 33.6218081,22.7134978 33.5830503,22.6752071 L28.6608096,20.9904173 C28.2344738,20.8372546 27.7693802,20.8755452 27.3430444,21.0669986 C26.8004352,21.3350334 26.451615,21.7945215 26.3740994,22.3688817 C26.2965838,22.9432419 26.5291306,23.5176021 26.9554664,23.9005089 L31.7614337,27.8827394 C32.1490117,28.1890649 32.6528631,28.2656462 33.1179567,28.1124835 L42.8074069,24.5897411 L40.9857903,30.4099242 C40.7920013,31.0608658 40.9857903,31.7883887 41.5283995,32.2095861 C41.8384619,32.4776209 42.2647977,32.6307836 42.6523757,32.6307836 C42.9236803,32.6307836 43.1562271,32.5542022 43.4275317,32.4393302 L44.9390859,31.7118073 C45.2879062,31.5586446 45.5979686,31.2523192 45.7529998,30.907703 L50.0938734,21.8711029 L57.2640666,18.5398138 C58.0392226,18.1569071 58.6593474,17.5059655 58.930652,16.6635706 C59.2019566,15.8594663 59.1631988,14.94049 58.7756208,14.1746765 C58.4655584,13.4471536 57.8066758,12.8345027 56.992762,12.566468 Z M57.9229492,16.3189545 C57.7291602,16.855024 57.3415822,17.2762214 56.8377308,17.5059655 L49.4737486,20.9138359 C49.3574752,20.9521266 49.2412018,21.0669986 49.202444,21.1818707 L44.7452969,30.4482149 C44.7065391,30.5630869 44.5902657,30.677959 44.4739923,30.7162497 L42.9624381,31.4437725 C42.6523757,31.5969353 42.3810711,31.4054819 42.3423133,31.3671912 C42.2647977,31.2906098 42.0710087,31.0991564 42.1485243,30.7545403 L44.3189611,23.8239275 C44.3964767,23.6324741 44.3189611,23.40273 44.1639299,23.2495673 C44.0476565,23.1346953 43.8926253,23.0964046 43.7763519,23.0964046 C43.6988363,23.0964046 43.6600785,23.0964046 43.5825629,23.1346953 L32.7691365,27.0403445 C32.6916209,27.0786352 32.6141053,27.0403445 32.5753475,27.0020538 L27.808138,23.0198232 C27.6531068,22.9049512 27.5755912,22.7134978 27.614349,22.5220444 C27.6531068,22.330591 27.7693802,22.1774283 27.9244114,22.100847 C28.0406848,22.0242656 28.195716,22.0242656 28.3507472,22.0625563 L33.2729879,23.7473461 C33.6218081,23.8622182 34.0093861,23.8239275 34.3194485,23.6707648 L41.6834307,19.956569 C41.8772197,19.8416969 41.9934931,19.6502435 41.9934931,19.4204995 C41.9934931,19.1907554 41.8384619,18.999302 41.6446729,18.9227206 L36.4511276,16.5869892 C36.3348542,16.5486986 36.3348542,16.4721172 36.3348542,16.4338265 C36.3348542,16.3955358 36.3348542,16.3189545 36.4511276,16.2423731 L38.2727442,15.3616875 C38.311502,15.3233968 38.3502598,15.3233968 38.3890176,15.3616875 L46.4506402,17.2379308 C46.5669136,17.2762214 46.683187,17.2379308 46.7994604,17.1996401 L54.9385985,13.7151883 C55.4424499,13.4854443 56.023817,13.4471536 56.5664262,13.6003163 C57.1090354,13.7917697 57.5353712,14.1746765 57.8066758,14.6724553 C58.0779804,15.2468155 58.1167382,15.782885 57.9229492,16.3189545 Z" id="Shape" transform="translate(42.732453, 22.512218) rotate(-315.000000) translate(-42.732453, -22.512218) "></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg> Куда',language:{noResults:function(){return"Ничего не найдено"},inputTooShort:function(e){return"Пожалуйста, введите"+(e.minimum-e.input.length)+"или более символов"}},escapeMarkup:function(e){return e},minimumInputLength:3}),$(".select2-select.tour").select2({dropdownParent:$(".select-container-select2.tour"),placeholder:'<svg width="25px" height="27px" viewBox="0 0 25 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.5">\n        <g id="Large-Device_TourPage_design-Copy" transform="translate(-102.000000, -142.000000)" fill-rule="nonzero" fill="#2F2F2F">\n            <g id="Tour_serch_form" transform="translate(72.000000, 134.000000)">\n                <g id="City1">\n                    <path d="M54.909699,28.0226785 L52.3201667,24.282243 C52.3201667,24.282243 52.3201667,24.282243 52.2913941,24.2534704 C52.2913941,24.2534704 52.2626216,24.2246978 52.2626216,24.2246978 C52.233849,24.1959252 52.233849,24.1959252 52.2050764,24.1671527 C52.2050764,24.1671527 52.1763038,24.1383801 52.1763038,24.1383801 C52.1475312,24.1383801 52.1187587,24.1096075 52.0899861,24.1096075 C52.0899861,24.1096075 52.0612135,24.1096075 52.0612135,24.1096075 C52.0324409,24.1096075 52.0036683,24.1096075 51.9748957,24.1096075 C51.9461232,24.1096075 51.9461232,24.1096075 51.9173506,24.1096075 C51.888578,24.1096075 51.8310328,24.1096075 51.8022603,24.1383801 C51.7159425,24.1671527 47.6590086,25.5770091 46.393015,26.0085979 L46.4505602,25.9222801 L49.3565909,22.2393897 C50.0183602,21.2898946 50.4787215,20.2540816 50.7376748,19.131951 C50.8815377,18.5277268 50.9390828,17.9235026 50.9390828,17.3192784 C50.9678554,12.6581202 47.1698747,8.86013954 42.479944,8.86013954 C37.7900133,8.86013954 33.9920326,12.6581202 33.9920326,17.3192784 C33.9920326,17.9235026 34.0495777,18.5277268 34.1934406,19.131951 C34.4523939,20.2540816 34.9127552,21.2898946 35.5745245,22.2393897 L40.1493649,28.0226785 L39.1998697,28.3391769 L39.1998697,28.3391769 L36.7829729,24.8576946 C36.7829729,24.8576946 36.7829729,24.8576946 36.7542004,24.828922 C36.7542004,24.828922 36.7254278,24.8001495 36.7254278,24.8001495 C36.6966552,24.7713769 36.6966552,24.7713769 36.6678826,24.7426043 C36.6678826,24.7426043 36.63911,24.7138317 36.63911,24.7138317 C36.6103375,24.7138317 36.5815649,24.6850591 36.5815649,24.6850591 C36.5815649,24.6850591 36.5527923,24.6850591 36.5527923,24.6850591 C36.5240197,24.6850591 36.4952471,24.6850591 36.4664745,24.6850591 C36.4664745,24.6850591 36.437702,24.6850591 36.437702,24.6850591 C36.4089294,24.6850591 36.3513842,24.6850591 36.3226116,24.7138317 C36.3226116,24.7138317 36.3226116,24.7138317 36.3226116,24.7138317 L33.1576277,25.864735 C33.0425374,25.8935075 32.9849922,25.9798253 32.9274471,26.066143 L30.050189,31.5329334 C29.9638712,31.6767963 29.9926438,31.8782044 30.1077341,32.0220673 C30.1940519,32.108385 30.3091422,32.1659302 30.4242325,32.1659302 C30.4817777,32.1659302 30.5105503,32.1659302 30.5680954,32.1371576 L33.416581,31.1013447 L35.8047052,34.5540544 C35.8047052,34.5540544 35.8047052,34.5540544 35.8334778,34.582827 C35.8334778,34.582827 35.8622503,34.6115996 35.8622503,34.6115996 C35.8622503,34.6115996 35.8910229,34.6403722 35.8910229,34.6403722 C35.9197955,34.6403722 35.9197955,34.6691448 35.9485681,34.6691448 C35.9485681,34.6691448 35.9773407,34.6691448 35.9773407,34.6979173 C36.0061132,34.6979173 36.0061132,34.7266899 36.0348858,34.7266899 C36.0348858,34.7266899 36.0636584,34.7266899 36.0636584,34.7266899 C36.092431,34.7266899 36.1212036,34.7266899 36.1499762,34.7266899 C36.2075213,34.7266899 36.2362939,34.7266899 36.2938391,34.6979173 L48.8962296,30.4395753 L48.9250022,30.4971205 L51.341899,33.9786028 C51.4282167,34.0936931 51.543307,34.1512383 51.6871699,34.1512383 C51.6871699,34.1512383 51.7159425,34.1512383 51.7159425,34.1512383 C51.8598054,34.1512383 52.0036683,34.0649206 52.0612135,33.9210577 L54.9384716,28.4542672 C55.0247893,28.3391769 55.0247893,28.1665414 54.909699,28.0226785 Z M36.2650665,21.7214833 C35.6608423,20.8870784 35.2580261,19.9375833 35.0278455,18.9305429 C34.9127552,18.3838639 34.85521,17.8371848 34.85521,17.2905058 C34.85521,13.1184815 38.2791472,9.72331697 42.479944,9.72331697 C46.6807408,9.72331697 50.104678,13.1184815 50.104678,17.3192784 C50.104678,17.8659574 50.0471328,18.4126365 49.9320425,18.9593155 C49.7018618,19.9663558 49.2990457,20.8870784 48.6948215,21.7214833 L44.9831585,26.411414 L44.0048908,27.648635 L42.9115327,29.0297189 C42.7101246,29.2886721 42.2497633,29.2886721 42.0483553,29.0297189 L41.587994,28.4542672 L41.0125424,27.7349527 L36.2650665,21.7214833 Z M33.2439455,30.2381673 L31.28741,30.9574818 L33.5604439,26.6128221 L35.5169794,25.8935075 L33.2439455,30.2381673 Z M36.092431,33.4894689 L34.0495777,30.5546657 L36.4664745,25.9510527 L38.5093278,28.885856 L36.092431,33.4894689 Z M48.7811392,29.6627157 L36.984381,33.6621044 L39.3149601,29.2023544 L40.696044,28.7419931 L41.3578133,29.5763979 C41.6167666,29.9216689 42.0195827,30.123077 42.479944,30.123077 C42.9403053,30.123077 43.3143488,29.9216689 43.6020747,29.5763979 L45.4722924,27.1882737 L51.1404909,25.2029656 L48.7811392,29.6627157 Z M51.6296248,32.9140173 L49.5867715,29.979214 L52.0036683,25.3756011 L54.0465216,28.3104043 L51.6296248,32.9140173 Z M46.3642424,17.0315526 C46.3642424,14.9023816 44.609115,13.1472541 42.479944,13.1472541 C40.350773,13.1472541 38.5956455,14.9023816 38.5956455,17.0315526 C38.5956455,19.1607236 40.350773,20.8870784 42.479944,20.8870784 C44.609115,20.8870784 46.3642424,19.1607236 46.3642424,17.0315526 Z M39.458823,17.0315526 C39.458823,15.3627429 40.8111343,14.0104315 42.479944,14.0104315 C44.1487537,14.0104315 45.501065,15.3627429 45.501065,17.0315526 C45.501065,18.7003623 44.1487537,20.023901 42.479944,20.023901 C40.8111343,20.023901 39.458823,18.6715897 39.458823,17.0315526 Z" id="Shape"></path>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg> Куда',language:{noResults:function(){return"Ничего не найдено"},inputTooShort:function(e){return"Пожалуйста, введите"+(e.minimum-e.input.length)+"или более символов"}},escapeMarkup:function(e){return e},minimumInputLength:3}),$(".select2-select.sort").select2({dropdownParent:$(".select-container-select2.sort"),minimumResultsForSearch:-1,escapeMarkup:function(e){return e}}),$(document).mouseup(function(e){0===$(".form-tickets--passengers").has(e.target).length&&$(".form-tickets--passengers-select, .form-tickets--passengers-options").removeClass("active")}),$(".form-tickets--passengers-select").click(function(e){e.preventDefault(),$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings(".form-tickets--passengers-options").toggleClass("active")):($(".form-tickets--passengers-select").removeClass("active"),$(".form-tickets--passengers-options").removeClass("active"),$(this).addClass("active"),$(this).siblings(".form-tickets--passengers-options").toggleClass("active"))}),$(".minus").click(function(){var t=parseInt($(this).siblings("input").val());0!==t&&(t--,$(this).siblings("input").val(t)),e()}),$(".plus").click(function(){var t=parseInt($(this).siblings("input").val());t++,$(this).siblings("input").val(t),e()}),$("#passenger1").change(e),$("#passenger2").change(e),$("#passenger3").change(e),$("#passenger4").change(e),$("#passenger5").change(e),$(".tabs-tickets li a").click(function(e){switch(e.preventDefault(),$(".tabs-tickets li a").removeClass("active"),$(this).addClass("active"),$(this).attr("data-tab")){case"1":$(".form-tickets").removeClass("way-one").removeClass("way-hard"),$(".form-tickets--inputs").removeClass("visible");break;case"2":$(".form-tickets").addClass("way-one").removeClass("way-hard"),$(".form-tickets--inputs").removeClass("visible");break;case"3":$(".form-tickets").removeClass("way-one").addClass("way-hard"),$(".form-tickets--inputs").addClass("visible");break;default:$(".form-tickets").removeClass("way-one").removeClass("way-hard")}}),$(".link-more-options").click(function(e){e.preventDefault(),$(".form-tickets--more-options").toggleClass("active"),$(this).toggleClass("active")}),$(".form-tickets--more-options--section-block ul li a").click(function(e){e.preventDefault(),$(this).toggleClass("active")}),$(".nav-icon").click(function(e){e.preventDefault(),$("html, body").toggleClass("open"),$("#menu-panel").slideToggle()}),$(".accordion-item--head").click(function(){$(this).toggleClass("active"),$(this).siblings(".accordion-item--content").slideToggle()})}),$(window).on("load resize",function(){"use strict";window.matchMedia("(max-width: 767px)").matches?($(".menu-col").appendTo("#menu-panel .row"),$(".form-tickets--more-options--section-block").slimScroll({height:"212px",touchScrollStep:50})):window.matchMedia("(min-width: 768px)").matches&&($(".menu-col").appendTo("#menu-desktop"),$(".form-tickets--more-options--section-block").slimScroll({height:"97px"}))});