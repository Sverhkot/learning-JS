let arrTest = [3, 4, 5];
console.log(arrTest);
// метод shift
let arrShift = arrTest.shift();
console.log(arrShift);
// Вконсоль выведется 3 
// shift возвращает тот элемент, который он удаляет
// Особенность shift в том, что он удаляет элемент с начала массива
console.log(arrTest);
// Поскольку элементы массива удаляются, то происходит переиндексирование

// unshift

let arrUnshift = arrTest.unshift(22);
console.log(arrTest);
// unshift добавляет элемент в начало массива 
// unshift возвращает новую длинну массива

// slice

let arrTest2 = [22, 33, 44, 55, 66, 77, 88, 99];
let arrSlice = arrTest2.slice(3, 5);
console.log(arrTest2);
console.log(arrSlice);
// В результате я получаю такой же массив, как arrTest2 с 3го элемента
// [55, 66, 77, 88, 99]
// То есть метод slice создает новый массив из начального (начальный не изменяя)
// Причем копировать в новый массив начинает с указанной в скобках позиции (включительно)
// Если slice имеет два параметра, то он копирует исходный массив 
// начиная с указанной позиции включительно, до указанной позиции НЕ включительно

// Зачем нужен slice? 
// Если необходимо создать массив на основе исходного (не изменяя исходный) 
// и туда нужно скопировать ПОСЛЕДОВАТЕЛЬНО! несколько элементов



// Многие методы массивов можно применять к строке 
// Попытка применить к строке метод shift ни к чему не приводит, так же как и unshift
// Метод slice РАБОТАЕТ СО СТРОКАМИ!!
    let e = 'hello';
    console.log(e.slice(1, 4));
    // результат: 'ell'

$(document).ready(function () {
  // здесь я получаю значение инпут по клику на кнопку 
  // Функция запускается по клику и добавляет значение инпута в массив 
  let arr1 = [];
  $('.btn').click(function () {
    inputVal = $(".inpt").val()*1;

    addNumb(inputVal);
  });

  function addNumb() {
    arr1.unshift(inputVal);
    console.log(arr1);
  }
  // здесь я получаю значение инпут по клику на кнопку 
  // Функция запускается по клику и добавляет значение инпута в массив, 
  // а так же это значение в кубе 

  let arr2 = [];
  $('.btn2').click(function () {
    inputVal = $(".inpt2").val()*1;
    coub = Math.pow(inputVal, 3)
    addNumb2(inputVal, coub);
  });
  function addNumb2() {
    arr2.unshift(inputVal, coub);
    console.log(arr2);
  }
  
});