'use strict';

var buttonForm = document.querySelector('.main-form__button');
var inputNumberTel = document.querySelector('input[type=tel]');
var inputs = document.querySelectorAll('input[type=text]');
var mainForm = document.querySelector('.main-form');

var checkTel = function () {
    var elemNumber = inputNumberTel.value.split('');

    for (var i = 0; i < elemNumber.length; i++) {
        if (elemNumber[i] < '0' || elemNumber > '9') {
            inputNumberTel.setCustomValidity('Номер телефона должне содержать только цифры');
        } else {
            inputNumberTel.setCustomValidity('');
        }
    }
};

var chechBool = function () {
  inputs.forEach(function (elem) {
      if (elem.validity.valid === true) {
          elem.style.boxShadow = 'inset 0 0 0 5px white';
          elem.style.color = 'white';
      } else {
          elem.style.boxShadow = 'inset 0 0 0 5px #707070';
          elem.style.color = '#707070';
      }
  });
};

var checkInputTel = function () {
    checkTel();
};

buttonForm.addEventListener('click', checkInputTel);
mainForm.addEventListener('keydown', chechBool);
