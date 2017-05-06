$(document).ready(function() {


  $(window).resize(function() {
    var viewportWidth = $(window).width();
    console.log(viewportWidth);
    if (viewportWidth < 800) {
      $(".mobile").addClass("breakpoint");
      $(".desktop").removeClass("breakpoint");
    }

    if (viewportWidth >= 800) {
      $(".desktop").addClass("breakpoint");
      $(".mobile").removeClass("breakpoint");
    }
  }).resize();
});
