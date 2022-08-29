/* 

Table of Contents

- Click on Ground Mars
- Click on Launching Mars
- Click on Orbit Mars

*/


// Click on Ground Mars
$(document).ready(function() {
    $(".groundMars").on("click", function() {
        $(".ground").show();
        $(".groundMars").css("color", "#c83939");
        $(".launching").hide();
        $(".launchingMars").css("color", "#000000");
        $(".orbit").hide();
        $(".orbitMars").css("color", "#000000");
    });
}); 


// Click on Launching Mars
$(document).ready(function() {
    $(".launchingMars").on("click", function() {
        $(".ground").hide();
        $(".groundMars").css("color", "#000000");
        $(".launching").show();
        $(".launchingMars").css("color", "#c83939");
        $(".orbit").hide();
        $(".orbitMars").css("color", "#000000");
    });
}); 


// Click on Orbit Mars
$(document).ready(function() {
    $(".orbitMars").on("click", function() {
        $(".ground").hide();
        $(".groundMars").css("color", "#000000");
        $(".launching").hide();
        $(".launchingMars").css("color", "#000000");
        $(".orbit").show();
        $(".orbitMars").css("color", "#c83939");
    });
}); 