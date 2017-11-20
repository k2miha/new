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
var sliderArrow = document.querySelector(".slider__arrow");
var sliderArrow2 = document.querySelector(".slider__arrow:nth-of-type(2)");
var sliderArrow3 = document.querySelector(".slider__description:nth-of-type(2) .slider__arrow");
var sliderArrow4 = document.querySelector(".slider__description:nth-of-type(2) .slider__arrow:nth-of-type(2)");
var sliderDescription1 = document.querySelector(".slider__description:nth-of-type(1)");
var sliderDescription2 = document.querySelector(".slider__description:nth-of-type(2)");
sliderArrow.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderDescription1.classList.contains ("slider__description--show")) {
    sliderDescription1.classList.remove("slider__description--show");
    sliderDescription2.classList.add("slider__description--show");
  }
});
sliderArrow3.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderDescription2.classList.contains ("slider__description--show")) {
    sliderDescription2.classList.remove("slider__description--show");
    sliderDescription1.classList.add("slider__description--show");
  }
});
  sliderArrow2.addEventListener("click", function(event) {
    event.preventDefault();
    if (sliderDescription1.classList.contains ("slider__description--show")) {
      sliderDescription1.classList.remove("slider__description--show");
      sliderDescription2.classList.add("slider__description--show");
    }
});
sliderArrow4.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderDescription2.classList.contains ("slider__description--show")) {
    sliderDescription2.classList.remove("slider__description--show");
    sliderDescription1.classList.add("slider__description--show");
  }
});
