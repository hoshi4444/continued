$(document).on('turbolinks:load',function(){
  $(window).on('turbolinks:load',function(){
    $('.switch').removeClass('nav__title-stop');
    $('header').removeClass('torn');
  });
  $('.switch').click(function(){
    $('.switch').toggleClass('nav__title-start');
    $('header').toggleClass('close');
  });

});