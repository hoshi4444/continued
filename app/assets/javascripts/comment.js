$(document).on('turbolinks:load',function(){
  function buildHTML(comment){
    var html = `<div class="comment__list__user">
                  <a class="comment__list__user-image" href="/users/${comment.user_id}">
                    <img src="${comment.avatar}">
                  </a>
                    ：
                  <div class="comment__list__user-text">
                  ${comment.text}
                  </div>
                </div>
                `
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/comments'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comment__list').append(html).animate({scrollTop:$('.comment__list')[0].scrollHeight},'fast');
      $('.comment-form-text').val('')
    })
    .fail(function(){
      alert('error');
    })
    always(function(){
      $('input').removeAttr("disabled");
    })
  })

});