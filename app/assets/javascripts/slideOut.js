$(document).on('turbolinks:load',function(){
  $('.stamp').click(function(){
    $('img').removeClass('stop');
    console.log(this)

  });
});