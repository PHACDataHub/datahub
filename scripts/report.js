function changeLocation(thisObj) {

    // get some variables for the translateZ's
    var offset = $(thisObj).offset();
    var hexLeft = (Math.floor((Math.random() * 200) - 100));
    var hexTop = (Math.floor((Math.random() * 200) - 100));

    //console.log(thisObj, 'left:', hexLeft, 'top:', hexTop);

    // transform this obj based on those variables
    $(thisObj).css('transform', 'translateX(' + hexLeft + '%) translateY(' + hexTop + '%)');

    /*
    // call this function again in 20 seconds.
    setTimeout(function() {
        changeLocation(thisObj);
    }, 20000);
    */
}


function hexPoser() {
    // for each of the hexagons
    $('.hex-item').each(function() {

        //get random variables for their left, top, and width
        var rndLeft = Math.random() * (Math.random() * 80);
        var rndTop = Math.random() * (Math.random() * 80);
        var rndSize = Math.random() * 20;

        //adjust the :root css variables for each
        $(this).attr('style', '--left:' + rndLeft + '%; --top:' + rndTop + '%; --width:' + rndSize + 'rem');

        // display the hexagons (they're hidden because otherwise they overlap too much initially)
        $(this).show();

        var that = this;
        // call the function that will change their position
        setTimeout(function() {
            changeLocation(that);
        }, 1500);

    });
}

function addHexies() {

    var e = $('.hex-item');
    for (var i = 0; i < 11; i++) {
      e.clone().insertAfter(e);
    }
}




// calls stuff once the page is loaded.
$(document).ready(function() {


    addHexies();

    hexPoser();

    // fade in nav
    setTimeout(function() {
        $('nav ul').attr('style', '--opacity:1')
        console.log('hi');
    }, 1500);
});