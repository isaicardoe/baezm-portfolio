$(document).scroll(function() {
  $("#header").css({
    "background-position-y": (-$(this).scrollTop()/20)
  })
});
