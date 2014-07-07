$(window).load(function(){

    var navWidth = 192;
    var navWidthMedia = 50;

    var openNav = false;
    if($('#nav').outerWidth() >= navWidth){
        openNav = true;
    }

    $('#nav').on('click',function(e){
        if(!openNav){
            $('#nav').toggleClass('expanded');
        }
        if($('#nav').hasClass('expanded')){
            $('#nav').addClass('busy');

            TweenMax.to($('#nav'), 0, {width:'100%'});
            TweenMax.to($('.list-section'), 0, {opacity:'1'});

            TweenMax.to($('.nav-container'), 0.5, {width:navWidth+'px', ease:Back.easeOut});
            TweenMax.to($('.nav-overlay'), 1, {opacity:'1', ease:Back.easeOut});

            TweenMax.to($('.list-section li'), 0.1, {borderColor:'#DfE5E6'});
            TweenMax.to($('.list-section li a'), 0.5, {opacity:'1'});

            TweenMax.staggerFrom($('.tile'),0.2,{rotationY:'90deg'},0.005);

            window.setTimeout(function(){$('#nav').removeClass('busy')}, 1000);

        }
        else {

        if($(e.target).hasClass('nav-overlay') 
            || $(e.target).hasClass('nav-link') 
            || $(e.target).hasClass('link') 
            || $(e.target).hasClass('icon')
            || $(e.target).hasClass('tile')
            || $(e.target).hasClass('nav-container')
            || $(e.target).hasClass('logo-block')){

                $('#nav').addClass('busy');
                    
                TweenMax.to($('.nav-overlay'), 1, {opacity:'0', ease:Back.easeIn, onComplete:function(){
                    TweenMax.to($('#nav'), 0, {width:navWidthMedia+'px'});
                }});
                TweenMax.to($('.nav-container'), 0.5, {width:navWidthMedia+'px', ease:Back.easeIn, onComplete:function(){$('#nav').removeClass('busy');}});
                
                TweenMax.to($('.list-section li a'), 0.5, {opacity:'0'});
                TweenMax.to($('.list-section li'), 0.1, {borderColor:'#D32728'});
                 
            }
            else {
                if(!openNav){
                    $('#nav').addClass('expanded');
                }
            }
        }
    });

});