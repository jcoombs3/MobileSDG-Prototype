$(window).load(function(){

    $('#apps li').on('click',function(e){
        stackDeck(e);
    });

    $('#apps .back').on('click',function(){
        unstackDeck();
    });
    
});

/**
* This method stacks the apps under the selected app, creating a card stack animation
*
* @param    li the selected list item (app)
*
* @var order within the ul, what is the selected app's placement 
* @var delay hard coded delay variable that stacks depending on how far each other app is away from the selected app 
* @var offset selected app's position in device (left and top)
* @var posY selected app's y position
* @var maxDelay finding the farthest delay possible for the centerApps function, since we cannot use an OnComplete function on the staggered Tweens
*/
function stackDeck(li) {
    var order = $(li.currentTarget).data('order');
    var delay = 0.03;
    var offset = $(li.currentTarget).offset();
    var posY = offset.top;
    var maxDelay = 0;

    $(li.currentTarget).addClass('active');

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

    centerApp($(li.currentTarget), maxDelay);
}

/**
* This method unstacks the apps and resets the ul. 
*
* @var target selected list item (app)
* @var order within the ul, what is the selected app's placement 
* @var delay hard coded delay variable that stacks depending on how far each other app is away from the selected app 
*/
function unstackDeck() {
    var target = $('#apps ul').find('.active');
    var order = $(target).data('order');
    var delay = 0.03;
    
    $(target).removeClass('load-state');

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

/**
* This method centers the ul and list item centered in its scrollable area for alignment purposes
*
* @var liHeight half of the selected app's height for centering purposes 
* @var windowHeight half of the device's height for centering purposes
* @var offset selected app's position in device (left and top)
* @var posY selected app's y position
* @var offKilter if the app selected is off the viewable area in any form, we use this variable to make sure when the ul is given overflow:hidden, the whole app is shown instead of cut off.
*/
function centerApp(li, maxDelay) {
    var liHeight = $(li).outerHeight()/2;
    var windowHeight = $(window).outerHeight()/2;
    var offset = $(li).offset();
    var posY = offset.top;
    var offKilter = 0;

    if(posY < 0) {
        TweenMax.to($(li),0.1,{top:-1*posY});
        offKilter = posY;
    }
    else if(posY+liHeight*2 > $(window).outerHeight()){
        var delta = $(window).outerHeight() - posY;
        var posTop = liHeight*2 - delta; 
        TweenMax.to($(li),0.1,{top:-posTop});
        offKilter = posTop;
    }

    var newTop = windowHeight - posY - liHeight;
    maxDelay+=0.5;

    TweenMax.to($('#apps ul'),0.25,{top:newTop+offKilter+'px', delay:maxDelay, onComplete:function(){
        $(li).addClass('load-state');
    }});
}


