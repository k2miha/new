var login = document.querySelector(".personal-info__element-text");
var modalOpenButton = document.querySelector(".personal-info__form [type=submit]");
var modalCloseButton = document.querySelector(".pop-up_failure .pop-up__button");
var modalCloseButtonSuccess = document.querySelector(".pop-up__button");
var modalSuccess = document.querySelector(".pop-up");
var modalFail = document.querySelector(".pop-up_failure");
var overlay = document.querySelector(".overlay ");
var form = document.querySelector("form");
modalCloseButton.addEventListener("click", function(event) {
  event.preventDefault();
  modalFail.classList.remove("pop-up--show");
  overlay.classList.remove("overlay--show");
});
modalCloseButtonSuccess.addEventListener("click", function(event) {
  event.preventDefault();
  modalSuccess.classList.remove("pop-up--show");
  overlay.classList.remove("overlay--show");
});
form.addEventListener("submit", function(event) {
  if(login.value !="") {
    event.preventDefault();
    modalSuccess.classList.add("pop-up--show");
    overlay.classList.add("overlay--show");
  }
  else {
    event.preventDefault();
    modalFail.classList.add("pop-up--show");
    overlay.classList.add("overlay--show");
  }
});
