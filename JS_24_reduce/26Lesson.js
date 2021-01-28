// let a = [1, 2, 3, 1];
// let b = a.reduce(dd);

// function dd(accum, item, index) {
//   console.log([accum, item, index])
//   if (index !== 0) {
//     accum = accum + item;
//   }
  
//   return accum;
// }
// // console.log(reduce(a, dd, a[0]));
// console.log(b);

// function reduce(array, func, accumulator = 0) {
//   for (let i = 0; i < array.length; i++){
//     accumulator = func(accumulator, array[i], i);
//   }
//   return accumulator;
// }
// ========================

let a = [{
  title: 'dsfds',
  url: 'http',
  score: 3
},
{
  title: '3232d',
  url: 'www',
  score: 5
  },
{
  title: 'lkjhgfd1',
  url: 'jjj',
  score: 7
},];
// let b = a.map((item) => (item.score)).reduce((a, i) => (a + i)) / a.length;

// let b = a.reduce((a, i) => (a + i.score), 0) / a.length;
let s = 0
let b = a.forEach(function (item) {
  s += item.score;
 
 } )

console.log(s);