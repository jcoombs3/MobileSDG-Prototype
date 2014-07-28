$(window).load(function(){

    $('#app-detail .project-facts').hover(function(e){
        console.log('hovering over member');

        hoverMember($(e.currentTarget));
    });

    $('#app-detail .project-facts').on('click', function(){
        console.log('i did it');
    });

});

function hoverMember(member) {
    $(member).toggleClass('active');

    if($(member).hasClass('active')){
        var height = $(member).find('.member-overlay').outerWidth();
        TweenMax.to($(member).find('.member-overlay'),0,{height:height+'px', top:'-100%'});
    }
    else {
        TweenMax.to($(member).find('.member-overlay'),0,{height:'0px', top:'0'});
    }
}
