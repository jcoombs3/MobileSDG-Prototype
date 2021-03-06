$(window).load(function(){

    $('#apps .app-list .app-front').on('click',function(e){
        var parent = $(e.currentTarget).parent();
        if(!$('#apps ul').hasClass('sticky')){
            $('#apps').addClass('locked');
            stackDeck(parent);
        }
    });

    $('#apps .back .button').on('click',function(){
        appBackToggle();
    });

    $('#apps .mobile-back-table .mobile-back-btn').on('click',function(){
        appBackToggle();
    });

    $('#apps ul.apps').hover(function(e){}, function(e){
        if(!$('#apps').hasClass('locked')){
            endPeek();
        }
    });

    $('#apps .app-list li').hover(function(e){
        if(!$('#apps').hasClass('locked')){
            detailCheck($(e.currentTarget)); 
        }
    },function(e){
        if(!$('#apps').hasClass('locked')){
            $('#apps').addClass('switching');
            endPeek();
        }
    });

    $('#apps-anim').on('click',function(){
        animApps();
    });

    $('#apps li .app-load-btn').on('click',function(){
        appBackToggle();
        endPeek();
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

    if(!$(li).hasClass('active')){
        var order = $(li).data('order');
        var delay = 0.03;
        var offset = $(li).offset();
        var posY = offset.top;
        var maxDelay = 0;

        $(li).addClass('active');

        $('#breadcrumb').addClass('closed');

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

        $('#apps .app-list ul.apps').addClass('sticky');

        centerApp($(li), maxDelay);
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
    var target = $('#apps .app-list ul.apps').find('.active');
    var order = $(target).data('order');
    var delay = 0.03;
    
    $(target).removeClass('load-state');

    TweenMax.to($('#apps .app-list ul.apps'),0.25,{top:'0', onComplete:function(){

        $('#apps li.app').each(function(){
            var orderDelta = Math.abs($(this).data('order') - order);
            var delayDelta = delay * orderDelta;
            
            TweenMax.to($(this),0.2,{top:'0', opacity:'1', delay:delayDelta, ease:Back.easeIn, onComplete:function(){
                $(target).removeClass('active');
                setTimeout(function(){$('#apps').removeClass('locked')}, 250);
            }});
        });
    }});

    $('#breadcrumb').removeClass('closed');

    $('#apps .app-list ul.apps').removeClass('sticky');
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
    var windowHeight = $(window).height()/2;
    var offset = $(li).offset();
    var posY = offset.top;
    var offKilter = 0;


    if($(window).width() <= 480){
        var loadBarWidth = 50 - ($(li).find('.app-front').outerWidth()*0.02); // thinking that this wont change 
    }
    else {
        var loadBarWidth = 100 - ($(li).find('.app-front').outerWidth()*0.02); // thinking that this wont change
    }

    TweenMax.to($('#apps .app-list li.app.active .load-bar'),0,{width:loadBarWidth+'px'});

    if(posY < $('#breadcrumb').outerHeight()) {
        TweenMax.to($(li),0.1,{top:$('#breadcrumb').outerHeight() - posY});
        offKilter = -1*($('#breadcrumb').outerHeight() - posY);
    }
    else if(posY+liHeight*2 > $(window).height()){
        var delta = $(window).height() - posY;
        var posTop = liHeight*2 - delta; 
        TweenMax.to($(li),0.1,{top:-posTop});
        offKilter = posTop;
    }

    var newTop = windowHeight - posY - liHeight;
    maxDelay+=0.5;

    TweenMax.to($('#apps .app-list ul.apps'),0.25,{top:newTop+offKilter+'px', delay:maxDelay, onComplete:function(){
        appBackToggle(li);
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
function appBackToggle(li){
    $('#apps li.app.active').toggleClass('load-state');

    if($('#apps li.app.active').hasClass('load-state')){  
    
        $('#apps li.app.active').addClass('show-load');

            if($(window).width() <= 480){

                TweenMax.to($('#apps li.app.active .app-load-btn'),0,{left:'-'+($(li).outerWidth() - $(li).find('.load-bar').outerWidth()) + 'px', onComplete:function(){
                    TweenMax.to($('#apps-container'),0.5,{left:'-'+$(window).width()*0.85 + 'px', ease:Back.easeOut, onComplete:function(){
                        TweenMax.to($('#apps li.app.active .app-load-btn'),0.25,{delay:'0.25', opacity:'1', left:'18px'});
                        TweenMax.to($('#breadcrumb'),0.25,{left:($(li).outerWidth() - $(li).find('.load-bar').outerWidth()) + 'px', ease:Back.easeOut});
                        TweenMax.to($('#app-detail'),0.5,{opacity:'1'});
                        TweenMax.to($('#breadcrumb .mobile-back-table'),0,{left:'0', opacity:'0', onComplete:function(){
                            TweenMax.to($('#breadcrumb .mobile-back-table'),1.5,{opacity:'1'});
                        }});
                        activateListeners();
                    }});
                }});
            }
            else {

                TweenMax.to($('#apps li.app.active .app-load-btn'),0,{left:'-'+($(li).outerWidth() - $(li).find('.load-bar').outerWidth()) + 'px', onComplete:function(){
                    TweenMax.to($('#apps-container'),0.5,{left:'-'+($(li).outerWidth() - $(li).find('.load-bar').outerWidth()) + 'px', ease:Back.easeOut, onComplete:function(){
                        TweenMax.to($('#apps li.app.active .app-load-btn'),0.25,{delay:'0.25', opacity:'1', left:'18px'});                       
                        TweenMax.to($('#app-detail'),0.5,{opacity:'1'});
                        TweenMax.to($('#breadcrumb'),0.25,{left:($(li).outerWidth() - $(li).find('.load-bar').outerWidth()) + 'px', ease:Back.easeOut});
                        activateListeners();
                    }});
                }});

            }
    
    }
    else {                       

        TweenMax.to($('#breadcrumb .mobile-back-table'),0,{left:'-15%'});

        $('#apps li.app.active').removeClass('show-load');
        TweenMax.to($('#apps li.app.active .app-load-btn'),0.5,{opacity:'0', onComplete:function(){
            unstackDeck();
        }});
        
        TweenMax.to($('#apps-container'),0.2,{left:'0px', onComplete:function(){
            $("#app-detail").animate({scrollTop: '0'}, 500);                        
            TweenMax.to($('#app-detail'),0,{opacity:'0.1'});
            $('#app-detail').empty();
        }});
        TweenMax.to($('#breadcrumb'),0.2,{left:'0px'});
    }
}

/**
* This method is the simulated animation for the sliding in app list
*/
function animApps(){
    $('#apps .app-list ul.apps').addClass('height-extra');
    TweenMax.to($('#apps .app-list ul.apps'),0,{top:'100%'});
   
    TweenMax.to($('#apps .app-list ul.apps'),1,{top:'0', delay:'0.5', ease:Back.easeOut, onComplete:function(){
        $('#apps .app-list ul.apps').removeClass('height-extra');
    }});
}

function apps_loadAnim() {
    $('#apps .loading-anim .load-bar').each(function(i){

        var posY = (Math.random() * $(window).height() * .16667) + (i*$(window).height()*.16667);

        //var posY = (Math.random() * ($(window).outerHeight()*.16667*(i+1)));

        TweenMax.to($(this),0,{top:posY+'px'});

    });

    TweenMax.to($('#apps .loading-anim .loading-node'),5,{rotationZ:'2360deg'});

    TweenMax.to($('#apps .loading-anim .load-bar'),0.5,{left:'-100%',delay:'1',onComplete:function(){
        TweenMax.staggerTo($('#apps .loading-anim .load-bar'),0.5,{left:0},0.25);
        TweenMax.to($('#apps .loading-anim .loading-node'),1,{opacity:'0',delay:'1'});
    }});

    TweenMax.to($('#apps .loading-anim'),0,{opacity:'1',delay:'3.5',onComplete:function(){
        TweenMax.staggerTo($('#apps .loading-anim .load-bar'),0.7,{top:'100%',ease:Back.easeIn},0.10);
        TweenMax.to($('#apps .loading-anim'),1.3,{background:'transparent', opacity:'0.5', onComplete:function(){
            $('#apps .loading-anim').addClass('hidden');
        }});

        animApps();
    }});

}

function centerDevices() {
    var divCounter = 0; // only counting inside of divs (-1)
    var width = 0;
    $('#app-summary .devices-container .device').each(function(){
        width += $(this).outerWidth();
        divCounter++;
    });

    var delta = ($('#app-summary .devices-container').outerWidth() - width)/(divCounter+1);

    TweenMax.to($('#app-summary .device'),0,{marginLeft:delta+'px'});
}

