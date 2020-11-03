import $ from 'jquery'
jQuery(function ($) {
  $(function () {
    const $header = $('#header')
    const $headerHeight = $header.height();

    const $pageScrollTop = $(window).scrollTop();

    $pageScrollTop > $headerHeight ?
      $header.addClass('fixed-header') :
      $header.removeClass('fixed-header')

    $(window).on('scroll', () => {
      const $pageScrollTop = $(window).scrollTop();

      $pageScrollTop > $headerHeight / 2 ?
        $header.addClass('fixed-header') :
        $header.removeClass('fixed-header')
    })


    $('.js-scroll').bind('click.smoothscroll', function (event) {

      event.preventDefault();
      var target = $(this).attr('href');
      var offset = $header.height();
      var marginTop = $(target).offset().top;
      $('html, body').animate({ scrollTop: marginTop - offset }, 800);
      window.location
      return false;
    })
  });
})
