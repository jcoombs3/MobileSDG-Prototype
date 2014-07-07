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
            
            break;
    }

}