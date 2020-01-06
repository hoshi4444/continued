$(document).on('turbolinks:load',function(){
  $('.submit-button').each(function(){
    $(this).on('click',function(){
      var target = $(this).data('target');
      var button = document.getElementById(target);
      function updateButtonMsg() {
        $(button).addClass('state-1 animated');
        
        setTimeout(finalButtonMsg, 2000);
      };
      function finalButtonMsg() {
        $(button).addClass('state-2');
        
        setTimeout(setInitialButtonState, 2000);
      };
      function setInitialButtonState() {
        $(button).removeClass('state-1 state-2 animated');
      };
      
      updateButtonMsg();
    });
  });

  

//   const button   = document.querySelector('.submit-button');

//   const updateButtonMsg = function() {
//   button.classList.add('state-1', 'animated');
  
//   setTimeout(finalButtonMsg, 2000);
// };

// const finalButtonMsg = function() {
//   button.classList.add('state-2');
  
//   setTimeout(setInitialButtonState, 2000);
// };

// const setInitialButtonState = function() {
//   button.classList.remove('state-1', 'state-2', 'animated');
// };

// button.addEventListener('click', updateButtonMsg);
});