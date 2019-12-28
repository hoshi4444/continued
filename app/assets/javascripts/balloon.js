$(document).on('turbolinks:load',function(){
 
/* ------------------------------
ランダムマーカー
------------------------------ */
//ノーマル
$(function(){
    var marker = $('.js-marker');
    var interval = 2000; //発生間隔
    var rate = 10; //発生確率
    var timeout = 2000; //消えるまでの時間
    setInterval(function(){randomMarker(marker, rate, timeout)}, interval);
});
 
//ボス
$(function(){
    var marker = $('.js-boss');
    var interval = 10000; //発生間隔
    var rate = 3; //発生確率
    var timeout = 5000; //消えるまでの時間
    setInterval(function(){randomMarker(marker, rate, timeout)}, interval);
});
 
//その他
$(function(){
    var marker = $('.js-don');
    var interval = 5000; //発生間隔
    var rate = 10; //発生確率
    var timeout = 3000; //消えるまでの時間
    setInterval(function(){randomMarker(marker, rate, timeout)}, interval);
});

$(function(){
  var marker = $('.js-gogogo');
  var interval = 7000; //発生間隔
  var rate = 10; //発生確率
  var timeout = 1000; //消えるまでの時間
  setInterval(function(){randomMarker(marker, rate, timeout)}, interval);
});

$(function(){
  var marker = $('.js-ban');
  var interval = 6000; //発生間隔
  var rate = 15; //発生確率
  var timeout = 4000; //消えるまでの時間
  setInterval(function(){randomMarker(marker, rate, timeout)}, interval);
});

$(function(){
var marker = $('.js-dogaga');
var interval = 7000; //発生間隔
var rate = 25; //発生確率
var timeout = 2000; //消えるまでの時間
setInterval(function(){randomMarker(marker, rate, timeout)}, interval);
});
 
/* ------------------------------
マーカーをランダムで表示する関数
------------------------------ */
function randomMarker(marker, rate, timeout){
    marker.each(function() {
        var num = getRandomInt(1, 100);
        var target = $(this);
        if(num <= rate && target.is(':hidden')){
            target.show();
            setTimeout(function(){
                target.fadeOut('slow');
            }, timeout);
        }
    });
}
 
/* ------------------------------
整数をランダムで返す関数
------------------------------ */
function getRandomInt(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;

}


});