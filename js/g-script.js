$(function(){
    var images = $('.slide');
    var slideWidth = $('.main-viewport').width();
    var offset = 0;
    var slideIndex = 0;
    var slideListPos = 0;
    var start = true;
    var autoplay = false;

    createSlider();
    console.log($('.main-viewport').width());

    $('.slide').click(function(){
        console.log($('.main-viewport').width());
        $('.popup-slider').show();
        var images = $('.slide');
        var slideWidth = $('.main-viewport').width();
        var offset = 0;
        var slideIndex = 0;
        var slideListPos = 0;
        var start = true;
        var autoplay = false;
        createSlider();
    });

    function createSlider(){


        for(var i = 0; i < images.length; i++){
            var img = $('<img>');
            $('.slides').append(img);
            img.addClass('big-slide');
            img.attr({'src': $(images[i]).data('src') , 'title' : $(images[i]).attr('title'), 'alt' : $(images[i]).attr('alt') });
            img.css('width', slideWidth);
            img.data('slide-index', $(images[i]).data('slide-index'));
        }
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

});