import $ from "jquery";
jQuery(function ($) {
  $(function () {
    const $header = $("#header");
    const $headerHeight = $header.height();
    const $pageScrollTop = $(window).scrollTop();
    const $burgerBtn = $(".js-toggle-menu");
    const $headerNavMenu = $("#headerNav");
    const $mainMenu = $("#mainMenu");

    $pageScrollTop > $headerHeight
      ? $header.addClass("fixed-header")
      : $header.removeClass("fixed-header");

    $(window).on("scroll", () => {
      const $pageScrollTop = $(window).scrollTop();

      $pageScrollTop > $headerHeight / 2
        ? $header.addClass("fixed-header")
        : $header.removeClass("fixed-header");
    });

    $('a[href^="#"]').bind("click.smoothscroll", function (event) {
      event.preventDefault();
      var target = $(this).attr("href");
      var offset = $header.height();
      var marginTop = $(target).offset().top;
      $("html, body").animate({ scrollTop: marginTop - offset }, 800);
      window.location;
      return false;
    });

    function toggleMenu(duration) {
      $headerNavMenu.fadeToggle(duration);
      $mainMenu.fadeToggle(duration);
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
      $(".main-menu-list .is-active")
        .prev()
        .css("opacity", ".65")
        .prev()
        .css("opacity", ".35");
      $(".main-menu-list .is-active")
        .next()
        .css("opacity", ".65")
        .next()
        .css("opacity", ".35");
      $(".main-menu-list .main-menu-list__item").hover(function () {
        $(".main-menu-list .main-menu-list__item")
          .css("opacity", "0.15")
          .removeClass("is-active");
        $(this).css("opacity", "1");
        $(this).prev().css("opacity", ".65").prev().css("opacity", ".35");
        $(this).next().css("opacity", ".65").next().css("opacity", ".35");
      });
    }

    $(".main-menu-list .main-menu-list__item").on("click", function (e) {
      $(".main-menu-list .main-menu-list__item").removeClass("is-active");
      $(this).addClass("is-active");
      toggleMenu(200);
      $burgerBtn.removeClass("toggle-menu--on");
      $("body").removeClass("scrolled");
    });

    $burgerBtn.on("click", function (e) {
      e.preventDefault();
      toggleMenu(400);
    });
  });
});
