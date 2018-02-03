$(document).ready(function() {
	$("#box").hide();
	$("#poll_q").hide().fadeIn(1500);
	$(".butt").on('click', function() {
		$("#box").fadeIn(1500);
		$("#box").on('click', function() {
			$(this).fadeOut(1500);
		});
	});
});