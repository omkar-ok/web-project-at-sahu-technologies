function myFunction() {
    var x = document.getElementById("myTopnav-down");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

if ($(window).width() > 600) {
    $("#resizeid1").css({ "background-color": "blue" })
} else {
    $("#resizeid1").css({ "background-color": "black" })
}

$('#nav2').affix({
    offset: {
        top: 50
    }
});

jQuery(document).ready(function() {

    $('#hhh').backstrech(['images/home-logo.png']);

});