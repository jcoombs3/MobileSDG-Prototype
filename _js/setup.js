$(window).load(function(){

    setup('#loading');

});

function setup(el){

    switch (el) {
        case ('#loading'):
            var width = $(window).outerWidth() * .10;
            TweenMax.to($('.tile'),0,{height:width+'px'});
            break;
    }

}