let prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
// (Math.random() - генерирует случайное число в виде дроби от 0 до 1
// например 0,66556467
// наша задача это число округлить(Math.floor()) и умножить на 10 
// +1 помогает компенсировать то, что Math.floor() округляет в нижнюю сторону, 
// т.е если число будет 9,99 мы никогда не получим 10, число будет округлено вниз, результатом будет 9
// В результате этого длинного выражения будет сгенерировано случайное число от 1 до 10
tempOut = document.getElementById('temp-out');
tempOut.innerHTML = prNum;

function f1() {
  let num, out;
  num = document.getElementById('mynum').value;
  out = document.getElementById('out');

  if (num == prNum) {
    out.innerHTML = 'Вы угадали';
  }
  else if (num > prNum) {
    out.innerHTML = 'Вы ввели число больше, чем нужно';
  }
  else {
    out.innerHTML = 'Вы ввели число меньше, чем нужно';
  }
}