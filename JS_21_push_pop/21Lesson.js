// Метод который добавляет элементы в массив - push
let a = [99, 88];
console.log(a);
// Добавляем элементы в массив 
// Есть два способа: 
// 1. Явно указать индекс и тогда в зависимости от того существует индекс
// или нет элемент будет дописан или заменен
// Выглядит следующим образом 
a[0] = 66;
console.log(a);
a.push(95, 20);
// Метод push добавляет элементы в конец массива
// так же можно добавлять несколько элементов сразу, просто через запятую 
console.log(a);
// push возвращает НОВУЮ длинну массива 

// pop - удаляет последний элемент массива 
a.pop()
console.log(a);