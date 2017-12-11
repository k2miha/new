var link = document.querySelector(".map-contact-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var password = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=letter]");
var overlay = document.querySelector(".modal-overlay");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("overlay-show");
  var storage = localStorage.getItem("name");
  if(storage) {
    login.value = storage;
    var passtorage = localStorage.getItem("email");
    password.value = passtorage;
    textarea.focus();
  }
  else {
    login.focus();
  }
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
  if(!login.value || !password.value || !textarea.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("name", login.value);
    localStorage.setItem("email", password.value);
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains ("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});
