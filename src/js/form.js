import $ from 'jquery';

(function ($) {
  $(function () {
    $("#js-form-contacts").submit(function () {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find("input").val("");
        alert("Thank You");
        $(this).trigger("reset");
      });
      return false;
    });
  })
}(jQuery));