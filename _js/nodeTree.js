function nodeTreeToggle() {
    $('#node-tree').toggleClass('inject-app');

    if($('#node-tree').hasClass('inject-app')){
        // summary container 
        var summaryHeight = $('#apps .apps-container ul').outerHeight()/2 - $('#apps .apps-container li').outerHeight()/2;
        TweenMax.to($('#apps .summary-container'),1,{height:summaryHeight+'px'});

        // devices container 
        TweenMax.to($('#apps .devices-container'),1,{height:'15%', onComplete:function(){
            toggleSummary();
            toggleDevices();
        }});    
    }
    else {
        toggleSummary();
        toggleDevices();
        removeTiles();
    }
}

function toggleSummary() {
    $('#apps .summary-container').toggleClass('reveal');

    if($('#apps .summary-container').hasClass('reveal')){
        TweenMax.to($('#apps .summary-container'),0.5,{opacity:'1'});
    }
    else {
        TweenMax.to($('#apps .summary-container'),0.5,{opacity:'0'});
    }
}

function toggleDevices() {
    $('#apps .devices-container').toggleClass('reveal');

    if($('#apps .devices-container').hasClass('reveal')){
        TweenMax.to($('#apps .devices-container'),0.5,{opacity:'1'});
    }
    else {
        TweenMax.to($('#apps .devices-container'),0.5,{opacity:'0'});
    }
}

function removeTiles() {
    TweenMax.to($('#node-tree'),1,{opacity:'1',onComplete:function(){
        $('#node-tree .container .tile').remove();
    }});
}


// TILE ANIMATION
function animTilesYo() {
    $('#node-tree .container .tile').each(function(){
        var delay = $(this).data('delay');
        var animNum = $(this).data('anim');

        var target = $(this);

        if(animNum == 1){
            TweenMax.to($(target),0,{delay:delay, opacity:'1',onComplete:function(){
                TweenMax.to($(target),0.2,{top:'0'});
            }});
        }
        // else if(animNum == 2){
        //     TweenMax.to($(target),0.5,{delay:delay, opacity:'1',onComplete:function(){
        //         TweenMax.to($(target),0.5,{top:'0', left:'0', rotationY:'0deg'});
        //     }});
        // }
        // else if(animNum == 3){ 
        //     TweenMax.to($(target),0.5,{delay:delay, opacity:'1',onComplete:function(){
        //         TweenMax.to($(target),0.5,{top:'0', left:'0', rotationX:'0deg'});
        //     }});
        // }
        // else { // 4
        //     TweenMax.to($(target),0.5,{delay:delay, opacity:'1',onComplete:function(){
        //         TweenMax.to($(target),0.5,{top:'0', left:'0'});
        //     }});         
        // }
    }); 
}
