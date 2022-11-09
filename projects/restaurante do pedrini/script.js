'use strict';

function myFunction1() {
  var x = document.getElementById("myDIV1");
  
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("morada1").innerHTML = "Fechar";
    document.getElementById("morada1").style.color = "white";
    document.getElementById("morada1").style.backgroundColor = "#d3ab55";
    
  } else {
    x.style.display = "none";
    document.getElementById("morada1").innerHTML = "Morada";
    document.getElementById("morada1").style.color = "#d3ab55";
    document.getElementById("morada1").style.backgroundColor = "transparent";
    document.getElementById("morada1").style = "";
  }
  
}

function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("morada2").innerHTML = "Fechar";
    document.getElementById("morada2").style.color = "white";
    document.getElementById("morada2").style.backgroundColor = "#d3ab55";
  } else {
    x.style.display = "none";
    document.getElementById("morada2").innerHTML = "Morada";
    document.getElementById("morada2").style.color = "#d3ab55";
    document.getElementById("morada2").style.backgroundColor = "transparent";
    document.getElementById("morada2").style = "";
  }
}

function myFunction3() {
  var x = document.getElementById("myDIV3");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("morada3").innerHTML = "Fechar";
    document.getElementById("morada3").style.color = "white";
    document.getElementById("morada3").style.backgroundColor = "#d3ab55";
  } else {
    x.style.display = "none";
    document.getElementById("morada3").innerHTML = "Morada";
    document.getElementById("morada3").style.color = "#d3ab55";
    document.getElementById("morada3").style.backgroundColor = "transparent";
    document.getElementById("morada3").style = "";
  }
}



// Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt);
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);


// envelope animation
window.onload = function(){
  var tl = new TimelineLite({delay: 1}),
    firstBg = document.querySelectorAll('.text__first-bg'),
    secBg = document.querySelectorAll('.text__second-bg'),
    word  = document.querySelectorAll('.text__word');
  
  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")  
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});
  
  document.querySelector('.restart').onclick = function() {tl.restart()};


}