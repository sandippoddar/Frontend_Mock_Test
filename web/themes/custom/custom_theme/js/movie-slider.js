
(function ($, Drupal, once) {
  Drupal.behaviors.slider = {
    attach: function (context, settings) {
      const $sliderDiv = $('.view-banner-slide .view-content');
      once('movieSlider', $sliderDiv, context).forEach(function (element) {
        $(context).find('.view-banner-slide .view-content').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // autoplay: true,
          // autoplaySpeed: 3000,
          draggable: false,
          prevArrow: '<div class="arrow-left"><i class="bi bi-chevron-left"></i></div>',
          nextArrow: '<div class="arrow-right"><i class="bi bi-chevron-right"></i></div>',
          dots: true,
          cssEase: 'linear'
        });
      });
    }
  };
})(jQuery, Drupal, once);
