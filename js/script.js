//= ../node_modules/jquery/dist/jquery.min.js
//= ../node_modules/bootstrap/js/dist/util.js
//= ../node_modules/bootstrap/js/dist/collapse.js
//= preloader.js


/* Плавный переход к якорю */
$(document).ready(function() {
  $(function(){
    $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  });
});
