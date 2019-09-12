$('.collapse').on('shown.bs.collapse', function (e) {
    console.log("Dude, shown.bs.collapse actually worked!");
});

// ----------------------------------- works, just need to do it to images too.
// Change local URLS for GCpedia
// get url
var url = $(location).attr("href")

$(document).ready(function() {
    // check if this is gcpedia
    if (url.indexOf('gcpedia') != -1) {
        console.log('this is gcpedia');

        //remove last bit from url
        var to = url.lastIndexOf('/');
        to = to == -1 ? url.length : to + 1;
        url = url.substring(0, to);

        // for each of those elements, get the url/src and fix it
        $('.local').each(function () {
            if ($(this).attr('src') === undefined) {
                var thisHREF = $(this).attr('href');
                $(this).attr('src', 'https://olivercrosby.github.io/datahub/' + thisHREF);
            }
            else if ($(this).attr('href') === undefined) {
                var thisSRC = $(this).attr('src');
                $(this).attr('src', 'https://olivercrosby.github.io/datahub/' + thisSRC);
                console.log('https://olivercrosby.github.io/datahub/' + thisSRC)
            }
            else {
                console.log('uh oh')
            }
        })
    }

})





/*
function openHex() {

    $( ".show" ).change(function() {
        console.log( "Handler for .change() called." );
      });

    
    $( ".hex-button" ).each( function( index, element ){

        // if hex-button has .show --- problem is they don't have yet...
        if ($(element).parent().next().find('.collapse').hasClass('show')) {
            $(element).addClass("open");
            $(element).removeClass("open2");

            console.log( $(element).text());
        }

    });


}*/




// This function adds the 'open' class to the hex button when clicked. 
$(function(){
    var elem = $(this);

    $('.hex-button').on('click', function () {
        if ($(this).parent().next().find('.collapse').hasClass('show') && $(this).parent().next().find('.collapse').show()) {
            $(this).removeClass("open");
            $(this).removeClass("open2");
        }
        else {
            $(this).addClass("open");

            var button = $(this);

            setTimeout(function() {
                if (button.hasClass("open")) {
                    button.addClass('open2');
                }
            }, 2000);
        }
    });
});






// SEARCH MODE 
$(document).ready(function(){

    // When the user does ctrl-f or ctrl-/
    var keydown = null;

    $(window).keydown(function(e) {
        if ( ( e.keyCode == 70 && ( e.ctrlKey || e.metaKey ) ) ||
            ( e.keyCode == 191 ) ) {
            keydown = new Date().getTime();
        }

        return true;
    }).blur(function() {
        if ( keydown !== null ) {
            var delta = new Date().getTime() - keydown;
            if ( delta >= 0 && delta < 1000 )
                console.log('finding');

                $('.collapse:not(".show")').collapse('show');// show anything that isn't already shown

                console.log('expanded');
            keydown = null;

            // activate search mdoe
            $('#searchingBG').show();
            // this removes clip-path from the vision section, which somehow screws up z-index.
            $('.vision').removeClass('first-category');

            // setup the hidey effect
            $('#searchModedies').fadeTo( 1, 1 );
            $('#searchModedies').hide();
            $('.bye').hide();


        }
    });

    $('#searchingBG').click(function() {
        $('#searchingBG').hide();
        $('.collapse.show')
            .collapse('hide');// collapse anything thats already shown
        console.log('collapsed');
        $('#searchModedies').show();
        $('#searchModedies').fadeTo( 1500, 0 );

        setTimeout(function() {
            $('.bye').show();
        }, 750);
        setTimeout(function() {
            $('#searchModedies').hide();
        }, 1500);
    });
});


// expand / collapse button
$(document).ready(function(){

    // expand all button
    $('.expandAll').click(function() {
        
        $('.collapse:not(".show")')
            .collapse('show');// show anything that isn't already shown
        $('.expandAll').hide(); // hide the expand all button
        $('.collapseAll').show(); // show the collapse all button

        console.log('all expanded');
    });

    // collapse all button
    $('.collapseAll').click(function() {
        $('.collapse.show')
            .collapse('hide');// collapse anything thats already shown
        $('.collapseAll').hide();// hide the collapse all button
        $('.expandAll').show(); // show the expand all button
        console.log('all collapsed');
    });
});




// adds .ie to html tag if browser is ie
$(document).ready(function() {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    
    if ( isIE ) {
      document.documentElement.classList.add('ie');
      console.log('this browser is IE');
    }
    else {
        console.log("this browser ain't IE");
    }
})

// Automatically adjust the height of the carousels based on their largest panel.
$(document).ready(function() {

    var maxHeight = -1;

    $('#whatweheard .carousel-item').each(function() {
        maxHeight = maxHeight > $(this).actual('height') ? maxHeight : $(this).actual('height');
    });

    $('#whatweheard .carousel-item').each(function() {
        //console.log("what we heard final max height is ", maxHeight);
        $(this).height(maxHeight);
    });


    var maxHeight2 = -1;

    $('#sixthemes .carousel-item').each(function() {
        maxHeight2 = maxHeight2 > $(this).actual('height') ? maxHeight2 : $(this).actual('height');
    });

    $('#sixthemes .carousel-item').each(function() {
        //console.log("six themes final max height is ", maxHeight2);
        $(this).height(maxHeight2);
    });

});



