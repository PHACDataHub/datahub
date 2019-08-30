$('document').on('shown.bs.collapse', function () {
    console.log("shown.bs.collapse worked!");
});

console.log('i loaded');




// checks if this is the GCpedia version and changes things accordingly
// check if url contains 'gcpedia'
if (window.location.href.indexOf("gcpedia") > -1) {
    console.log('GCpedia detected.')
    //if ya..
    //remove the content from the head and replace it with a message that I hope nobody ever sees. 
    document.getElementsByTagName('head')[0].innerHTML = "<p class='hidden'>Hi there, if you're seeing this message, then the page didn't load properly. Try using Chrome.</p>";
    //use github for stylehseets
    $('head').append('<link rel="stylesheet" href="https://olivercrosby.github.io/datahub/styles.css">');
    $('head').append('<link rel="stylesheet" href="https://olivercrosby.github.io/datahub/print.css" media="print">');

}
else {
    console.log('Not GCpedia, using local stylesheets');
    //if not gcpedia, use local stylesheets
    $('head').append('<link rel="stylesheet" href="styles.css">');
    $('head').append('<link rel="stylesheet" href="print.css" media="print">');

  
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