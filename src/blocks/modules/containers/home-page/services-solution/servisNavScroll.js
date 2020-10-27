

(function ($) {
  $(function () {
        
    if (window.matchMedia("(max-width: 768px)").matches) {

      var $postNavMenu = $('.service-nav');


      $postNavMenu.each((key, nav)=> {
          var $currentItem = $(nav).find('.active');
          var $prevCurrentItems = $(nav).find('.active').prevAll();
          var sumScrollLeft = 0;
          var $currentItemMarginRight = parseInt(window.getComputedStyle($currentItem[0] , null).marginRight);

          console.log($currentItemMarginRight);
          
          
          $prevCurrentItems.each(function (key, item) {
            sumScrollLeft += item.offsetWidth;
          });
          
          nav.scrollLeft = sumScrollLeft - $currentItem.width() / 2 + $currentItemMarginRight*$currentItem.index();
          console.log(nav.scrollLeft);
      })
    }
  })
}(jQuery)); 