import $ from 'jquery';
import mixitup from 'mixitup';

const portfolioSection = document.querySelector('.js-news-filtred');
let mixer;

portfolioSection ?  mixer = mixitup('.js-news-filtred') : null ;



(function ($) {
  $(function () {
    $('.filter-btn').on('click', function() {
      $('.filter-btn').removeClass('is-checked');
      $(this).addClass('is-checked');
    })


  })
}(jQuery));