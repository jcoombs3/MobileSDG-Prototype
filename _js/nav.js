$(window).load(function(){

    var navWidth = 192;
    var navWidthMedia = 50;

    $('#nav').on('click',function(e){
        $('#nav').toggleClass('expanded');

        if($('#nav').hasClass('expanded')){
            if(!$('#nav').hasClass('busy')){
                $('#nav').addClass('busy');

                TweenMax.to($('#nav'), 0, {width:'100%'});
                TweenMax.to($('.list-section'), 0, {opacity:'1'});

                TweenMax.to($('.nav-container'), 0.5, {width:navWidth+'px', ease:Back.easeOut});
                TweenMax.to($('.nav-overlay'), 1, {opacity:'0.5', ease:Back.easeOut});

                TweenMax.to($('.list-section li'), 0.1, {borderColor:'#DfE5E6'});
                TweenMax.to($('.list-section li a'), 0.5, {opacity:'1', onComplete:function(){$('#nav').removeClass('busy');}});

            }
        }
        else {

            if($(e.target).hasClass('nav-overlay') 
                || $(e.target).hasClass('nav-link') 
                || $(e.target).hasClass('link') 
                || $(e.target).hasClass('icon')){

            if(!$('#nav').hasClass('busy')){
                $('#nav').addClass('busy');
                    
                    TweenMax.to($('.nav-overlay'), 1, {opacity:'0', ease:Back.easeIn, onComplete:function(){
                        TweenMax.to($('#nav'), 0, {width:navWidthMedia+'px'});
                    }});
                    TweenMax.to($('.nav-container'), 0.5, {width:navWidthMedia+'px', ease:Back.easeIn, onComplete:function(){$('#nav').removeClass('busy');}});
                    
                    TweenMax.to($('.list-section li a'), 0.5, {opacity:'0'});
                    TweenMax.to($('.list-section li'), 0.1, {borderColor:'#D32728'});
                }     
            }
            else {
                $('#nav').addClass('expanded');
            }
        }
    });

});