var menuOpenButton = document.querySelector(".logotype__menu-button");
var menuCloseButton = document.querySelector(".menu__button");
var menu = document.querySelector(".menu");
var logotypeContainer = document.querySelector(".logotype-container");
menuOpenButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("menu--show");
  logotypeContainer.classList.add("menu--hide");
});
menuCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("menu--show");
  logotypeContainer.classList.remove("menu--hide");
});
