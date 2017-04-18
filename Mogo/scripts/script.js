
// SLIDER HEAD
$(document).ready(function(){
      $('.slider').slick({
      	autoplay: true,
      	pauseOnHover: false,
      	pauseOnFocus: false,
      	speed: 1000
      })
    });
//SLIDER HEAD

// ACCORDION
$('.accordion__content').mCustomScrollbar();
		$('.accordion__link').on('click', function() {
			if ($(this).hasClass('active')) {
				return
			}
			$('.accordion__link.active').next().slideUp();
			$('.accordion__link.active').removeClass('active');
			$(this).next().slideDown();
			$(this).addClass('active');
		});
// ACCORDION

// SLIDER-1
$(document).ready(function(){
      $('.slider-1').slick({
      	autoplay: true,
      	pauseOnHover: true,
      	pauseOnFocus: true,
      	speed: 1000,
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>'
      })
    });
// SLIDER-1