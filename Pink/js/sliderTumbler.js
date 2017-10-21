var sliderTumbler = document.querySelector(".slider-tumbler__element");
var sliderTumbler1 = document.querySelector(".slider-tumbler__element:nth-child(2)");
var sliderTumbler2 = document.querySelector(".slider-tumbler__element:nth-child(3)");
var slider2Tumbler = document.querySelector(".second-slider .slider-tumbler__element");
var slider2Tumbler1 = document.querySelector(".second-slider .slider-tumbler__element:nth-child(2)");
var slider2Tumbler2 = document.querySelector(".second-slider .slider-tumbler__element:nth-child(3)");
sliderTumbler.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderTumbler1.classList.contains ("slider-tumbler__element--active") || sliderTumbler2.classList.contains ("slider-tumbler__element--active")) {
    sliderTumbler1.classList.remove("slider-tumbler__element--active");
    sliderTumbler2.classList.remove("slider-tumbler__element--active");
    sliderTumbler.classList.toggle("slider-tumbler__element--active")
  }
});
sliderTumbler1.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderTumbler.classList.contains ("slider-tumbler__element--active") || sliderTumbler2.classList.contains ("slider-tumbler__element--active")) {
    sliderTumbler.classList.remove("slider-tumbler__element--active");
    sliderTumbler2.classList.remove("slider-tumbler__element--active");
    sliderTumbler1.classList.toggle("slider-tumbler__element--active")
  }
});
sliderTumbler2.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderTumbler.classList.contains ("slider-tumbler__element--active") || sliderTumbler1.classList.contains ("slider-tumbler__element--active")) {
    sliderTumbler.classList.remove("slider-tumbler__element--active");
    sliderTumbler1.classList.remove("slider-tumbler__element--active");
    sliderTumbler2.classList.toggle("slider-tumbler__element--active")
  }
});

slider2Tumbler.addEventListener("click", function(event) {
  event.preventDefault();
  if (slider2Tumbler1.classList.contains ("slider-tumbler__element--active") || slider2Tumbler2.classList.contains ("slider-tumbler__element--active")) {
    slider2Tumbler1.classList.remove("slider-tumbler__element--active");
    slider2Tumbler2.classList.remove("slider-tumbler__element--active");
    slider2Tumbler.classList.toggle("slider-tumbler__element--active")
  }
});
slider2Tumbler1.addEventListener("click", function(event) {
  event.preventDefault();
  if (slider2Tumbler.classList.contains ("slider-tumbler__element--active") || slider2Tumbler2.classList.contains ("slider-tumbler__element--active")) {
    slider2Tumbler.classList.remove("slider-tumbler__element--active");
    slider2Tumbler2.classList.remove("slider-tumbler__element--active");
    slider2Tumbler1.classList.toggle("slider-tumbler__element--active")
  }
});
slider2Tumbler2.addEventListener("click", function(event) {
  event.preventDefault();
  if (slider2Tumbler.classList.contains ("slider-tumbler__element--active") || slider2Tumbler1.classList.contains ("slider-tumbler__element--active")) {
    slider2Tumbler.classList.remove("slider-tumbler__element--active");
    slider2Tumbler1.classList.remove("slider-tumbler__element--active");
    slider2Tumbler2.classList.toggle("slider-tumbler__element--active")
  }
});
