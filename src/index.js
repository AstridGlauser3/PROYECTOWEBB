import React from "react";
import ReactDOM from "react-dom";
import APP  from "./app/app";
import logo from "./asets/logo.png"

import './estilos.scss'
let imglogo =document.createElement("img")
imglogo.className = "hero-left-image"
imglogo.src=logo
document.getElementById("heder").appendChild(imglogo)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  function zoom() {
    var zooms = document.querySelectorAll(".zoom");
  
    for (var i = 0; i < zooms.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = zooms[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        zooms[i].classList.add("active");
      } else {
        zooms[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", zoom);

ReactDOM.render(<APP/>, document.getElementById("pedigree"))
