$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
    onInitialized: function () {
    // Set the height of all images to be the same
    $('.owl-carousel .owl-item img').css('height', '100%');
  }
})
