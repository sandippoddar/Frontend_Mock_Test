
(function ($, Drupal, once) {
  Drupal.behaviors.slider = {
    attach: function (context, settings) {
      const $sliderDiv = $('.banner-slider');
      once('movieSlider', $sliderDiv, context).forEach(function (element) {
        $(context).find('.banner-slider').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          draggable: false,
          prevArrow: '<div class="arrow-left"><i class="bi bi-chevron-left"></i></div>',
          nextArrow: '<div class="arrow-right"><i class="bi bi-chevron-right"></i></div>',
          dots: true
        });
      });
    }
  };
})(jQuery, Drupal, once);
