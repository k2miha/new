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

var login = document.querySelector(".personal-info__element-text");
var modalOpenButton = document.querySelector(".personal-info__form [type=submit]");
var modalCloseButton = document.querySelector(".pop-up_failure .pop-up__button");
var modalCloseButtonSuccess = document.querySelector(".pop-up__button");
var modalSuccess = document.querySelector(".pop-up");
var modalFail = document.querySelector(".pop-up_failure");
var form = document.querySelector("form");

modalCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  modalFail.classList.remove("pop-up--show");
});
modalCloseButtonSuccess.addEventListener("click", function(event) {
  event.preventDefault();
  modalSuccess.classList.remove("pop-up--show");
});

form.addEventListener("submit", function(event) {
  if(login.value !="") {
    event.preventDefault();
    modalSuccess.classList.add("pop-up--show");
  }
  else {
    event.preventDefault();
    modalFail.classList.add("pop-up--show");
  }
});
