// // const prompt = require("prompt-sync")();
// // const question = Number(prompt("Enter the number "));

// // let number = question;
// // let reverse = 0;

// // while (number > 0) {
// //   let lastDigit = number % 10;
// //   reverse = reverse * 10 + lastDigit;

// //   let divide = Math.floor(number / 10);
// //   number = divide;
// // }

// // console.log(reverse);

// function checkHarshad(n) {
//   let sum = 0;
//   num = n;

//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   let Harshad = n % sum;

//   if (Harshad === 0) {
//     console.log("Harshad Number");
//   } else {
//     console.log("Not a Harshad Number");
//   }
// }
// checkHarshad(18);

function Armstrong(n) {
  num = n;
  sum = 0;
  let pow = 0;

  while (num > 0) {
    pow++;
    num = Math.floor(num / 10);
  }

  num = n;

  while (num > 0) {
    extracted = num % 10;
    sum += extracted ** pow;
    num = Math.floor(num / 10);
  }

  if (sum === n) {
    console.log("Armstrong");
  } else {
    console.log("Not Armstrong");
  }
}

Armstrong(153);
