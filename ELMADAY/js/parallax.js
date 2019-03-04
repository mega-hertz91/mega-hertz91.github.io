'use strict';

(function () {
    var header = document.querySelector('.main-header__layer');

    var getParallaxHeader = function () {
        var startCoord = document.documentElement.scrollTop;

        header.style.marginBottom = '-' + (startCoord / 4) + 'px';
    };

    document.addEventListener('scroll', getParallaxHeader);
} ());
