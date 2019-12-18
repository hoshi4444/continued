$(document).on('turbolinks:load',function(){
  var container = $('#masonry'); 
  
  container.imagesLoaded(function(){   
    container.masonry({     
      itemSelector: '.thumb-box',  
      columnWidth: 255,    
      fitWidth: true, 
    });
  });
});