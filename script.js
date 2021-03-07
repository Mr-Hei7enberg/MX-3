const menu__toggle = document.getElementById("menu__toggle");
const menu__btn = document.querySelector(".menu__btn");
const menu__box = document.querySelector(".menu__box");
const links = document.querySelectorAll(".menu__item");

menu__toggle.addEventListener("change", function () {
  if (this.checked) {
    menu__btn.style.cssText = "position: fixed";
  } else {
    menu__btn.style.cssText = "position: absolute";
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  menu__btn.style.cssText = "position: absolute";
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menu__toggle.checked = false;
    menu__btn.style.cssText = "position: absolute";
  });
}
