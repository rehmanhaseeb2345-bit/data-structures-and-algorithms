// // function printHello(n) {
// //   if (n === 0) return 0;
// //   console.log("Hello");
// //   printHello(n - 1);
// // }
// // printHello(3);

// function show(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   show(n - 1);
// }

// show(3);
// function mystery(n) {
//   if (n === 0) return;
//   console.log("down " + n);
//   mystery(n - 1);
//   console.log("up " + n);
// }

// mystery(3);

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(5));
