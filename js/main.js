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

});


// カウントボタン
const number = document.querySelector('.count-status');
const plusButton1 = document.querySelector(".add1");
const plusButton5 = document.querySelector(".add5");
const plusButton10 = document.querySelector(".add10");
const minusButton1 = document.querySelector(".sub1");
const minusButton5 = document.querySelector(".sub5");
const minusButton10 = document.querySelector(".sub10");
const resetButton = document.querySelector(".reset");

let count = 0;

plusButton1.addEventListener("click", () => {
  count++;
  number.innerHTML = count;
});

plusButton5.addEventListener("click", () => {
  count += 5;
  number.innerHTML = count;
});

plusButton10.addEventListener("click", () => {
  count += 10;
  number.innerHTML = count;
});

minusButton1.addEventListener("click", () => {
  if (count > 0) {
    count--;
    number.innerHTML = count;
  }
});

minusButton5.addEventListener("click", () => {
  if (count > 4) {
    count -= 5;
    number.innerHTML = count;
  }
});

minusButton10.addEventListener("click", () => {
  if (count > 9) {
    count -= 10;
    number.innerHTML = count;
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  number.innerHTML = count;
});


// 比率ボタン
const heightChange = document.querySelector('.height-change');
const widthChange = document.querySelector('.width-change');
const tempHeight = document.querySelectorAll('.wrap');
const tempWidth = document.querySelectorAll('.content')

heightChange.addEventListener("click", () => {
  tempHeight.forEach(e => {
    e.classList.toggle('half');
  });
});

widthChange.addEventListener('click', () => {
  tempWidth.forEach(e => {
    e.classList.toggle('twice')
  });
});