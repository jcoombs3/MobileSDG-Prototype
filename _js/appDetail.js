function activateListeners() {

    $('#app-detail .block.title').on({
        click: function(e) {
            var offset = $('#app-detail .title .description').offset();

            $("#app-detail").animate({scrollTop: offset.top - 30}, 1000);

            TweenMax.to($('#app-detail .title .readmore'),0.5,{opacity:'0'});
            TweenMax.to($('#app-detail .title .more-content'),0,{display:'block', onComplete:function(){
                TweenMax.to($('#app-detail .title .more-content'),0.5,{opacity:'1'});
            }});
        },
    }, '.readmore');

    $('#app-detail .block.meet-the-team').on({
        mouseenter: function(e) {
            var width = $('.member-img').outerWidth();
            TweenMax.to($(e.currentTarget).find('.member-overlay'),0,{height:width+'px', width:width+'px', onComplete:function(){
                TweenMax.to($(e.currentTarget).find('.member-overlay'),0.5,{opacity:'0.8'});
            }});
        },
        mouseleave: function(e) {
            TweenMax.to($(e.currentTarget).find('.member-overlay'),0.5,{opacity:'0'});
        }
    }, '.member');

    $('#app-detail .block.img-slider').on({
        click: function(e) {
            $(e.currentTarget).parents('.img-slider').find('.arrow-right').removeClass('disabled');

            var ul = $(e.currentTarget).parents('.img-slider').find('ul');
            var order = $(ul).find('li.target').data('order');
            var width = $(ul).find('li').outerWidth() + parseInt($(ul).find('li:nth-child(2)').css('margin-left'));

            if(order < ($(ul).children().length - 1)) { // due to clearfix
                order++;
                TweenMax.to($(ul),0.75,{left:'-='+width+'px', ease:Back.easeInOut});
                $(ul).find('li.target').removeClass('target');
                $(ul).find('li:nth-child('+order+')').addClass('target');

                if(order == ($(ul).children().length - 1))
                {
                	$(e.currentTarget).parents('.img-slider').find('.arrow-left').addClass('disabled');
                }
            }
        },
    }, '.arrow-left');

    $('#app-detail .block.img-slider').on({
        click: function(e) {
            $(e.currentTarget).parents('.img-slider').find('.arrow-left').removeClass('disabled');
            
            var ul = $(e.currentTarget).parents('.img-slider').find('ul');
            var order = $(ul).find('li.target').data('order');
            var width = $(ul).find('li').outerWidth() + parseInt($(ul).find('li:nth-child(2)').css('margin-left'));

            if(order > 1){
                order--;
                TweenMax.to($(ul),0.75,{left:'+='+width+'px', ease:Back.easeInOut});
                $(ul).find('li.target').removeClass('target');
                $(ul).find('li:nth-child('+order+')').addClass('target');

                if(order == 1)
                {
                	$(e.currentTarget).parents('.img-slider').find('.arrow-right').addClass('disabled');
                }
            }
        },
    }, '.arrow-right');

    $('#app-detail .block.meet-the-team').on({
        click: function(e) {
            TweenMax.to($('#app-detail .meet-the-team .member:nth-child(n+7)'),0,{display:'block', opacity:'0', onComplete:function(){
                TweenMax.to($('#app-detail .meet-the-team .member:nth-child(n+7)'),0.5,{opacity:'1'});
            }});
            TweenMax.to($('#app-detail .meet-the-team .full-team'),0,{display:'none'});
        },
    }, '.full-team');

}