$(document).ready(function () {
  $(".menu").click(function () {
    $(".links").css("min-height", "100vh");
  });
  $(".links .fa-times-circle").click(function () {
    $(".links").css("min-height", "0vh");
  });
});
