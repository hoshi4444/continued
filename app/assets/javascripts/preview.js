$( document ).on('turbolinks:load', function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
 
      reader.onload = function (e) {
        $('#img_prev').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  function readURL1(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
 
      reader.onload = function (e) {
        $('#img_prev1').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  function readURL2(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
 
      reader.onload = function (e) {
        $('#img_prev2').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  function readURL3(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
 
      reader.onload = function (e) {
        $('#img_prev3').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  function readURL4(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
 
      reader.onload = function (e) {
        $('#img_prev4').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  function readURL5(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
 
      reader.onload = function (e) {
        $('#img_prev5').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
 
  
 
  $("#post_img").change(function(){
    $('#img_prev').removeClass('hidden');
    $('.present_img').remove();
    readURL(this);
  });
  $("#post_img1").change(function(){
    $('#img_prev1').removeClass('hidden');
    readURL1(this);
  });
  $("#post_img2").change(function(){
    $('#img_prev2').removeClass('hidden');
    readURL2(this);
  });
  $("#post_img3").change(function(){
    $('#img_prev3').removeClass('hidden');
    readURL3(this);
  });
  $("#post_img4").change(function(){
    $('#img_prev4').removeClass('hidden');
    readURL4(this);
  });
  $("#post_img5").change(function(){
    $('#img_prev5').removeClass('hidden');
    readURL5(this);
  });
});