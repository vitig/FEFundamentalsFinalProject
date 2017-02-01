$(function (){
    $('.set-point').click(function(){
        $('.map-frame').attr('src', $(this).data('src'));
    });
});