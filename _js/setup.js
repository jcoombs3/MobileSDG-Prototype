$(window).load(function(){

    setup('#loader');
    setup('#loading');
    setup('#apps');
    setup('#node-tree');

});

function setup(el){

    switch (el) {
        case ('#loader'):
            var top = $('#loader').outerHeight()/2 - $('#loader .anim-balls').outerHeight()/2;
            var left = $('#loader').outerWidth()/2 - $('#loader .anim-balls').outerWidth()/2;

            TweenMax.to($('#loader .anim-balls'),0,{top:top+'px',left:left+'px'});

            break;
        case ('#loading'):
            var width = $(window).outerWidth() * .10;
            TweenMax.to($('#loading .tile'),0,{height:width+'px'});

            var order = 1;
            $('#loading .tile').each(function(){
                $(this).data('order',order);

                if(order == 10){
                    order=0;
                }

                order++;
            })
            break;

        case ('#apps'):
            var order = 0;

            $('#apps li').each(function(){
                $(this).data('order',order);
                order++;
            });

            TweenMax.to($('#apps .back .button-container'),0,{height:'0px'});

            // after ember 
            apps_loadAnim();
            
            break;
        case ('#node-tree'):
            TweenMax.to($('#apps .summary-container'),1,{height:'100px', opacity:'1'});
            TweenMax.to($('#apps .devices-container'),1,{height:'100px', opacity:'1', onComplete:function(){
                TweenMax.to($('#apps .summary-container'),0,{opacity:'0'});
                TweenMax.to($('#apps .devices-container'),0,{opacity:'0'});
            }});

            // tiles 
            var tileWidth = $('#node-tree .tile').outerHeight();
            TweenMax.to($('#node-tree .tile'),0,{width:tileWidth+'px'});

            break;
        case ('#node-tree .tiles'):
            var containerWidth = $('#node-tree .container').outerWidth();
            var containerHeight = $('#node-tree .container').outerHeight();
            var tileWidth = containerWidth/8;

            var layers = Math.ceil(containerHeight/tileWidth);

            for(var i=0;i<layers;i++){ 
                $('#node-tree .container').append(
                    "<div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div><div class='tile'></div>"
                );
            }

            $('#node-tree .container .tile').each(function(){
                var i = Math.random() * 100;
                var delay = Math.random() * 5;
                var animNum = 1; 

                if(i < 101){
                    animNum = 1;
                    TweenMax.to($(this),0,{height:tileWidth+'px', top:'18%'});
                }
                // else if(i > 25 & i < 50){
                //     animNum = 2;
                //     TweenMax.to($(this),0,{height:tileWidth+'px', rotationY:'-90deg', top:'20%', left:'20%'});
                // }
                // else if(i > 50 & i < 75){
                //     animNum = 3;
                //     TweenMax.to($(this),0,{height:tileWidth+'px', rotationX:'90deg', top:'-2%', left: '-50%'});
                // }
                // else {
                //     animNum = 4;
                //     TweenMax.to($(this),0,{zIndex:'-1', height:tileWidth+'px', top:'-20%', left:'30%'});
                // }

                $(this).data('anim',animNum);
                $(this).data('delay',delay);
            });

            appBackToggle();

            break;
    }

}