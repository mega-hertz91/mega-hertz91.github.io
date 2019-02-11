'use strict';

(function () {
    var body = document.querySelector('#body');

    var getParalaxImage = function () {
        var nowPosition = window.pageYOffset;

        //if (nowPosition > 300) {
        body.style.backgroundPositionY = '' + ((nowPosition + 600) / 200)  + '%'
        //}
    };

    document.addEventListener('scroll', getParalaxImage);
} ());
