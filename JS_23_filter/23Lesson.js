$(document).ready(function () {
  // const arr = [3, 1, 3, 5, 3, 4, 5, 2, 67, 2, 9, 6, 7];
  // filter фильтрует исходный массив 
  // В результате работы filter мы получим новый массив, который содержит 
  // элементы старого, прошедшие условие 

  /*filter получает функцию callback, которые имеют обязательные и 
    необязательные параметры. 
    Обязательные: 
    item - в него по очереди попадает каждый элемент исходного массива.
    Если функция callback возвращает true, то элемент проходит в новый массив
  */

  // let newArr = arr.filter(item => {
  //   if (item > 5) {
  //     return true;
  //   }
    
  // });
  // console.log(newArr);
  /* Нужно внутри функции callback вернуть или true или false
    Если true, то элемент проходит
  */

  /*Внутри filter, если нужно чтобы элемент попал в новый массив нужно 
    указать return true, или return false, чтобы не попал 
    Попытки использовать item, index или какое-то число внутри return не 
    означает, что все, что написано после return попадет в массив
  */

  // const clients = [
  //   { "iin": "g8f0s0sf", "user": "Ivanov", "debt": 4 },
  //   { "iin": "88fs0spd", "user": "Petrov", "debt": 0 },
  //   { "iin": "8s9sdssp", "user": "Sidorov", "debt": 0 },
  //   { "iin": "c98ss0sf", "user": "ItGid.info", "debt": 14 },
  //   { "iin": "52983435", "user": "OOO MMM", "debt": 71400 },
  //   { "iin": "cd8ss0sf", "user": "Spirtbank", "debt": 2654}
  // ]

  // let debts = clients.filter(item => (item.debt >= 10)).sort((a, b)=>(b.debt - a.debt));
  // // функция sort принимает два параметра 
  // console.log(debts);


  // Задача 
  // По клику на кнопку btn должна вызваться функция addEvenNumb, в которой метод filter 
  // отфильтрует массив чисел и выведет в консоль новый массив newAr состоящий только из 
  // четных чисел, взятых в исходном массиве arrNumb

  let arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  $('.btn').click(function () {
    addEvenNumb();
  });

  function addEvenNumb() {
    let newAr = arrNumb.filter(item => (item % 2 === 0));
    console.log(newAr);
  }
  
});