$(window).load(function(){

    setup('#loading');


    $('.loading-overlay').on('click',function(){
        $('.tiles-overlay').toggleClass('hidden');
        TweenMax.staggerFrom($('.tile'), 2, {rotationY:"-270deg", top:"100px", transformOrigin: "50% 50% 80", ease:Back.easeOut}, 0.005);
        TweenMax.to($('.tiles-overlay'),6,{x:'-=150',y:'-=200'});
    });

});

function setup(el){

    switch (el) {
        case ('#loading'):
            var loadingWidth = $('.loading-overlay').outerWidth();
            var loadingHeight = $('.loading-overlay').outerHeight();
            var tileWidth = loadingWidth*0.10;
            TweenMax.to($('.tile'),0,{width:tileWidth+'px',height:tileWidth+'px'});
            TweenMax.to($('.tiles-overlay'),0,{width:tileWidth*10+'px',height:tileWidth*10+'px'});
            $('.tiles-overlay').addClass('hidden');
            break;
    }

}