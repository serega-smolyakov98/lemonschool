
// SLIDER HEAD
var length =  $('.slider .slide').length
$('.slider').on('afterChange', function(event, slick, current){  
  if (current === length - 1) {
    $('.slider').slick('slickPause')
  }
});
$('.slider').slick({
  autoplay: true,
  infinite: false,
  edgeFriction: '0',
  fade: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  speed: 1000
});
//SLIDER HEAD

// SLIDER HEAD TITLE
var length =  $('.slider__title .slide__title').length
$('.slider__title').on('afterChange', function(event, slick, current){  
  if (current === length - 1) {
    $('.slider__title').slick('slickPause')
  }
});
$('.slider__title').slick({
  autoplay: true,
  infinite: false,
  edgeFriction: '0',
  arrows: false,
  draggable: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  autoDelay: 3900,
  speed: 1000
});
//SLIDER HEAD TITLE

//PROGRESS-NUM
var currentNumber = $('.number-1').text();
$({numberValue: currentNumber}).delay().animate({numberValue: 100}, {
    duration: 3900,
    easing: 'linear',
    step: function() { 
        $('.number-1').text(Math.ceil(this.numberValue))
    }
});

var currentNumber = $('.number-2').text();
$({numberValue: currentNumber}).delay(3900).animate({numberValue: 100}, {
    duration: 3900,
    easing: 'linear',
    step: function() { 
        $('.number-2').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('.number-3').text();
$({numberValue: currentNumber}).delay(7800).animate({numberValue: 100}, {
    duration: 3900,
    easing: 'linear',
    step: function() { 
        $('.number-3').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('.number-4').text();
$({numberValue: currentNumber}).delay(11700).animate({numberValue: 100}, {
    duration: 3900,
    easing: 'linear',
    step: function() { 
        $('.number-4').text(Math.ceil(this.numberValue)); 
    }
});
//PROGRESS-NUM

//NUM
$(window).scroll(function() {
    var imagePos = $('.num-1').offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        var currentNumber = $('.num-1').text();
$({numberValue: currentNumber}).delay().animate({numberValue: 42}, {
    duration: 1900,
    easing: 'linear',
    step: function() { 
        $('.num-1').text(Math.ceil(this.numberValue)); 
    }
});
    }
});

$(window).scroll(function() {
    var imagePos = $('.num-2').offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        var currentNumber = $('.num-2').text();
$({numberValue: currentNumber}).delay().animate({numberValue: 123}, {
    duration: 1900,
    easing: 'linear',
    step: function() { 
        $('.num-2').text(Math.ceil(this.numberValue)); 
    }
});
    }
});

$(window).scroll(function() {
    var imagePos = $('.num-3').offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        var currentNumber = $('.num-3').text();
$({numberValue: currentNumber}).delay().animate({numberValue: 15}, {
    duration: 1900,
    easing: 'linear',
    step: function() { 
        $('.num-3').text(Math.ceil(this.numberValue)); 
    }
});
    }
});

$(window).scroll(function() {
    var imagePos = $('.num-4').offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        var currentNumber = $('.num-4').text();
$({numberValue: currentNumber}).delay().animate({numberValue: 99}, {
    duration: 1900,
    easing: 'linear',
    step: function() { 
        $('.num-4').text(Math.ceil(this.numberValue)); 
    }
});
    }
});

$(window).scroll(function() {
    var imagePos = $('.num-5').offset().top;
    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        var currentNumber = $('.num-5').text();
$({numberValue: currentNumber}).delay().animate({numberValue: 24}, {
    duration: 1900,
    easing: 'linear',
    step: function() { 
        $('.num-5').text(Math.ceil(this.numberValue)); 
    }
});
    }
});
//NUM

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

// SLIDER-2
$(document).ready(function(){
      $('.slider-2').slick({
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        speed: 1000,
        prevArrow: '<button id="prev" type="button" class="btn btn-juliet"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-juliet"></button>'
      })
    });
// SLIDER-2

// MAP
$(document).ready(function(){
    $(".hider").click(function(){
        $("#hidden").slideToggle("slow");
        return false;
    });
});
// MAP

// FIDE 
$(window).scroll(function () {
        $(' .mov').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('fadeInLeft');
            }
        });
    });﻿
$(window).scroll(function () {
    $(' .mov2').each(function () {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+700) {
            $(this).addClass('fadeInRight');
        }
    });
});﻿
// FIDE
