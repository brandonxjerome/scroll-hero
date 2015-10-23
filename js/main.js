$(window).resize(function () { 

	console.log($('.hills').width() - $(window).width() );

});

$(window).scroll(function () {

	var console = ($(window).scrollTop());

	//console.log($(window).scrollTop());

	$('.hills').css('left', '-' + console + 'px' )

});


