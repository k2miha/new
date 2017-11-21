var sliderTumbler = document.querySelector(".slider-tumbler__element");
var sliderTumbler1 = document.querySelector(".slider-tumbler__element:nth-child(2)");
var sliderTumbler2 = document.querySelector(".slider-tumbler__element:nth-child(3)");
var slider2Tumbler = document.querySelector(".second-slider .slider-tumbler__element");
var slider2Tumbler1 = document.querySelector(".second-slider .slider-tumbler__element:nth-child(2)");
var slider2Tumbler2 = document.querySelector(".second-slider .slider-tumbler__element:nth-child(3)");
var sliderDescription3 = document.querySelector(".slider__description:nth-of-type(3)");
var sliderHeader1 = document.querySelector(".second-slider__header");
var sliderHeader2 = document.querySelector(".second-slider__header:nth-child(2)");
var sliderHeader3 = document.querySelector(".second-slider__header:nth-child(3)");
var sliderSmile = document.querySelector(".second-slider__option:nth-child(2) .second-slider__option-check");
var sliderComments = document.querySelector(".second-slider__option:nth-child(3)");
sliderTumbler.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderTumbler1.classList.contains ("slider-tumbler__element--active") || sliderTumbler2.classList.contains ("slider-tumbler__element--active")) {
    sliderTumbler1.classList.remove("slider-tumbler__element--active");
    sliderTumbler2.classList.remove("slider-tumbler__element--active");
    sliderTumbler.classList.toggle("slider-tumbler__element--active");
    sliderDescription2.classList.remove("slider__description--show");
    sliderDescription3.classList.remove("slider__description--show");
    sliderDescription1.classList.add("slider__description--show")
  }
});
sliderTumbler1.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderTumbler.classList.contains ("slider-tumbler__element--active") || sliderTumbler2.classList.contains ("slider-tumbler__element--active")) {
    sliderTumbler.classList.remove("slider-tumbler__element--active");
    sliderTumbler2.classList.remove("slider-tumbler__element--active");
    sliderTumbler1.classList.toggle("slider-tumbler__element--active");
    sliderDescription1.classList.remove("slider__description--show");
    sliderDescription3.classList.remove("slider__description--show");
    sliderDescription2.classList.add("slider__description--show")
  }
});
sliderTumbler2.addEventListener("click", function(event) {
  event.preventDefault();
  if (sliderTumbler.classList.contains ("slider-tumbler__element--active") || sliderTumbler1.classList.contains ("slider-tumbler__element--active")) {
    sliderTumbler.classList.remove("slider-tumbler__element--active");
    sliderTumbler1.classList.remove("slider-tumbler__element--active");
    sliderTumbler2.classList.toggle("slider-tumbler__element--active")
    sliderDescription1.classList.remove("slider__description--show");
    sliderDescription2.classList.remove("slider__description--show");
    sliderDescription3.classList.add("slider__description--show")
  }
});
slider2Tumbler.addEventListener("click", function(event) {
  event.preventDefault();
  if (slider2Tumbler1.classList.contains ("slider-tumbler__element--active") || slider2Tumbler2.classList.contains ("slider-tumbler__element--active")) {
    slider2Tumbler1.classList.remove("slider-tumbler__element--active");
    slider2Tumbler2.classList.remove("slider-tumbler__element--active");
    slider2Tumbler.classList.toggle("slider-tumbler__element--active");
    sliderHeader2.classList.remove("second-slider__header--active");
    sliderHeader3.classList.remove("second-slider__header--active");
    sliderHeader1.classList.add("second-slider__header--active");
    sliderSmile.classList.add("second-slider__option--not-selected");
    sliderComments.classList.add("second-slider__option--not-selected")
  }
});
slider2Tumbler1.addEventListener("click", function(event) {
  event.preventDefault();
  if (slider2Tumbler.classList.contains ("slider-tumbler__element--active") || slider2Tumbler2.classList.contains ("slider-tumbler__element--active")) {
    slider2Tumbler.classList.remove("slider-tumbler__element--active");
    slider2Tumbler2.classList.remove("slider-tumbler__element--active");
    slider2Tumbler1.classList.toggle("slider-tumbler__element--active");
    sliderHeader1.classList.remove("second-slider__header--active");
    sliderHeader3.classList.remove("second-slider__header--active");
    sliderHeader2.classList.add("second-slider__header--active");
    sliderSmile.classList.remove("second-slider__option--not-selected");
    sliderComments.classList.add("second-slider__option--not-selected")
  }
});
slider2Tumbler2.addEventListener("click", function(event) {
  event.preventDefault();
  if (slider2Tumbler.classList.contains ("slider-tumbler__element--active") || slider2Tumbler1.classList.contains ("slider-tumbler__element--active")) {
    slider2Tumbler.classList.remove("slider-tumbler__element--active");
    slider2Tumbler1.classList.remove("slider-tumbler__element--active");
    slider2Tumbler2.classList.toggle("slider-tumbler__element--active");
    sliderHeader1.classList.remove("second-slider__header--active");
    sliderHeader2.classList.remove("second-slider__header--active");
    sliderHeader3.classList.add("second-slider__header--active");
    sliderComments.classList.remove("second-slider__option--not-selected");
    sliderSmile.classList.remove("second-slider__option--not-selected")
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
