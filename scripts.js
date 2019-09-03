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

/*// SEARCH MODE 
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
                $('.collapse').show();
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
        $('.collapse').hide();
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


// expand / collapse
$(document).ready(function(){
    $('.expandAll').click(function() {
        $('.collapse').show();
        $('.expandAll').hide();
        $('.collapseAll').show();
        console.log('all expanded');
    });

    $('.collapseAll').click(function() {
        $('.collapse').hide();
        $('.collapseAll').hide();
        $('.expandAll').show();
        console.log('all collapsed');
    });

    $('.hex-button').click(function() {
        $(this).find('.collapse').show();
        console.log('you click I show how')
    })
});*/