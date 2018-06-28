'use strict';

( function () {
  var popupGetLink = document.querySelector('.get-link');
  var popupGenerateLink = document.querySelector('.generate-link');
  var section = document.querySelector('.distributions');
  var links = document.querySelectorAll('.distributions__table-link-dist');
  var buttonCloseGetLink = popupGetLink.querySelector('.get-link__button-close');
  var buttonCloseGenerateLink = popupGenerateLink.querySelector('.generate-link__button-close');
  var overlay = document.querySelector('.distributions__overlay');
  var submit = popupGetLink.querySelector('.get-link__submit');

  var closePopup = function (element) {
    element.classList.add('hidden');
    overlay.classList.add('hidden');
  };


  buttonCloseGetLink.addEventListener('click', function () {
    closePopup(popupGetLink)
  });

  buttonCloseGenerateLink.addEventListener('click', function () {
    closePopup(popupGenerateLink)
  });

  submit.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupGetLink.classList.add('hidden');
    popupGenerateLink.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  section.addEventListener('click', function (evt) {
    for (var i = 0; i < links.length; i++) {
      var target = evt.target;
      if (target === links[i]) {
        popupGetLink.classList.remove('hidden');
        overlay.classList.remove('hidden');
      }
    }
  });
}());
