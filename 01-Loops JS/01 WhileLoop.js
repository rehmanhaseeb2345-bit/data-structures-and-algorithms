const prompt = require("prompt-sync")();
const question = Number(prompt("Enter the number "));

let number = question;
let sum = 0;
while (number > 0) {
  let lastDigit = number % 10;
  sum = sum + lastDigit;

  let divide = Math.floor(number / 10);

  number = divide;
}
console.log(sum);
