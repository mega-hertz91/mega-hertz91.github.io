var buttonToggle=document.querySelector(".main-nav__button-toggle"),menuToggle=document.querySelector(".main-nav");buttonToggle.addEventListener("click",function(e){e.preventDefault(),menuToggle.classList.contains("main-nav--opened")?(menuToggle.classList.remove("main-nav--opened"),menuToggle.classList.add("main-nav--closed")):(menuToggle.classList.remove("main-nav--closed"),menuToggle.classList.add("main-nav--opened"))});