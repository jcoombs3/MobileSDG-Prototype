$(window).load(function(){

    $('#apps li').on('click',function(e){
        stackDeck(e);
    });


    $('#apps .back').on('click',function(){
        unstackDeck();
    });
    
});

function stackDeck(e) {
    var order = $(e.currentTarget).data('order');
    var delay = 0.03;
    var offset = $(e.currentTarget).offset();
    var posY = offset.top;

    var maxDelay = 0;

    $(e.currentTarget).addClass('active');

    $('#apps li').each(function(){
        var orderDelta = Math.abs($(this).data('order') - order);
        var delayDelta = delay * orderDelta;
        var appOffset = $(this).offset();
        var appPosY = appOffset.top;
        var posYDelta = appPosY - posY;

        if(delayDelta > maxDelay){
            maxDelay = delayDelta;
        }
        
        TweenMax.to($(this),0.2,{top:'-='+posYDelta+'px', opacity:'0', delay:delayDelta, ease:Back.easeIn});
    });

    $('#apps .back').addClass('reveal');
    $('#apps ul').addClass('sticky');

    centerApp($(e.currentTarget), maxDelay);
}


function unstackDeck() {
    var target = $('#apps ul').find('.active');
    var order = $(target).data('order');
    var delay = 0.03;

    TweenMax.to($('#apps ul'),0.25,{top:'0', onComplete:function(){

        $('#apps li').each(function(){
            var orderDelta = Math.abs($(this).data('order') - order);
            var delayDelta = delay * orderDelta;
            
            TweenMax.to($(this),0.2,{top:'0', opacity:'1', delay:delayDelta, ease:Back.easeIn, onComplete:function(){
                $(target).removeClass('active');
            }});
        });
    }});

    $('#apps .back').removeClass('reveal');
    $('#apps ul').removeClass('sticky');
}

function centerApp(li, maxDelay) {
    var liHeight = $(li).outerHeight()/2;
    var windowHeight = $(window).outerHeight()/2;
    var offset = $(li).offset();
    var posY = offset.top;
    var newTop = windowHeight - posY - liHeight;
    maxDelay+=0.5;

    TweenMax.to($('#apps ul'),0.25,{top:newTop+'px', delay:maxDelay});
}


