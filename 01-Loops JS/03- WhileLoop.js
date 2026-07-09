const prompt = require("prompt-sync")();
const question = Number(prompt("Enter the number "));

let number = question;
sqr = number ** 2;
sqr1 = 0;
sqr2 = 0;
auto = true;
while (number > 0) {
  sqr1st = number % 10;
  sqr1 = sqr1 * 10 + sqr1st;

  sqr2nd = sqr % 10;
  sqr2 = sqr2 * 10 + sqr2nd;

  if (sqr1 !== sqr2) {
    auto = false;
    break;
  }

  number = Math.floor(number / 10);
  sqr = Math.floor(sqr / 10);
}
console.log(auto);
