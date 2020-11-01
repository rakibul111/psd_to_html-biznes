$(function(){
    
    //mixitup initializatin in LOCAL scope in recent work area //
    var mixerOne = mixitup('.work', {
        controls: {
            scope: 'local'
        }
    });

    // Owl Carousel initialization //
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // wow.js initialization //
    new WOW().init();
 
//===============================================//
    // Top Arrow Scrolling //
    $('.top-arrow').on('click' , function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500);
    });

    // Top Arrow Hide and Show //
    $('.top-arrow').hide();

    $(window).on('scroll', function(){

        let scrollPos= $(this).scrollTop();

        if(scrollPos > 1500){
            $('.top-arrow').fadeIn();
        }
        else{
            $('.top-arrow').fadeOut();
        }
    });
    
    // Stick the Navbar with scrolling //
    $(window).on("scroll", function(){

        let scrollPos= $(this).scrollTop();

        if(scrollPos > 0){
            $('.wrapper').addClass('fixed');
        }
        else {
            $('.wrapper').removeClass('fixed');
        }
    });

    // Navigation Menu change active class //
    $('.navbar-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //Smoth scroll from Menu
    $('.navbar-nav a[href^="#"]').on('click', function(event){
        event.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop : $(target).offset().top - 90
        }, 500);
    });


    // === Search Button Functionality =====//
    $('.search-box').hide();
    $('.search-box-in-btn').on("click", function(e){
        e.preventDefault();
        $('.search-box').addClass('show');
        $('.search-box-in-btn').hide();
        $('.search-box').fadeIn(500);
        $('input.search-txt').focus();
    });

    $('.do-search-btn').on("click", function(){
        $('.search-box-in-btn').fadeIn(500);
        $('.search-box').removeClass('show');
        $('.search-box').hide();
        $('.search')[0].reset();
    });
    $('input.search-txt').on('blur', function(){
        $('.search-box-in-btn').fadeIn(500);
        $('.search-box').removeClass('show');
        $('.search-box').hide();
        $('.search')[0].reset();
    });
});