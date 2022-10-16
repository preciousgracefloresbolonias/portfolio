$(document).ready(function(){

	"use strict"
	$('.slider').ripples({
	  dropRadius: 13,
	  perturbance: 0.01,
	  interactive: true,
	  crossOrigin: ''

	});

	var typed = new Typed('.text', {

	strings:["<strong> Hi! I'm </strong> <strong class='primary'> Precious </strong>", "<strong> I'm </strong> <strong class='primary'> Full Stack Web Developer</strong>","<strong>I Love </strong> <strong class='primary'> Codings </strong>", "<strong> You want a </strong> <strong class='primary'>Website?</strong>", "<strong>Contact Me </strong> <strong class='primary'> Now </strong>"],
		typespeed: 0.5,
		loop: true
	});
	

	

	$(window).scroll(function(){

		var top = $(window).scrollTop();
			if(top>=60){
				$("nav").addClass('secondary');
			}
			else if($("nav").hasClass('secondary')){
					$("nav").removeClass('secondary');
				}
	});

	$('.skills_pic').magnificPopup({
  		delegate: 'a', // child items selector, by clicking on it popup will open
  		type: 'image',
  			gallery: {
      		enabled: true
    		}
	});

	$("#skills").owlCarousel({
		items:3,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true,
		responsive: {
    		// breakpoint from 0 up
		    0 : {
		      items:1,
		    },
		    // breakpoint from 480 up
		    480 : {
		        items:2,
		    },
		    // breakpoint from 768 up
		    768 : {
		        items:3,
   			 }
		}
	});

		$('.counter').counterUp({
                delay: 10,
                time: 3000
            });

		$('a.smooth-scroll').click(function(event){
			event.preventDefault();

			var section = $(this).attr("href");

			$('html, body').animate({
				scrollTop: $(section).offset().top - -2
			}, 1250, "easeInOutExpo");
		});

		  new WOW().init();


	});
	