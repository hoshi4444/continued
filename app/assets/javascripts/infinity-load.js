// $(document).ready(function($){
//   var $container = $('#mansonry');      // 並び替える要素を内包するブロック要素

//   $container.imagesLoaded(function(){
//       $container.masonry({
//           itemSelector: '.gallery',    // Masonryで並び替える要素
//           isAnimated: true,            // アニメーションにするかどうか
//           isFitWidth: true,            // 横幅に自動的に合わせるかどうか
//           isResizable: true            // リサイズ時に並び替えるかどうか
//       });
//   });
       
//   $container.infinitescroll({
//       navSelector  : '.navigation',    // 次ページへのリンクを内包する要素
//       nextSelector : '.navigation a',  // 次ページへのリンク要素
//       itemSelector : '.gallery',       // 次ページから読み込む要素
//       loading: {
//           finishedMsg: 'All Loaded',   // 読み込み終了後に表示される文字列
//           img: 'loading.gif'           // ローディング画像
//           }
//   },
//   function( newElements ) {
//       var $newElems = $( newElements );
//       $newElems.imagesLoaded(function(){
//             $container.masonry( 'appended', $newElems, true ); 
//       });
//   });    
// });