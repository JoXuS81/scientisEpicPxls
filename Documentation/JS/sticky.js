/* Regulate sticky header behavior */
window.onscroll = function() {myFunction()};

const mediaQuery = window.matchMedia('(min-width:1601px) and (max-width:2000px)')
const mediaQuery2500 = window.matchMedia('(min-width:2001px) and (max-width:2500px)')
const mediaQuery3125 = window.matchMedia('(min-width:2501px) and (max-width:3125px)')
const mediaQuery3850 = window.matchMedia('(min-width:3126px)')
var heade = document.getElementById("menu");
var sticky = heade.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    heade.classList.add("home_sticky");
  } else {
    heade.classList.remove("home_sticky");
  } 
}