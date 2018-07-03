'use strict';

var popupActivateForm = document.querySelector('.activate-form');

var moveWindow = function (element) {

  element.addEventListener('mousedown', function (evt) {
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    console.log(startCoords);

    var mouseMove = function (moveEvt) {
      var moveCoords = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      element.style.top = (element.offsetTop - moveCoords.y) + 'px';
      element.style.left = (element.offsetLeft - moveCoords.x) + 'px';
    };
    var mouseUp = function () {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mousemup', mouseUp);
    };

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  });
};

(function () {
  moveWindow(popupActivateForm);
})();
