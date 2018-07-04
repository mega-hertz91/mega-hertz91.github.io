'use strict';

var popupActivate = document.querySelector('.activate-form');
var buttonCloseActivate = popupActivate.querySelector('.activate-form__button-close');
var overlay = document.querySelector('.activate-form__overlay');
var activationButton = document.querySelectorAll('.activation__button');
var sectionActivate = document.querySelector('.activation');
var body = document.getElementById('popup');

var closePopup = function (element) {
  element.classList.add('hidden');
  overlay.classList.add('hidden');
  body.style.overflow = 'auto';
  overlay.style.overflow = 'hidden';
};

buttonCloseActivate.addEventListener('click', function () {
  closePopup(popupActivate);
});

sectionActivate.addEventListener('click', function (evt) {
  for (var i = 0; i < activationButton.length; i++) {
    var target = evt.target;
    if (target === activationButton[i]) {
      body.style.overflow = 'hidden';
      overlay.style.overflow = 'scroll';
      popupActivate.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  }
});
