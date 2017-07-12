/*global $, window*/

$(window).scroll(_ = () => {
    if ($(window).scrollTop() >= 30) {
        $('.leer-mas').removeClass('bounce-up');
    }
});


$(".mas").click(_ = () => {
    $("html, body").animate({
        scrollTop: 630
    }, 1000);
});