'use strict';

(function () {
    var mainHeader = document.querySelector('.main-header');
    var actionClass = 200;
    var deleteClass = 50;
    var menuList = document.querySelector('.main-nav__list');
    var buttonMenu = document.querySelector('.main-nav__button-menu');


    if(document.documentElement.offsetWidth > 767) {

        var actionMenu = function () {
            var positionPage = window.pageYOffset;

            if (positionPage > actionClass) {
                mainHeader.classList.add('main-header--scroll');
            } else if (positionPage < deleteClass) {
                mainHeader.classList.remove('main-header--scroll');
            }
        };

        document.addEventListener('scroll', actionMenu);
    }

    if (document.documentElement.offsetWidth < 767) {

        var actionMobileMenu = function () {
            buttonMenu.classList.toggle('main-header__button-menu--open');
            menuList.classList.toggle('main-nav__list--close');
        };

        buttonMenu.addEventListener('click', actionMobileMenu);
    }
} ());

