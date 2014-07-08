$(window).load(function(){

    $('#apps li').on('click',function(e){
        stackDeck(e);
    });

    $('#apps .back .button').on('click',function(){
        appBackToggle();
    });

    $('#apps-anim').on('click',function(){
        animApps();
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

    if(!$(li.currentTarget).hasClass('active')){
        var order = $(li.currentTarget).data('order');
        var delay = 0.03;
        var offset = $(li.currentTarget).offset();
        var posY = offset.top;
        var maxDelay = 0;

        $(li.currentTarget).addClass('active');

        $('#apps li.app').each(function(){
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

        $('#apps ul').addClass('sticky');

        centerApp($(li.currentTarget), maxDelay);
    }
    else {
        // do nothing
    }
    
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
    TweenMax.to($('.description'), 0.5, {opacity: 0});

    TweenMax.to($('#apps ul'),0.25,{top:'0', onComplete:function(){

        $('#apps li.app').each(function(){
            var orderDelta = Math.abs($(this).data('order') - order);
            var delayDelta = delay * orderDelta;
            
            TweenMax.to($(this),0.2,{top:'0', opacity:'1', delay:delayDelta, ease:Back.easeIn, onComplete:function(){
                $(target).removeClass('active');
            }});
        });
    }});

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
        TweenMax.to($('.description'), 0.5, {opacity: 1});

        appBackToggle();
    }});
}

/**
* This method is the toggled animation for the back button and its collective children. 
*
* @var liHeight half of the selected app's height for centering purposes 
* @var windowHeight half of the device's height for centering purposes
* @var offset selected app's position in device (left and top)
* @var posY selected app's y position
* @var offKilter if the app selected is off the viewable area in any form, we use this variable to make sure when the ul is given overflow:hidden, the whole app is shown instead of cut off.
*/
function appBackToggle(){
    $('#apps .back').toggleClass('anim');

    if($('#apps .back').hasClass('anim')){
        $('#apps .back').addClass('reveal');
        TweenMax.to($('#apps .back .button-container'),0,{height:'auto'});

        TweenMax.to($('#apps .back .load-bar'),0.2,{height:'100px', delay:'0.5', onComplete:function(){
            TweenMax.to($('#apps .back .load-bar'),0.2,{height:'0px',top:'100px'});
            TweenMax.to($('#apps .back .button'),0.5,{opacity:'1'});
            TweenMax.to($('#apps .back .button'),1.5,{rotationZ:'1080deg', onComplete:function(){
                TweenMax.to($('#apps .back .button'),0.5,{color:'#ffffff'});
            }});
        }});
    }
    else {
        TweenMax.to($('#apps .back .button'),0.2,{color:'#1d1d1d'});
        TweenMax.to($('#apps .back .load-bar'),0.5,{top:'0px'});
        TweenMax.to($('#apps .back .button'),1.5,{rotationZ:'0deg'});
        TweenMax.to($('#apps .back .button'),0.3,{opacity:'0', onComplete:function(){
            TweenMax.to($('#apps .back .load-bar'),0.2,{height:'0px', onComplete:function(){
                $('#apps .back').removeClass('reveal');
                TweenMax.to($('#apps .back .button-container'),0,{height:'0px'});
                unstackDeck();
            }});
        }});
    }
}

/**
* This method is the simulated animation for the sliding in app list
*/
function animApps(){
    $('#apps ul').addClass('height-extra');
    TweenMax.to($('#apps ul'),0,{top:'100%'});
   
    TweenMax.to($('#apps ul'),1,{top:'0', delay:'0.5', ease:Back.easeOut, onComplete:function(){
        $('#apps ul').removeClass('height-extra');
    }});
}

function apps_loadAnim() {
    $('#apps .loading-anim .load-bar').each(function(){
        var posY = Math.random() * $(window).outerHeight();

        TweenMax.to($(this),0,{top:posY+'px'});

    });

    TweenMax.to($('#apps .loading-anim .load-bar'),0.5,{left:'-100%',delay:'1',onComplete:function(){
        TweenMax.staggerTo($('#apps .loading-anim .load-bar'),0.5,{left:0},0.25);
    }});

    TweenMax.to($('#apps .loading-anim'),0,{opacity:'1',delay:'3.5',onComplete:function(){
        TweenMax.staggerTo($('#apps .loading-anim .load-bar'),1,{top:'100%',ease:Back.easeIn},0.15);
        TweenMax.to($('#apps .loading-anim'),2,{opacity:'0.5', onComplete:function(){
            $('#apps .loading-anim').addClass('hidden');
        }});

        animApps();
    }});

}


