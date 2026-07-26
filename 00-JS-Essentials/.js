// // // // let prompt = require("prompt-sync")();
// // // // let number = Number(prompt("Enter the number "));

// // // // n = number;
// // // // sum = 0;

// // // // while (n > 0) {
// // // //   extract = n % 10;
// // // //   sum += extract;
// // // //   n = Math.floor(n / 10);
// // // // }

// // // // let divide = number % sum;
// // // // if (divide === 0) {
// // // //   console.log("Harshad");
// // // // } else {
// // // //   console.log("Not Harshad");
// // // // }

// // // let prompt = require("prompt-sync")();
// // // let number = Number(prompt("Enter the number "));

// // // n = number;
// // // steps = 0;

// // // while (n > 1) {
// // //   if (n % 2 === 0) {
// // //     n = n / 2;
// // //   } else if (n % 2 !== 0) {
// // //     n = n * 3 + 1;
// // //   } else {
// // //     console.log("Wrong n");
// // //   }
// // //   steps++;
// // // }

// // // console.log(n, steps);

// // let prompt = require("prompt-sync")();
// // let n = Number(prompt("Enter the number "));

// // let number = n;
// // divisor = 0;
// // for (i = 1; i <= n / 2; i++) {
// //   if (n % i === 0) {
// //     divisor += i;
// //   }
// // }

// // if (divisor > n) {
// //   console.log("Abundant");
// // } else {
// //   console.log("Not Abundant");
// // }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number "));

// let number = n;
// primeFact = [];

// for (i = 2; i <= number / 2; i++) {
//   while (number % i === 0) {
//     primeFact.push(i);
//     number = Math.floor(number / i);
//   }
// }

// if (number > 1) {
//   primeFact.push(number);
// }

// console.log(primeFact);

// let star = "";
// number = 5000000000;

// for (i = 1; i <= number; i++) {
//   console.log((star += "*"));
// }
