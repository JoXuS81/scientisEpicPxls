/* Table of Contents
********************

1. Create Effect for Hamburger Menu Lines

*/


// Create Effect for Hamburger Menu Lines
const menuIcon = document.querySelector (".header_hamburger");
const header = document.querySelector (".header");
menuIcon.addEventListener("click", () => {
    header.classList.toggle("header_change");
});


// Transform Menu after Click 
$(document).ready(function() {
  $(".men").on("click", function() {
      $(".header").removeClass("header_change");
  });
}); 


$(document).ready(function() {
  $(".expandBottom").on("click", function() {
    $(".hiddenOne").show();
    $(".visibleOne").hide();
  });
}); 