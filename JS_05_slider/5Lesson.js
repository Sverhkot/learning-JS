// document.getElementById('slider-left').onclick = sliderLeft;
// let left = 0;
// let timer;
// // Функция autoSlider сдвигает картинки один раз и после останавливается, чтобы это не происходило необходимо "зациклить" эту функцию 
// // Для этого функцию autoSlider вызовем еще раз в конце функции sliderLeft
// autoSlider();
// function autoSlider() {
//   timer = setTimeout(sliderLeft, 1000)
// }

// // Эта функция срабатывает при нажатии кнопки slider-left
// // Для того, чтобы эта функция срабатывала автоматически, необходимо написать еще одну функцию, которая и будет выполнять функцию sliderLeft
// // Она будет описана выше

// function sliderLeft() {
//   let StripOfPictures = document.getElementById('strip');
//   left = left - 128;
//   if (left < -384) {
//     left = 0;
//     clearTimeout(timer)
//   }
//   StripOfPictures.style.left = left + 'px';
//   // вот так
//   autoSlider();
// }
// Итак, функция autoSlider вызывается первый раз, выполняет функцию sliderLeft, 
// доходит до конца и вызывает функцию autoSlider() еще раз и функция sliderLeft снова выполняется

// _______________________________________________________________________________________________________________________________________________________________________________


// Весь код сверху можно записать проще просто перенеся фун-ю sliderLeft внутрь autoSlider
// Выглядит это так: 

let left = 0;
let timer;

autoSlider();

function autoSlider() {
  timer = setTimeout(function () {
    let StripOfPictures = document.getElementById('strip');
    left = left - 128;
    if (left < -384) {
      left = 0;
      clearTimeout(timer)
    }
    StripOfPictures.style.left = left + 'px';
  
    autoSlider();
  }, 1000)
}

