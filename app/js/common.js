$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(document).ready(function () {

	$(".input-phone").mask("+38(999)999-99-99");  

    $("form .btn").click(function() {
		var text = $(this).attr("data-value");
		$(".hidden-input").val(text);
	});  

});

$( ".catalouge__name .btn" ).click(function() {
	$(this).parent().parent().find(".catalouge__hidden").addClass("active");
});
$( ".catalouge__hidden .btn" ).click(function() {
	$(this).parent().removeClass("active");
});

$( ".close" ).click(function() {
	$(this).parent().removeClass("active");
});

$( ".team__look" ).click(function() {
	$(this).parent().addClass("active");
	$(this).parent().find(".team__hidden").addClass("active");
	$(this).css("display","none");
});

$( ".team__hidden .close" ).click(function() {
	$(this).parent().removeClass("active");
	$(this).parent().parent().removeClass("active");
	$(".team__look").css("display","block");
});

