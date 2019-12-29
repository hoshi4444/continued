$(document).on('turbolinks:load',function(){
 
  var $container = $('#masonry').masonry({
    itemSelector:'none',
    columnWidth: 255,
    fitWidth: true, 
    visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
  }); 

  var msnry = $container.data('masonry');

  $container.imagesLoaded(function(){
    $container.masonry('option',{
      itemSelector:'.thumb-box'
    });
    var $items =
    $container.find('.thumb-box');
    $container.masonry('appended',$items);
  });

  $container.infiniteScroll({
    path: 'nav.pagination a[rel=next]',
    append: '.thumb-box,.modalArea,closeModal',
    status: '.page-load-status',
    // status: '.scroller-status',
    // hideNav: '.pagination',
    // navSelector  : '.next',    // 次ページへのリンクを内包する要素
    // nextSelector : '.next a',  // 次ページへのリンク要素
    // itemSelector : '.thumb-box,.modalArea,closeModal',       // 次ページから読み込む要素
    outlayer: msnry,
});

});