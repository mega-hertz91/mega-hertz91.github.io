"use strict";!function(){var n=document.querySelector(".get-link"),t=document.querySelector(".generate-link"),e=document.querySelector(".distributions"),i=document.querySelectorAll(".distributions__table-link-dist"),c=n.querySelector(".get-link__button-close"),d=t.querySelector(".generate-link__button-close"),s=document.querySelector(".distributions__overlay"),r=n.querySelector(".get-link__submit"),l=function(e){e.classList.add("hidden"),s.classList.add("hidden")};c.addEventListener("click",function(){l(n)}),d.addEventListener("click",function(){l(t)}),r.addEventListener("click",function(e){e.preventDefault(),n.classList.add("hidden"),t.classList.remove("hidden"),s.classList.remove("hidden")}),e.addEventListener("click",function(e){for(var t=0;t<i.length;t++){e.target===i[t]&&(n.classList.remove("hidden"),s.classList.remove("hidden"))}})}();