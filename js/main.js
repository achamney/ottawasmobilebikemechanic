$(window).scroll(function () {
    /*if($(window).scrollTop() >= 200) {
        $('.header').height(50);
    } else {
        $('.header').height(210);
    }*/
});
var carouselIndex = 0;
window.setInterval(function () {
    var images = $('#carousel img');
    $('#carousel img:eq('+carouselIndex+')').fadeOut(1000);
    carouselIndex++;
    if (carouselIndex >= images.length) {
        carouselIndex = 0;
    }
    $('#carousel img:eq('+carouselIndex+')').fadeIn(1000);
}, 5000);
$("#carousel img:not(:first)").hide();