import $ from 'jquery'
jQuery(function ($) {
  $(function () {
    const $header = $('#header')
    const $headerHeight = $header.height();
    
    $(window).on('scroll', () => {
      const $pageScrollTop = $(window).scrollTop();

      $pageScrollTop > $headerHeight ?
        $header.addClass('fixed-header') :
          $header.removeClass('fixed-header')

    })

  })
  
})
