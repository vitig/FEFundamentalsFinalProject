$(function(){
	var images = $('.slide');
	var slideWidth = $('main-viewport').width();
	var offset = 0;
	var slideIndex = 0;
	var slideListPos = 0;
	var start = true;
	var autoplay = true;

	for(var i = 0; i < images.length; i++){
		var img = $('<img>');
		$('.slides').append(img);
		img.addClass('big-slide');
		img.attr({'src': $(images[i]).data('src') , 'title' : $(images[i]).attr('title'), 'alt' : $(images[i]).attr('alt') });
		img.css('width', slideWidth);
		img.data('slide-index', $(images[i]).data('slide-index'));
	}

	setInterval(function(){
		if(autoplay){
			if(offset == (($(images).length - 1) * -100)){
				offset = 100;
			}
			offset -= 100;
			slideIndex = offset / -100;
			setImage(offset);
			setActive(images[slideIndex]);
		}
	}, 1000);

	$('.slide').click(function(){
		slideIndex = $(this).data('slide-index');
		offset = slideIndex * -100;
		setActive(this);
		setImage(offset);
	});

	$('.viewport-button').click(function(){
		var dir = $(this).data('direction');
		if(dir == 0){
			offset += 100;
			slideIndex -= 1;
			setActive(images[slideIndex]);
			setImage(offset);
		}else{
			offset -= 100;
			slideIndex += 1;
			setActive(images[slideIndex]);
			setImage(offset);
		}
	});

	function setActive(element){
		$('.slide').removeClass('active-slide');
		$(element).addClass('active-slide');
	}

	function setImage(ofs){
		$('.slides').css('left', ofs + '%');
		if(slideIndex == 0){
			$('.left-btn.viewport-button').hide();
		}else{
			$('.left-btn.viewport-button').show();
		}
		if(slideIndex == (images.length - 1)){
			$('.right-btn.viewport-button').hide();
		}else{
			$('.right-btn.viewport-button').show();
		}
	}

	$('.list-button').click(function(){
		var dir = $(this).data('direction');
		if(dir == 0){
			$('.list-button.left-btn').show();
			slideListPos -= 20;
			$('.slide-list').css('left', slideListPos + '%');
			console.log(images.length);
			console.log(slideListPos);
			if(slideListPos == ((images.length * -20) + 100)){
				console.log(images.length);
				$('.list-button.right-btn').hide();
			}
		}else{
			$('.list-button.right-btn').show();
			slideListPos += 20;
			$('.slide-list').css('left', slideListPos + '%');
			if(slideListPos == 0 ){
				$('.list-button.left-btn').hide();
			}
		}
	});

	if(start){
		$('.left-btn').hide();
		start = false;
	}

	$('.big-slide').click(function(){
		$('.popup-image').attr('src', $(this).attr('src'));
		$('.popup').show();
		autoplay = false;
	});
	$('.popup').click(function(){
		$(this).hide();
		autoplay = true;
	});
	

});