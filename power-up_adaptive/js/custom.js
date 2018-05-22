$(function() {
	/*Анимация блока с призывом к действию*/
	$('#js-pop-up').addClass('animated zoomInDown');
	$('#js-pop-up').delay(3000).fadeIn();

	/*Слайдер отзывов*/
	$('.slider').slick({
		speed: 500,
		arrows: true,
		prevArrow: '<img class="prev-arrows" src="images/prev-arrows.png">',
		nextArrow: '<img class="next-arrows" src="images/next-arrows.png">'
	});
});