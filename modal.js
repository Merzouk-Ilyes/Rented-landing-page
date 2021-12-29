/*Title: Cool Modal Popup Sign In/Out Form*/

$(function () {
  //defining all needed variables
  var $overlay = $(".overlay");
  var $mainPopUp = $(".main-popup");
  var $signIn = $("#sign-in");
  var $register = $("#register");
  var $formSignIn = $("form.sign-in");
  var $formRegister = $("form.register");


  $("#become_host").on("click", function () {
    $overlay.addClass("visible");
    $mainPopUp.addClass("visible");
    $register.addClass("active");
    $signIn.removeClass("active");
    $formRegister.css({
      display: "block",
    });
    $formSignIn.css({
      display: "none",
    });
  });
  $overlay.on("click", function () {
    $(this).removeClass("visible");
    $mainPopUp.removeClass("visible");
  });
  $("#popup-close-button a").on("click", function (e) {
    e.preventDefault();
    $overlay.removeClass("visible");
    $mainPopUp.removeClass("visible");
  });

  $signIn.on("click", function () {
    $signIn.addClass("active");
    $register.removeClass("active");
    $formRegister.css({
      display: "none",
    });
    $formSignIn.css({
      display: "block",
    });
    $mainPopUp.css({
      height:"400px"
    })
  });

  $register.on("click", function () {
    $signIn.removeClass("active");
    $register.addClass("active");
    $formRegister.css({
      display: "block",
    });
    $formSignIn.css({
      display: "none",
    });
    $mainPopUp.css({
      height:"450px"
    })
  });

  $("input").on("submit", function (e) {
    e.preventDefault(); 
  });
});
