// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// var _pfy = _pfy || [];
// (function(){
//  function pfy_load(){
//    var pfys = document.createElement("script");
//    pfys.type="text/javascript";
//    pfys.async=true;
//    pfys.src="https://widget.prefinery.com/widget/v2/1109fbi7.js";
//    var pfy = document.getElementsByTagName("script")[0];
//    pfy.parentNode.insertBefore(pfys,pfy);
//  }
//  if (window.attachEvent){
//    window.attachEvent("onload",pfy_load);
//  } else {
//    window.addEventListener("load",pfy_load,false);
//  }
// }
// )();

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
