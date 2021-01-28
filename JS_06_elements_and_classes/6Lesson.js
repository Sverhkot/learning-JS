// Эта команда вернет массив элементов p
let p = document.getElementsByTagName('p'); 

let one = document.getElementsByClassName('one');


console.log(p);

// Цикл ниже вешает событие onclick на каждый элемент p
for (let i = 0; i < p.length; i++){
  p[i].onclick = f1
};
// Цикл ниже вешает событие onclick на каждый элемент с классом .one
for (let j = 0; j < one.length; j++) {
  one[j].onclick = f2;
};

function f1() {
  console.log(this)
  // this - это та переменная, в которую помещяется тот элемент на котором произошло событие
  this.style.background = 'pink'
};

function f2() {
  this.style.fontWeight = 'bold';
};