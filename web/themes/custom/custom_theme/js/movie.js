(function($, Drupal, once) {
  Drupal.behaviors.movie = {
    attach: function (context, settings) {
      const $card = $('.card', context);
      once('cardPopup', $card, context).forEach(function (card) {
        $(card).on('click', function () {
          const $heading = $(this).find('.card__heading').text();
          const $imgSrc = $(this).find('img').attr('src');
          const $body = $(this).find('.card__para').text();

          $('.popup').show();
          const $popUp = $('.popup');

          $popUp.find('.popup__content .popup__image img').attr("src", $imgSrc);
          $popUp.find('.popup__content .popup__body h2').text($heading);
          $popUp.find('.popup__content .popup__body p').text($body);
        });
      });

      once('closePopup', '.popup__close', context).forEach((close) => {
        $(close).on('click', () => {
          $('.popup__content .popup__image img').attr('src', '');
          $('.popup__content .popup__body h2').text('');
          $('.popup__content .popup__body p').text('');
          $('.popup').hide();
        })
      })
    }
  }
})(jQuery, Drupal, once);
