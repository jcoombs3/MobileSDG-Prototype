$(window).load(function(){

    setup('#loading');
    setup('#apps');

});

function setup(el){

    switch (el) {
        case ('#loading'):
            var width = $(window).outerWidth() * .10;
            TweenMax.to($('.tile'),0,{height:width+'px'});

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

            //node-tree setup
            var branchHeight = $('.node-tree').outerHeight()/2 - $('.fruit').outerHeight()/2;
            $('.branch').css('height', branchHeight);

            // after ember 

            apps_loadAnim();
            
            break;
    }

}