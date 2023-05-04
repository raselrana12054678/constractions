$(document).ready(function() {
    $('.slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,

      });
      // extra info  js//
      $('.info-bars').click(function(){
        $('.extra-info').addClass('info-open');
      })

      $('.info-icon').click(function(){
        $('.extra-info').removeClass('info-open');
      })
      // extra info  js//

      $('.blog-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,
      });

      $('.testimonial-active').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,
      });

      $('.footer-active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 2000,
      });


      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });

// blog-slidesToScroll//
    
})

// init Isotope
var $grid = $('.portfolio-items').isotope({
  // options
});
// filter items on button click
$('.portfolio-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$(document).on('click','li', function() {
  $(this).addClass('active').siblings().removeClass('active');
})
