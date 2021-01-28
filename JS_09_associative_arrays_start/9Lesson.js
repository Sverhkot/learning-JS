// Пример обычного массива: 
// let m = [4, 12, "Hello"];
// console.log(m[1])

// Чем обычный массив отличается от ассоциативного? 
// Тем, что в обычном значения хранятся под именами, а в ассоциативном под именем
// То есть элементу можно присвоить имя
// На самом деле в JS большой разницы между этими массивами нет

// Объявляем ассоциативный массив :
// Сперва вводим ключ(или имя) 
let m = {};
let n = {
  "one": 12, 
  // В конце обязательно запятая!
  "hello": "world",
  "prim" : 2000
};
// Обращаться к конкретному элементу можно так же, как и в случае обычного массива, только указывая ключ 
// Например: 
console.log(n['prim']);
// В консоль выведется значение 2000
// Так же можно обратиться через точку : console.log(n.prim);
// Так же можно присваивать значения, например n.one = 9000 и значение с 12 изменится на 9000
// Так как к такому массиву нельзя обратиться по индексу, соответственно перебрать его как обычный массив не получится 
// Для перебора нашего массива запускаем такой цикл 
let out = document.getElementById("out");
for (let key in n) {
  // key - переменная
  // in - ключевое слово, после которого следует то, что мы будем перебирать. В данном случае это массив n
  // Что происходит: в каждом круге цикла (мы не задаем к-во повторений) в переменную  key будет попадать ключ массива (например "one")
  // Чтобы вывести все элементы массива, необходимо сделать следующее: получаем элемент, в который будем выводить 
  out.innerHTML += key + ' --- ' + n[key] + '<br';
  // Почему += - потому что мы хотим ДОПИСЫВАТЬ 
  // Что я делаю: я беру параграф с id out и внутрь него вывожу все ключи массива n, потом добавляю разделитель для красоты "---" плюс значения ключей массива и разрыв строки

}
