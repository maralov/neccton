import $ from 'jquery';

(function ($) {
  $(function () {
    //$('.collapse').slideUp();

    $('.js-collapse').on('click', function () {
      const target = $(this).data('target');
      const targetElem = $(`#${target}`);

      targetElem.slideToggle({
        start: function () {
          $(this).css('display', 'flex');
        }
      })

      $(this).find('span').text()
      let linkText = $(this).find('span').text();
      console.log(linkText);

      linkText == "See more" ? linkText = `Less ${target}` : linkText = "See more";

      console.log(linkText);

      $(this).find('span').text(linkText);


    })

  })
}(jQuery));