(function ($, Drupal) {

  "use strict";
  Drupal.behaviors.creativetemplate = {
    attach: function (context, settings) {
      $(document).ready(function () {
        $('.banner_slider').slick({
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 500,
          fade: true,
          prevArrow: '<button class="slide-arrow prev-arrow"></button>',
          nextArrow: '<button class="slide-arrow next-arrow"></button>',
          initialSlide: 2,
          responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        });
      });
    }
  };


})(jQuery, Drupal);