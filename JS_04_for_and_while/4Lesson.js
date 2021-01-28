function for1() {
  let resultFor = document.getElementById('result-for');
  // Цикл for - цикл с заданным количеством повторений
  for (let i = 1; i <= 100; i++){
    // i++ это то же самое, что и i = i + 1
    resultFor.innerHTML += i + " "; 
    // выражение выше ДОПИСЫВАЕТ в параграф значение i;
    // шаг цикла можно менять
  }
}
function while1() {
  let i = 0;
  let resultWhile = document.getElementById('result-while');
  // ниже цикл с ПРЕДусловием
  // сперва проверяется условие, а только потом выполняется тело цикла
  while (i < 50) {
    resultWhile.innerHTML += i + " ";
    i++;
  }
}
function doWhile1() {
  let i = 0;
  let resultDoWhile = document.getElementById('result-do-while');
  // цикл с пост условием
  // первый раз выполняет тело цикла, затем проверяет условие
  do {
    resultDoWhile.innerHTML += i + ' ';
    i++;
  }
  while (i < 30)
}