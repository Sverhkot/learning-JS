let a = [22, 33, 44];
// reduce используется для свертки массивов
// reduce возвращает результат обработки массива 
// функция reducer принимает такие параметры: accum (накопитель), и текущее значение item
// Конечно же есть необязательные параметры - index, array

let b = a.reduce((accum, item) => {
  accum = accum + ' ' + item;
  // В результате мы находим сумму элементов массива 
  // В консоли вывелось 99
  // Если добавить строку с пробелом, то мы получим исходный массив записанный как строка с пробелами
  return accum;
});
console.log('========')
console.log(b)
// Функция работает следующим образом - она помещает вот этот элемент (а[0] )внутрь accum, а по оставшимся запускает цикл
// И все, что я вывожу в return кладется в accum
// То есть в результате работы, в переменную b попадает то, что накопилось в accum 

// Попробуем усложнить задачу 
// Ниже необходимо найти сумму элементов ниже нуля 

let c = [-3, 4, -5, 7, -6, 2];
let d = c.reduce((accumulator, item) => {
  if (item > 0) {
    accumulator += item;
  }
    return accumulator;
}, 0);
console.log('++++++++');
console.log(d)
// В результате мы получаем 13, что соответствует сумме всех положительных чисел
// НО если первым числом в массиве поставить отрицательное, то результат будет другим 
// в accumulator попадет отрицательное число, например в нашем сулчае -3, а по остальным запустится цикл 
// Чтобы избежать неккоректного результата, можно для accumulator задать стартовое значение 
// Сделаем это вкноце функции перед закрывающей скобкой через запятую 
// Теперь функция работает как надо и запускается по всем элементам массива 

// Как найти самое большое число массива? 
let g = [-3, 14, -5, 7, -6, 2];
let f = g.reduce((accumulator, item) => {
  if (item > accumulator) {
    accumulator = item;
  }
    return accumulator;
});
console.log('++++++++');
console.log(f);


// Переиндексация массива - создание на основе массива - объекта
// Например у нас есть вот такой массив объектов 

let z = [
  { "id": 55, "city": "arc" },
  { "id": 75, "city": "rca" },
  { "id": 175, "city": "bra" },
];
// а мы хотим его переиндексировать вот в такой: 
// [55, 75, 175]
// Зачем это нужно? 
// Я, например, хочу знать id, но не хочу тянуть весь массив, тем более он может быть очень большой 
// То есть я хочу перебрать массив объектов и получить на его основе такой массив [55, 75, 175]

let x = z.reduce((accum, item) => {
  accum.push(item.id);
  return accum;
}, []);
console.log('++++++++');
console.log(x);

// Метод isArray - определяет массив я получил или нет 
y = 'asdd'
console.log(Array.isArray(y))
// Данная конструкция вернет в консоли false 
// Метод isArray позволяет легко и просто определить содержит ли переданная переменная массив или другой тип данных 