var button = document.querySelector(".photo-editor__image-modification-button");
var button1 = document.querySelector(".photo-editor__image-modification-button:nth-of-type(2)");
var button2 = document.querySelector(".photo-editor__image-modification-button:nth-of-type(3)");
button.addEventListener("click", function(event) {
  event.preventDefault();
  if (button1.classList.contains ("photo-editor__image-modification-button--active") || button2.classList.contains ("photo-editor__image-modification-button--active")) {
    button1.classList.remove("photo-editor__image-modification-button--active");
    button2.classList.remove("photo-editor__image-modification-button--active");
    button.classList.toggle("photo-editor__image-modification-button--active")
  }
});
button1.addEventListener("click", function(event) {
  event.preventDefault();
  if (button.classList.contains ("photo-editor__image-modification-button--active") || button2.classList.contains ("photo-editor__image-modification-button--active")) {
    button.classList.remove("photo-editor__image-modification-button--active");
    button2.classList.remove("photo-editor__image-modification-button--active");
    button1.classList.toggle("photo-editor__image-modification-button--active")
  }
});
button2.addEventListener("click", function(event) {
  event.preventDefault();
  if (button.classList.contains ("photo-editor__image-modification-button--active") || button1.classList.contains ("photo-editor__image-modification-button--active")) {
    button.classList.remove("photo-editor__image-modification-button--active");
    button1.classList.remove("photo-editor__image-modification-button--active");
    button2.classList.toggle("photo-editor__image-modification-button--active")
  }
});
