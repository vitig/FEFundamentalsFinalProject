$(function(){
	var sw = true;
	$('.float-menu').click(function(){
		if(sw) {showMenu()}
		else {hideMenu()};
	});

	function showMenu(){
		$('.float-menu').css('min-height', '20em');
		var mElement = $('.menu-element');
		var n = 0;
		
		var int = setInterval(function(){
			$(mElement[n]).show();
			n++;
			if(n == mElement.length){ clearInterval(int)}
		}, 50);
		sw = false;
		
	}
	function hideMenu(){
		$('.menu-element').hide();
		$('.float-menu').css('min-height', '4em');
		sw = true;
	}

	function showElement(el){
		setTimeout(function(){
			$(this).show();
		}, 500);
		console.log(el + ' showed');
	}

	$('.main').click(function(){
		if (!sw) hideMenu();
	});
});