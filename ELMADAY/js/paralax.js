'use strict';

(function () {
    var body = document.querySelector('#body');

    var getParalaxImage = function () {
        var nowPosition = window.pageYOffset;

        //if (nowPosition > 300) {
        console.log(body.style.backgroundPositionY);
        body.style.backgroundPositionY = '' + ((nowPosition + 600) / 115)  + '%';
        //}
    };

    document.addEventListener('scroll', getParalaxImage);
} ());
