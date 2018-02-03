$(document).ready(function() {
	$("#container2").hide();
	$(".f1").submit(function(e) {
		var question = $(this).children('textarea[name=question]').val();
		if(question == "")
		{
			alert("Please enter a question.");
			e.preventDefault();
		}
		else
		{
			e.preventDefault();
			alert(question);
			$("#container").fadeOut(500);
			$("#container2").fadeIn(500);
		}
	});
	$(".f2").submit(function(e) {
		var choices = $('input[name*=choice]');
		
		//var id = $(this).children('input[name=A]');
		$.each(choices, function(i, item) {
			alert($(item).val());
		});
		//alert(id);
		e.preventDefault();
		$("#container2").fadeOut(500);
	});
});