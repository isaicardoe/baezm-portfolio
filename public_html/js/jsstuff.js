$(document).ready(function() {
  var hamburger = $('.menu__icon');
  hamburger.click(function() {
     hamburger.toggleClass('active');
     return false;
  });
  $('.menu__icon').bind('click', function(){
  	if($('.menu__icon').hasClass('active')){
  		$('.mobile-nav').css({
  			'opacity':'1',
  		});
  		$('nav').css({
  			'box-shadow':'none',
  		});
  	} else {
  		$('.mobile-nav').css({
  			'opacity':'0',
  		});
  		$('nav').css({
  			'box-shadow':'rgba(0,0,0,0.270588) 0px 5px 5px',
  		});
  	}
  })
  $('.mobile-nav a').on('click',function(){
  	$('.mobile-nav').css({
  		'opacity':'0',
  	});
  	$('nav').css({
		'box-shadow':'rgba(0,0,0,0.270588) 0px 5px 5px',
	});
  	$('.menu__icon').removeClass('active');
  })
	 
});

