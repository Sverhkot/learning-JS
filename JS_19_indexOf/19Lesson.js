/* indexOf позволяет искать значение в массиве
    при этом если значение не будет найдено, то indexOf вернет -1
    если найдено, то будет найдена первая позиция в массиве и 
    будет возвращена данная позиция
*/
const a = [9, 8, 7, 5];
const b = ['hi', 'hello'];
console.log(b.indexOf('hi'))
console.log(a.indexOf(7))
if (a.indexOf(-7) !== -1) {
    console.log('yes')
}
else {
    console.log('no')
}
// помимо числа, которое нужно найти, в скобках можно указать позицию с которой искать 
// например: 
const c = [1, 2, 3, 1, 2, 3];
console.log(c.indexOf(2, 2))
// результат будет 4
// Если не указать номер, то вернет 1, тк цифра 2 находится под индексом 1 в массиве

// indexOf перебирает массив 

// ДЗ 
// По нажатию b-1 выполняется функция f1. 
// Функция считывает значение из i - 1 и с помощью indexOf и ищет 
// данный элемент в массиве a1.Выводит в out - 1 результат работы.
$(document).ready(function () {
  let arr = [];
  let arrLength = prompt('укажите размер массива');
  for (let i = 0; i < arrLength; i++){
    let arrElem = +prompt('введите число');
    arr.push(arrElem);
  }
  let inputVal;
  $('.b-1').click(function () {
    inputVal = ($(".i-1").val())*1;
    f1(inputVal);
  });
  $(".i-1").keyup(function(event){
    if(event.keyCode == 13){
      inputVal = ($(".i-1").val())*1;
      f1(inputVal);
    }
  });
    function f1(inputVal) {
      console.log(arr);
      let result = arr.indexOf(inputVal);
      let newHTML;
      if (result === -1) {
         newHTML = `<span>Введенное число: ${inputVal}, в массиве нет этого числа </span><hr>`;
      } 
      else {
        newHTML = `<span>Введенное число: ${inputVal}, индекс в массиве: ${result} </span><hr>`;
      }
       
      $('.out').append(newHTML);
  }
  
});
