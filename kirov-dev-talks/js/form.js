'use strict';

var buttonForm = document.querySelector('.main-form__button');
var inputNumberTel = document.querySelector('input[type=tel]');

var checkTel = function () {
    if (inputNumberTel.value.length > 12 || inputNumberTel.value.length < 5) {
        inputNumberTel.setCustomValidity('Введите номер телефона в формате 79519993969');
    } else {
        inputNumberTel.setCustomValidity('');
    }
};

buttonForm.addEventListener('click', checkTel);
