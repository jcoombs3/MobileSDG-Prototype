$(window).load(function(){
	titleLoad();

});

function titleLoad(){
	//logo setup
	var logoLeft = $('#appFocus .title').outerWidth()/2 - $('#appFocus .title .logo').outerWidth()/2;
	var logoTop = $('#appFocus .title').outerHeight()/2 - $('#appFocus .title .logo').outerHeight();
	var brandTop = $('#appFocus .title').outerHeight()/2 + $('#appFocus .title .brandName').outerHeight() - $('#appFocus .title .logo').outerHeight();
	var arrowTop = $('#appFocus .title').outerHeight() - $('#appFocus .title .logo').outerHeight() - $('#appFocus .title .brandName').outerHeight() - $('#appFocus .title .dropArrow').outerHeight();
	var arrowLeft= $('#appFocus .title').outerWidth()/2 - $('#appFocus .title .dropArrow').outerWidth()/2;
	TweenMax.to($('#appFocus .title .logo'), 0, {left: logoLeft, top: logoTop});
	TweenMax.to($('#appFocus .title .brandName'), 0, {top: brandTop});
	TweenMax.to($('#appFocus .title .dropArrow'), 0, {top: arrowTop + 'px', left: arrowLeft});

}