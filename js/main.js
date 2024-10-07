$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    // Counter functionality
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // You can adjust the speed
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
        
            // Calculate the increment
            const increment = target / speed;
        
            // Check if the current count is less than the target
            if (count < target) {
                // Round the number before displaying
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                // Once target is reached, display the target value
                counter.innerText = target;
            }
        };
    
        updateCount();
    });


   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$(document).ready(function() {
    $('.accordion-header').click(function() {
        const currentBody = $(this).next('.accordion-body');
        
        // If the clicked section is open, close it smoothly
        if (currentBody.is(':visible')) {
            currentBody.slideUp(400, 'easeInOutQuad'); // Smoother and slower closing animation
            $(this).children('span').text('+');
        } else {
            // Close all other accordion bodies smoothly
            $('.accordion-body').slideUp(400, 'easeInOutQuad');
            $('.accordion-header span').text('+');

            // Open the clicked section smoothly
            currentBody.slideDown(400, 'easeInOutQuad');
            $(this).children('span').text('-');
        }
    });
});



});