$(function() {
	$(".header-top__menu").on("click", function(e) {
		e.preventDefault();
		$(".js-top-menu").fadeIn();
	});
	$(".js-close-btn").on("click", function(e) {
		e.preventDefault();
		$(".js-top-menu").fadeOut();
	});
});