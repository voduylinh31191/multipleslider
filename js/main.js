$(function () {
    $('.next').click(function (e) {
        var $this = $(this);
        var $currentBox = $this.parent('.chevron').parent('.slider-box');
        nextslider($currentBox);
        e.preventDefault();
    });
    $('.prev').click(function (e) {
        var $this = $(this);
        var $currentbox = $this.parent('.chevron').parent('.slider-box');
        prevslider($currentbox);
        e.preventDefault();

    });

    $('.search-click').click(function () {
        $('#location-search-lick').attr('value', $(this).val()); //val() user for input
    });
    $('#found-city i').click(function () {
        $('#location-search-lick').attr('value', '');
    });

});


var nextslider = function ($currentBox) {
    var $currentimg = $currentBox.children('.slider-img').children('.item-active');
    var nextslider = $currentimg.next();
    if (nextslider.length === 0) {
        nextslider = $currentBox.children('.slider-img').children('.item').first();
    }
    $currentimg.fadeOut(800);
    $currentimg.removeClass('item-active');
    nextslider.fadeIn(600);
    nextslider.addClass('item-active');
}
var prevslider = function ($currentBox) {
    var $currentimg = $currentBox.children('.slider-img').children('.item-active');
    var prevslider = $currentimg.prev();
    if (prevslider.length === 0) {
        prevslider = $currentBox.children('.slider-img').children('.item').last();
    }
    $currentimg.fadeOut(800);
    $currentimg.removeClass('item-active');
    prevslider.fadeIn(600);
    prevslider.addClass('item-active');
}
