'use strict';

var forms = document.querySelectorAll('.main-form');
var inputs = document.querySelectorAll('.main-form__input');
var descriptions = document.querySelectorAll('.main-form__description');


var checkInputValue = function () {
    for (var x = 0; x < inputs.length; x++) {
        if (inputs[x].value.length === 0) {
            if(descriptions[x].classList.contains('main-form__description--active')) {
                descriptions[x].classList.remove('main-form__description--active');
            }
        } else if (inputs[x].value.length !== 0) {
            descriptions[x].classList.add('main-form__description--active');
        }
    }
};

var toggleInputDescription = function (evt) {
    var target = evt.target;

    for (var i = 0; i < inputs.length; i++ ) {
        if (target === inputs[i]) {
            descriptions[i].classList.add('main-form__description--active');
            break;
        }
    }

    checkInputValue();
};

forms[0].addEventListener('click', toggleInputDescription);
forms[0].addEventListener('keydown', toggleInputDescription);
forms[1].addEventListener('click', toggleInputDescription);
forms[1].addEventListener('keydown', toggleInputDescription);

