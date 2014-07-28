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
