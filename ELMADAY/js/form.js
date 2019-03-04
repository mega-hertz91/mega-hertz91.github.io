'use strict';

var forms = document.querySelector('.main-form');
var inputs = document.querySelectorAll('.main-form__input');
var descriptions = document.querySelectorAll('.main-form__description');
var submit = document.querySelector('.main-form__button--submit');


var checkInputValue = function () {
    for (var x = 0; x < 5; x++) {
        if (inputs[x].value.length === 0) {
            if(descriptions[x].classList.contains('main-form__description--active')) {
                descriptions[x].classList.remove('main-form__description--active');
            }
        }
    }
};

var toggleInputDescription = function (evt) {
    var target = evt.target;

    if (evt.keyCode === 16 || evt.keyCode === 17 || evt.keyCode === 20 || evt.keyCode === 9) {
        return;
    }

    for (var i = 0; i < 5; i++ ) {
        if (target === inputs[i]) {
            descriptions[i].classList.add('main-form__description--active');
            break;
        }
    }

    checkInputValue();
};

var checkSubmit = function () {
    for (var i = 0; i < 5; i++) {
        if (inputs[i].value.length > 0) {
            submit.classList.add('main-form__button--submit-active');
            submit.removeAttribute('disabled');
            break;
        } else if (inputs[i].value.length === 0) {
            submit.classList.remove('main-form__button--submit-active');
            submit.setAttribute('disabled', '');
        }
    }
};

var firstEffect = function (evt) {
    var target = evt.target;
    for (var i = 0; i < 5; i++ ) {
        if (target === inputs[i]) {
            descriptions[i].classList.add('main-form__description--active');
            submit.classList.add('main-form__button--submit-active');
        }
    }
};


forms.addEventListener('click', toggleInputDescription);
forms.addEventListener('keydown', toggleInputDescription);
forms.addEventListener('click', checkSubmit);
forms.addEventListener('keydown', checkSubmit);
forms.addEventListener('keydown', firstEffect);


