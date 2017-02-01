$(function(){
	// var defaultOffsetBkg = $('.line').offset();
	// var defaultOffsetText = $('.text').offset();
	
	$('.wrapper').mousemove(function(e){
		var x = e.offsetX;
		var y = e.offsetY;
				
		var offsetBkg = 70;
		
		var xx = ($(this).width() - $('.sky-img').width())/1.3;
		var yy = ($(this).height() - $('.sky-img').height())/1.3;
		
		var lPosTop = $(this).offset().top - y/offsetBkg + yy;
		var lPosLeft = $(this).offset().left - x/offsetBkg + xx;
		
		$('.sky-img').offset({top: lPosTop, left: lPosLeft});
		
		/*********************/
		var offsetCityBkg = 85;
		
		var xx = ($(this).width() - $('.city-back-img').width()/1.08);
		var yy = ($(this).height() - $('.city-back-img').height());
		
		var lPosTop = $(this).offset().top - y/offsetCityBkg + yy;
		var lPosLeft = $(this).offset().left - x/offsetCityBkg + xx;
		
		$('.city-back-img').offset({top: lPosTop, left: lPosLeft});
		/*********************/
		var offsetBkg = 100;
		
		var xx = ($(this).width() - $('.city-name').width());
		var yy = ($(this).height() - $('.city-name').height());
		
		var lPosTop = $(this).offset().top - y/offsetBkg + yy;
		var lPosLeft = $(this).offset().left - x/offsetBkg + xx;
		
		$('.city-name').offset({top: lPosTop, left: lPosLeft});
		/*********************/
		var offsetCity = 100;
		
		var xx = ($(this).width() - $('.city-img').width())/2;
		var yy = ($(this).height() - $('.city-img').height())/2;
		
		var tPosTop = $(this).offset().top + y/offsetCity + yy;
		var tPosLeft = $(this).offset().left + x/offsetCity + xx;
		$('.city-img').offset({top: tPosTop, left: tPosLeft});
	});
	
});