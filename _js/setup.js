$(window).load(function(){

    setup('#loader');
    setup('#loading');
    setup('#apps');
    setup('#node-tree');
    setup('#breadcrumb');

});

function setup(el){

    switch (el) {
        case ('#loader'):
            var top = $('#loader').outerHeight()/2 - $('#loader .anim-balls').outerHeight()/2;
            var left = $('#loader').outerWidth()/2 - $('#loader .anim-balls').outerWidth()/2;

            TweenMax.to($('#loader .anim-balls'),0,{top:top+'px',left:left+'px'});

            break;
        case ('#loading'):
            var width = $(window).width() * .10;
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
            TweenMax.to($('#apps ul'),0,{top:'+='+$('#breadcrumb').outerHeight()+'px', height:$(window).height() - $('#breadcrumb').outerHeight()});
            
            var order = 0;

            $('#apps li').each(function(){
                $(this).data('order',order);
                order++;
            });

            TweenMax.to($('#apps .back .button-container'),0,{height:'0px'});

            var loadBtnTop = $('#apps li').outerHeight()/2 - $('#apps .app-load-btn').outerHeight()/2;
            TweenMax.to($('#apps .app-load-btn'),0,{top: loadBtnTop + 'px'});

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
            var tileNum = 10;
            var tileWidth = containerWidth/tileNum;

            var layers = Math.ceil(containerHeight/tileWidth);
            var el = "";

            for(var x=0;x<tileNum;x++){
                el += "<div class='tile'></div>";
            }

            for(var i=0;i<layers;i++){ 
                $('#node-tree .container').append(
                    el    
                );
            }

            $('#node-tree .container .tile').each(function(){
                TweenMax.to($(this),0,{width:tileWidth+'px'})
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

            break;
        case ('#app-detail .title'):
            var iconWidth = 0;
            $('#app-detail .title .device').each(function(){
                var str =  $(this).css('marginRight')
                iconWidth += ($(this).outerWidth() + parseInt(str.slice(0, str.length - 2)));
            });
            TweenMax.to($('#app-detail .title .icons'),0,{width:iconWidth+'px'});

            break;
        case ('#app-detail .img-slider'):
            $('#app-detail .img-slider').each(function(){
                var length = $(this).find('ul').children().length - 1; // due to clearfix


                var liWidth = $('#app-detail').outerWidth() - (parseInt($(this).css('padding-right')) * 2);
                var ulWidth = (liWidth + parseInt($(this).find('li:nth-child(2)').css('margin-left'))) * length;

                var tableWidth = liWidth - (parseInt($(this).find('li').css('padding')) * 2);
                var tableHeight = $(this).find('li').outerHeight() - (parseInt($(this).find('li').css('padding')) * 2);

                TweenMax.to($(this).find('ul'),0,{width:ulWidth + 'px'});
                TweenMax.to($(this).find('li'),0,{width:liWidth + 'px'});

                if($(window).width() < 480){
                    TweenMax.to($(this).find('img'),0,{maxWidth:tableWidth + 'px'});
                }
                else {
                    TweenMax.to($(this).find('img'),0,{maxWidth:tableWidth + 'px', maxHeight:tableHeight + 'px'});
                }

                $(this).find('li:first-child').addClass('target');

                $(this).find('.arrow-right').addClass('disabled');

                var order = 1;
                $(this).find('li').each(function(){
                    var img = $(this).find('img');
                    console.log(img.width(), img.height());
                    if($(window).outerWidth() < 480){
                        if(img.height() > img.width()){
                            $(this).data('order',order);
                            order++;
                        }
                        else{//img is bad
                            $(this).addClass('bad-dog');
                        }
                    }
                    else{
                        $(this).data('order',order);
                        order++;
                    }
                });
            });

            break;
        case ('#app-detail .geography'):
            var geoWidth = 0;
            $('#app-detail .geography .country-img').each(function(){
                geoWidth += $(this).outerWidth();
            });
            TweenMax.to($('#app-detail .geography .country-container'),0,{width:geoWidth+'px'});

            break;
        case ('#app-detail .meet-the-team'):
            var length = $('#app-detail .meet-the-team .team-container').children().length - 1; // due to clearfix
            if (length > 6){
                $('#app-detail .meet-the-team').append('<div class="full-team">View Full Team</div>');
            }

            break;
    }
}