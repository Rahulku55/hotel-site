function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav1").classList.add("scroll");
    document.getElementById("nav2").classList.add("scroll-2");
    document.getElementById("nav2").style.background = "#333";
    document
      .getElementById("nav-scroll")
      .classList.add("custom-toggler-scroll");
  } else {
    document.getElementById("nav1").classList.remove("scroll");
    document.getElementById("nav2").classList.remove("scroll-2");
    document.getElementById("nav2").style.background = "transparent";
    document
      .getElementById("nav-scroll")
      .classList.remove("custom-toggler-scroll");
  }
}

// let sliderElm, btnLeft, btnRight, numberSliderBoxs, idxCurrentSlide;
// var myEle = document.getElementsByClassName("slider-container");
// if (myEle.length > 0) {
//   sliderElm = document.querySelector(".slider-container .slider");
//   btnLeft = document.querySelector(".slider-container .btn-left");
//   btnRight = document.querySelector(".slider-container .btn-right");

//   numberSliderBoxs = sliderElm.children.length;
//   idxCurrentSlide = 0;

//   btnLeft.addEventListener("click", moveLeft);
//   btnRight.addEventListener("click", moveRight);
//   window.addEventListener("resize", moveSlider);
// }
// // Functions:
// function moveSlider() {
//   let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
//   sliderElm.style.marginLeft = -leftMargin + "px";
//   // console.log(sliderElm.clientWidth, leftMargin);
// }
// function moveLeft() {
//   if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
//   else idxCurrentSlide--;

//   moveSlider();
// }
// function moveRight() {
//   if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
//   else idxCurrentSlide++;

//   moveSlider();
// }

let num;

$(".button-count:first-child").click(function () {
  num = parseInt($("#num1").val());
  if (num > 1) {
    $("#num1").val(num - 1);
  }
  if (num == 2) {
    $(".button-count:first-child").prop("disabled", true);
  }
  if (num == 3) {
    $(".button-count:last-child").prop("disabled", false);
  }
});

$(".button-count:last-child").click(function () {
  num = parseInt($("#num1").val());
  console.log(num);
  if (num < 3) {
    $("#num1").val(num + 1);
  }
  if (num > 0) {
    $(".button-count:first-child").prop("disabled", false);
  }
  if (num == 2) {
    $(".button-count:last-child").prop("disabled", true);
  }
});
$(".button-count-2:first-child").click(function () {
  num = parseInt($("#num2").val());
  if (num > 1) {
    $("#num2").val(num - 1);
  }
  if (num == 2) {
    $(".button-count-2:first-child").prop("disabled", true);
  }
  if (num == 3) {
    $(".button-count-2:last-child").prop("disabled", false);
  }
});

$(".button-count-2:last-child").click(function () {
  num = parseInt($("#num2").val());
  console.log(num);
  if (num < 3) {
    $("#num2").val(num + 1);
  }
  if (num > 0) {
    $(".button-count-2:first-child").prop("disabled", false);
  }
  if (num == 2) {
    $(".button-count-2:last-child").prop("disabled", true);
  }
});

myEle = document.getElementById("inputCheckIn");
if (myEle) {
  const pickerCheckIn = datepicker("#inputCheckIn");
  const pickerCheckOut = datepicker("#inputCheckOut");
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};
