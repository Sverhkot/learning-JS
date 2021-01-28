// Ссылка на видео https://www.youtube.com/watch?v=BI7gg4jwRZM
// ЗАДАЧИ
// №1 Создайте ассоциативный массив, содержащий описание человека. Задайте поля:
// имя, возраст, пол, индивидуальный номер. Заполните массив, выведите его в консоли

let man1 = {
  "name" : "Alex",
  "age" : 67,
  "id": "223344d",
  "sex" : "male"
}
// console.log(man);
// console.log(man.name);
// Так же можно обратиться и таким способом
// console.log(man['name']);
// И третий способ: записать ключ в какую-нибудь переменную и обратиться через нее
// let a = "name";
// console.log(man[a]);

// №2 Создайте ассоциативный массив, содержащий описание человека. Задайте поля:
// имя, возраст, пол, индивидуальный номер. Заполните массив, выведите его в консоли
// + Добавьте в массив метод, который будет рассчитывать год рождения исходя из
// его возраста и возвращать его

let man2 = {
  "name" : "Alex",
  "age" : 15,
  "id": "223344d",
  "sex": "male",
  "year": function () {
    return 2020 - this.age;
  }
}
console.log(man2.year());

// №3 Создайте ассоциативный массив свойство mas, которое содержит
// массив чисел(любого количества)
// Добавьте метод, который выводит сумму чисел содержащихся в mas

// Обьявляю ассоциативный массив m, который содержит в себе массив mas: 
// По сути это двумерный массив
let m = {
  "mas" : [5, 6, 34, 12, 45],
  // Добавляем метод:
  "sum": function () {
    let sum = 0;
    for (let i = 0; i < this.mas.length; i++){
      sum = sum + this.mas[i];
    }
    return sum;
   }
}
console.log(m.sum());

// №4 Создайте массив, ключами которого служат артикулы товаров (любое
// пятизначное число), а значениями ассоциативный массив, 
// который содержит название товараб стоимость,
// вес единицы, ссылку на изображение, отметку о доступности товара на складе
// Выведите массив в консоль. 
// Выведите в HTML описание первого товара

let goods = {
  "28292": {
    "name": "банан",
    "cost": 30,
    "img": "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/yellow_banana_fruit_vegetable-256.png",
    "sklad": "да"
  },
  "23729": {
    "name": "помидор",
    "cost": 40,
    "img": "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/red_tomato_fruit_vegetable-256.png",
    "sklad": "нет"
  },
    "11223": {
    "name": "Клубника",
    "cost": 60,
    "img": "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/strawberry_red_fruit_vegetable-256.png",
    "sklad": "да"
  },
};
let out = '';
for (let key in goods) {
  out += "Название: " + goods[key].name + "<br>"
  out += "Цена: " + goods[key].cost + "<br>"
  out += "В наличии на складе: " + goods[key].sklad + "<br>"
  out += "<img src='" + goods[key].img + "'>";
  out += "<hr>"
}
document.getElementById('out').innerHTML = out;
console.log(goods)
  