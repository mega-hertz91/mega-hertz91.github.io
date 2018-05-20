  var link = document.querySelector(".button-main-feedback");
  var modal = document.querySelector(".modal-feedback");
  var layer = document.querySelector(".layer");
  var modalClose = document.querySelector(".modal-close");
  var nameInput = modal.querySelector("[name=form-name]");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-open");
    layer.classList.add("modal-open");
    nameInput.focus();
  });

  modalClose.addEventListener("click", function(evt){
    evt.preventDefault();
    modal.classList.remove("modal-open");
    layer.classList.remove("modal-open");
  });
