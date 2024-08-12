$(function(){
  $('.copybtn').on('click', function(){
    // クリックしたボタンの前の要素を取得
    var copytxt = $(this).prev();
    navigator.clipboard.writeText(copytxt.text());

    // フラッシュメッセージ表示
    $('.msg-txt').fadeIn(100, function(){
      setTimeout(function(){
        $('.msg-txt').fadeOut(500);
      }, 1000)
    });
  });







  // $('.copybtn6').on('click', function(){
  //   var element = document.getElementById('copytxt6');
  //   navigator.clipboard.writeText(element.textContent);

  //   // フラッシュメッセージ表示
  //   $('.msg').fadeIn(100, function(){
  //     setTimeout(function(){
  //       $('.msg').fadeOut(500);
  //     }, 1000)
  //   });
  // });

});
