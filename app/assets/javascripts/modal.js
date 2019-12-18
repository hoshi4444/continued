$(document).on('turbolinks:load',function(){
  $('.thumb').each(function(){
    $(this).on('click',function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(this)
      $(modal).fadeIn();
      $('.slick-slider').slick('setPosition'); 
    });
  });

  $('#closeModal , #modalBg').click(function(){
    $('.modalArea').fadeOut();
  });
});