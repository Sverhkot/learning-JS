document.getElementById('r1').oninput = cssGenerator;

// Событие oninput происходит при каждом изменении элемента ввода
// То есть при каждом движении ползунка будет срабатывать это событие

function cssGenerator() {
  // Получаем прямоугольник
  let div = document.getElementById('test');
  // Присваеваем элементу div стиль: 
  console.log(this.value);
  div.style.borderRadius = this.value + 'px';
  // this.value  - это то, что набегает на ползунке, сам элемент на котором происходит событие
  // По умолчанию у меня не заданы диапазоны инпута, это значит, что диапазон будет от 0 до 100

  // Получаю textarea

  let out = document.getElementById('out');
  out.innerHTML = '-webkit-border-radius: ' + this.value + 'px; \n';
  out.innerHTML += 'border-radius: ' + this.value + 'px;';
}
// Это нужно для того, что бы при загрузке страницы, когда ползунок еще не двигали, показывалось значение 0px
document.addEventListener("DOMContentLoaded", function(event) { 
  out.innerHTML = '-webkit-border-radius: ' + 0 + 'px; \n';
  out.innerHTML += 'border-radius: ' + 0 + 'px;';
});