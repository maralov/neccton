import $ from 'jquery';
import 'slick-carousel';

(function ($) {
  $(function () {
    const feedSlider = $('.feedback-slider-track')

    const settingsSlider = {
      dots: false,
      arrows: true,
      appendArrows: $('.tech-slider-arrows'),
      prevArrow: $('.feedback-slider .feedback-slider-btn-prev'),
      nextArrow: $('.feedback-slider .feedback-slider-btn-next'),
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    }

    feedSlider.slick(settingsSlider);

  })
}(jQuery));
