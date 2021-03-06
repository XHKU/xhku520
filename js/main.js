jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};


    /*=======================================
    =            HEADER AUTOHIDE            =
    =======================================*/

    SLZ.showHideNavBarTop = function() {
        var
            offset_1 = $('#wrapper-content').offset(),
            offset_2 = $('section:nth-child(2)').offset(),

            isFixedHeader = false,
            lastScroll = 100,
            hcw = $(".header-main"),
            bgh = $(".bg-header-wrapper"),
            bgcc = $(".bg-center .header-main .dummy-container");

        $(window).on('scroll load resize', function() {

            var st = $(this).scrollTop(),
                hf = $('.header-fixed');

            if (st > (offset_1.top + 250)) {

                if (!isFixedHeader) {
                    hcw.addClass('hide-menu');
                }
                if (st > offset_2.top) {
                    hcw.addClass('header-fixed');
                    bgh.addClass("navhidden-padding");
                    bgcc.addClass("container");
                }
                isFixedHeader = true;
            } else {
                bgh.removeClass("navhidden-padding");
                enquire.register("screen and (min-width:769px)", function() {
                    bgcc.removeClass("container");
                });
                hcw.removeClass('header-fixed').removeClass('hide-menu');
                isFixedHeader = false;
            }
            if (isFixedHeader) {
                if (st > lastScroll) {
                    hf.addClass('hide-menu');
                } else if (st < offset_2.top) {
                    hf.addClass('hide-menu');
                } else {
                    hf.removeClass('hide-menu');
                }
            }
            lastScroll = st;

            enquire.register("screen and (max-width:768px)", function() {
                bgcc.addClass("container");
            });
        });
        //--------------------- back to top -------------//
        $('#back-top .link').on('click', function(){
            $('body,html').animate({
                scrollTop: 0
            },900);
            return false;
        });

        var temp = $(window).height();
        $(window).on('scroll load', function(event){
            if($(window).scrollTop() > temp) {
                $('#back-top .link').addClass('show-btn');
            }
            else {
                $('#back-top .link').removeClass('show-btn');
            }
        });
    };

    /*======  End of HEADER AUTOHIDE  =====*/

    /*=======================================
    =           SHOW OFFCANVAS NAV          =
    =======================================*/

    SLZ.showOffcanvasNav = function() {
        $('.navbar-offcanvas').addClass('active');
        $('body').addClass('noscroll');
        $('.body-wrapper-content').addClass('slide-right');
        $('html').addClass('noscroll');
        $('.sidenav-overlay').addClass('active');
        $('button.btn-hamburger').addClass('open');
    };

    /*====  End of SHOW OFFCANVAS NAV  ====*/


    /*=======================================
    =           HIDE OFFCANVAS NAV          =
    =======================================*/

    SLZ.hideOffcanvasNav = function() {
        $('.navbar-offcanvas').removeClass('active');
        $('body').removeClass('noscroll');
        $('.body-wrapper-content').removeClass('slide-right');
        $('html').removeClass('noscroll');
        $('.sidenav-overlay').removeClass('active');
        $('button.btn-hamburger').removeClass('open');
        $('nav.navbar-offcanvas li.dropdown ul.dropdown-menu').removeClass('drop-open');
    };

    /*====  End of HIDE OFFCANVAS NAV  ====*/


    /*=======================================
    =         TOGGLE OFFCANVAS NAV          =
    =======================================*/

    SLZ.toggleOffcanvasNav = function() {
        enquire.register("screen and (min-width:769px)", function() {
            SLZ.hideOffcanvasNav();
            $('[data-toggle="offcanvas"]').off('click');
            $('.sidenav-overlay').off('click');
        }).register("screen and (max-width:768px)", function() {
            $('[data-toggle="offcanvas"]').on('click', function() {
                if ($('[data-toggle="offcanvas"]').hasClass('open')) {
                    SLZ.hideOffcanvasNav();
                } else {
                    SLZ.showOffcanvasNav();
                }
            });
            $('.sidenav-overlay').on('click', SLZ.hideOffcanvasNav);
        });

    };

    SLZ.toggleOffCanvasDropdown = function() {
        enquire.register("screen and (min-width:769px)", function() {
            $('nav.navbar-offcanvas li.dropdown').off('click');
        }).register("screen and (max-width:768px)", function() {
            $('nav.navbar-offcanvas .nav-search').removeClass('hide');
            $('nav.navbar-offcanvas li.dropdown').on('click', function() {
                $('nav.navbar-offcanvas li.dropdown a.main-menu i').not($(this).find('a.main-menu i')).removeClass('active');
                $(this).find('a.main-menu i').toggleClass('active');
                $('nav.navbar-offcanvas li.dropdown ul.dropdown-menu').not($(this).find('ul.dropdown-menu')).removeClass('drop-open');
                $(this).find('ul.dropdown-menu').toggleClass('drop-open');
            });
        });
    };


    /*===  End of TOGGLE OFFCANVAS NAV  ====*/

    SLZ.toggleSearchBox = function() {
        function hideBox(event) {
            if ($('a.search-btn').has(event.target).length === 0 && !$('a.search-btn').is(event.target) && $('.nav-search').has(event.target).length === 0 && !$('.nav-search').is(event.target)) {
                $('.nav-search').addClass('hide');
            }
        }

        function simplerHideBox(event) {
            $('.nav-search').addClass('hide');
        }

        enquire.register("screen and (min-width:769px)", function() {
            // Show - hide box search on menu
            $('a.search-btn').on('click', function() {
                $('.nav-search').toggleClass('hide');
            });

            //hide box seach when click outside
            $('body').on('click', hideBox);

            $(window).on('scroll resize', simplerHideBox);

        }).register("screen and (max-width:768px)", function() {
            $('a.search-btn').off('click');
            $('body').off('click', hideBox);
            $(window).off('scroll resize', simplerHideBox);
        });
    };



    SLZ.dHover = function() {
        $('.gallery ul .thumb').directionalHover({
            speed: 200
        });

        // ----------------------- WOW-JS --------------------------- //
        new WOW().init();
    };


    /*=====  End of SAMPLE FUNCTION  ======*/




    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.toggleSearchBox();
        // SLZ.bannerSlider();
        SLZ.dHover();
        // SLZ.menu();
        SLZ.showHideNavBarTop();
        SLZ.toggleOffcanvasNav();
        SLZ.toggleOffCanvasDropdown();
    });

    /*=====  End of INIT FUNCTIONS  ======*/


});
