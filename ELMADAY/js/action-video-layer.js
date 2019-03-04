'use strict';

var videoLayer = document.querySelector('.about-elmaday__video-layer');
var buttonPlay = document.querySelector('.about-elmaday__button-play');

var deleteLayer = function () {
    videoLayer.classList.add('about-elmaday__video-layer--play');
};

buttonPlay.addEventListener('click', deleteLayer);
