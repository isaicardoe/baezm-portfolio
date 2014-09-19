$(document).scroll(function() {
  $("#header").css({
    "background-position-y": (-$(this).scrollTop()/20)
  })
});
$(document).ready(function() {
  $(".menu--control").on("click", function() {
    $(".menu").toggleClass("open");
  });
});
