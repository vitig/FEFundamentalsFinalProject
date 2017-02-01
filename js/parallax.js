$(function(){

	setTimeout(function() {
		var defaultOffsetLine = $('.line').offset();
		var defaultOffsetCircle = $('.circle')
		var defaultOffsetText = $('.welcome-text').offset();

		$('.wrapper').mousemove(function (e) {
			var x = e.clientX;
			var y = e.clientY;
			var centerPointTop = $(this).height() / 2;
			var centerPointLeft = $(this).width() / 2;

			/*********************************************/
			var offsetCircle = 50;

			var cPosTop = (centerPointTop - y) / offsetCircle - ($('.circle').height() / 2);
			var cPosLeft = (centerPointLeft - x) / offsetCircle - ($('.circle').width() / 2);
			var translateCircle = 'translateX(' + cPosLeft + 'px) translateY(' + cPosTop + 'px)';
			$('.circle').css('transform', translateCircle);
			/*****************************************/
			var offsetText = 85;

			var lPosTop = (centerPointTop - y) / offsetText;
			var lPosLeft = (centerPointLeft - x) / offsetText;
			var translateLine = 'translateX(' + lPosLeft + 'px) translateY(' + lPosTop + 'px) rotate(-60deg)';
			$('.line').css('transform', translateLine);

			/****************************************/
			var offsetText = 100;

			var tPosTop = (y - centerPointTop) / offsetText - ($('.welcome-text').height() / 2);
			var tPosLeft = (x - centerPointLeft) / offsetText - ($('.welcome-text').width() / 2);
			var translateText = 'translateX(' + tPosLeft + 'px) translateY(' + tPosTop + 'px)';
			$('.welcome-text').css('transform', translateText);
		});
	}, 1250);
});