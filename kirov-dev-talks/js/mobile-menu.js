'use strict';

var toggleButtonMenu = document.querySelector('.main-nav__button');
var menuList = document.querySelector('.main-nav__list');
var menuLink = document.querySelectorAll('.main-nav__link');

var getShowMobile = function () {
    var resolution = document.documentElement.offsetWidth;

    if (resolution < 460) {
        menuList.classList.add('main-nav__list--hidden');
        toggleButtonMenu.classList.remove('main-nav__button--close');
        toggleButtonMenu.classList.add('main-nav__button--active');
    }
};

var getToggleMobileMenu = function () {
    menuList.classList.toggle('main-nav__list--hidden');
    toggleButtonMenu.classList.toggle('main-nav__button--close');
    toggleButtonMenu.classList.toggle('main-nav__button--active');
};

var getCloseMenu = function (evt) {
    var target = evt.target;

    for (var i = 0; i < menuLink.length; i++) {
        if (target === menuLink[i]) {
            getToggleMobileMenu();
        }
    }
};

getShowMobile();

toggleButtonMenu.addEventListener('click', getToggleMobileMenu);
menuList.addEventListener('click', getCloseMenu);
