var menuOpenButton = document.querySelector(".logotype__menu-button");
var menuCloseButton = document.querySelector(".menu__button");
var menu = document.querySelector(".menu");
menuOpenButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("menu--show");
});
menuCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("menu--show");
});
