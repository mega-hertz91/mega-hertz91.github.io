var  openButton = document.querySelector('.filter__button--filter');
var filter = document.querySelector('.filter__hidden');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  filter.classList.toggle('hidden');
});
