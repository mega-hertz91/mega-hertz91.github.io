var openButton=document.querySelector(".filter__button--filter"),filter=document.querySelector(".filter__hidden");openButton.addEventListener("click",function(e){e.preventDefault(),filter.classList.toggle("hidden")});