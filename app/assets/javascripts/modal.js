$(document).on('turbolinks:load',function(){
  $('.thumb').each(function(){
    $(this).on('click',function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      $('.slick-slider').slick('setPosition'); 
    });
  });
  $('.more').each(function(){
    $(this).on('click',function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
    });
  });
  $('#closeModal ,#modalBg').click(function(){
    $('.modalArea').fadeOut();
  });
  $('#closeModalS,#modalBgS').click(function(){
    $('.modalS').fadeOut();
  });
});