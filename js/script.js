(function() {

	animation();

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

})();

function animation(){
	var options = {
		duration: 800
	};
	$('.glyphicon-chevron-down')
		.animate({
			top: 0,
			opacity: 1
		}, options)
		.animate({
			top: '30px',
			opacity: 0.3
		},
		$.extend(true, {}, options, {
			complete: function() {
				animation();
			}
		})
	);
}
