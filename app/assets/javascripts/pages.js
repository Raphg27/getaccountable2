// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function () {
  $(".second-section-discover").hide();

  $("#discover").click(function () {
    $(".second-section-discover").show();
    $(window).scrollTop($('.second-section-discover').offset().top);
});
});


$(function () {
  $("#user").click(function () {
    $(".second-section-discover").hide();
    $(window).scrollTop($('.second-section-user').offset().top);
});
});
