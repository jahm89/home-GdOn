//Init element menu
(function() {
	var h = $(window).height();
	var margin = h*0.10;
	var hcontainer = h-(2*margin);

	$('.container').css('margin-top', margin);
	$('.container').css('height', hcontainer);
})();