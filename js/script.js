//= ../node_modules/jquery/dist/jquery.min.js
//= ../node_modules/bootstrap/js/dist/util.js
//= ../node_modules/bootstrap/js/dist/collapse.js
//= preloader.js


$(document).ready(function() {

  /* Плавный переход к якорю */
  $(function(){
    $('a[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });
  });

  /* Закрытие navbar по клику на пункт меню */
  $('.nav-link').click(function(){
    $('.navbar-collapse').removeClass('show');
  });
});
