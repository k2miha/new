var menuOpenButton = document.querySelector(".logotype__menu-button");
var menuCloseButton = document.querySelector(".menu__button");
var menu = document.querySelector(".menu");
var menuLink = document.querySelectorAll(".menu__elements-container .menu__link");
menuOpenButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("menu--show");
});
menuCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("menu--show");
});
menuLink.addEventListener("click", function(event) {
  event.preventDefault();
  menuLink.classList.add("menu--active");
});
