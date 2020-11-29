import $ from 'jquery';

(function ($) {
  $(function () {

    $('.js-collapse').on('click', function () {
      const target = $(this).data('target');
      let targetlinkText = $(this).data('link-text');

      if (targetlinkText === null || targetlinkText === undefined) targetlinkText = ""

      const targetElem = $(`#${target}`);

      targetElem.slideToggle({
        start: function () {
          $(this).css('display', 'flex');
        }
      })

      $(this).find('span').text()
      let linkText = $(this).find('span').text();
      
      linkText == "See more" ? linkText = `Less ${targetlinkText}` : linkText = "See more";

      $(this).find('span').text(linkText);


    })

  })
}(jQuery));