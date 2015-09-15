$(function() {

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

	$('#capa-gmn').magnificPopup({
		items: [
			{
				src: '../assets/images/gmn1.png',
				title: 'Adivinhe Meu Número'
			},
			{
				src: '../assets/images/gmn2.png',
				title: 'Adivinhe Meu Número'
			},
			{
				src: '../assets/images/gmn3.png',
				title: 'Adivinhe Meu Número'
			}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});

	$('#capa-ht').magnificPopup({
		items: [
			{
				src: '../assets/images/ht1.png',
				title: 'Hotsite'
			},
			{
				src: '../assets/images/ht2.png',
				title: 'Hotsite'
			},
			{
				src: '../assets/images/ht3.png',
				title: 'Hotsite'
			},
			{
				src: '../assets/images/ht4.png',
				title: 'Hotsite'
			},
			{
				src: '../assets/images/ht5.jpg',
				title: 'Hotsite'
			},
			{
				src: '../assets/images/ht6.jpg',
				title: 'Hotsite'
			},
			{
				src: '../assets/images/ht7.jpg',
				title: 'Hotsite'
			},
			{
				src: '../assets/images/ht8.jpg',
				title: 'Hotsite'
			}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});

	$('#capa-bm').magnificPopup({
		items: [
			{
				src: '../assets/images/bm1.png',
				title: 'Bomercado'
			},
			{
				src: '../assets/images/bm2.png',
				title: 'Bomercado'
			},
			{
				src: '../assets/images/bm3.png',
				title: 'Bomercado'
			},
			{
				src: '../assets/images/bm4.png',
				title: 'Bomercado'
			},
			{
				src: '../assets/images/bm5.png',
				title: 'Bomercado'
			},
			{
				src: '../assets/images/bm6.png',
				title: 'Bomercado'
			},
			{
				src: '../assets/images/bm7.png',
				title: 'Bomercado'
			},
			{
				src: '../assets/images/bm8.png',
				title: 'Bomercado'
			}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});

	$('#capa-rc').magnificPopup({
		items: [
			{
				src: '../assets/images/rc1.png',
				title: 'Rubens Center'
			},
			{
				src: '../assets/images/rc2.png',
				title: 'Rubens Center'
			},
			{
				src: '../assets/images/rc3.png',
				title: 'Rubens Center'
			},
			{
				src: '../assets/images/rc4.png',
				title: 'Rubens Center'
			},
			{
				src: '../assets/images/rc5.png',
				title: 'Rubens Center'
			}
		],
		gallery: {
			enabled: true
		},
		type: 'image'
	});

});

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
