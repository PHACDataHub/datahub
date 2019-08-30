$('document').on('shown.bs.collapse', function () {
    console.log("shown.bs.collapse worked!");
});


// Attempt #1 at expanding cards when words are searched.
$(document).ready(function(){
    $("#searchBtn").keypress(search);
    $("#searchBtn").focus(search);
    $("#searchBtn").click(search);

    function search() {
        var searchTerm = $("#searchBtn").val();
        console.log("Searching for:", searchTerm);
        if ($("p:contains('" + searchTerm + "')").length >= 1) {
            // opens all cards that contain the search term
            $("p:contains('" + searchTerm + "')").parents('.collapse').show();
        }
        else {
            console.log('no luck boss!');
        }
    }

});
  
/* This function adds the 'open' class to the hex button when clicked. */
$(function(){
    var elem = $(this);

    $('.hex-button').on('click', function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).removeClass("open2");
        }
        else {
            $(this).addClass("open");

            var button = $(this);

            setTimeout(function() {
                button.addClass('open2');
            }, 2000);
        }
    });
});