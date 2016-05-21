$(function() {

    $('.certificates-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">открыть в полном размере</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: false,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	}); 	
	 $('.success-secret-slider-2').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">открыть в полном размере</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: false,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	}); 	
	  $('.success-secret-slider-3').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">открыть в полном размере</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: false,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	}); 
		  $('.test-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">открыть в полном размере</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});	


	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
    )
    wow.init();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
	

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
    $('body').addClass('loaded'); 
    

    
    $("form .btn").click(function() {
		var text = $(this).attr("data-value");
		$(".hidden-input").val(text);
	});  
	$('.success-secret-slider').owlCarousel();

	$('.test-slider').owlCarousel();

	// Modal-magnific pop-up

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false
	
	});
    
	$("#main-form-top").validate();
	$("#main-form-bottom").validate();
	$("#test-form").validate();
	$("#test-form-2").validate(); 
	$("#test-form-3").validate();
	$("#test-form-4").validate();

	$("#phone").inputmask("+38 999 999-99-99");
	$("#phone-2").inputmask("+38 999 999-99-99");
	$("#phone-3").inputmask("+38 999 999-99-99");
	$("#phone-4").inputmask("+38 999 999-99-99");
	$("#phone-5").inputmask("+38 999 999-99-99");
	$("#phone-6").inputmask("+38 999 999-99-99");

});

$( ".close" ).click(function() {
	$(this).parent().removeClass("active");
});

		//owl-carousel
	 $('.success-secret-slider').owlCarousel({
	            loop:false,
	            margin:10,
	            nav:true,
	            responsive:{
	                0:{
	                    items:1
	                },
	                600:{
	                    items:3
	                },
	                1000:{
	                    items:5
	                }
	            }
	        })
	 $('.test-slider').owlCarousel({
	        loop:false, //Зацикливаем слайдер
			margin:10, //Отступ от картино если выводите больше 1
			nav:true, //Отключил навигацию
			autoplay: false,
			autoplayHoverPause: true,						
			smartSpeed:1000, //Время движения слайда
			autoplayTimeout:2000, //Время смены слайда
			responsive:{ //Адаптация в зависимости от разрешения экрана
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
  