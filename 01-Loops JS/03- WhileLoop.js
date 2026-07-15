const prompt = require("prompt-sync")();
const userInput = Number(prompt("Enter a number: "));

let originalNumber = userInput;
let squaredNumber = originalNumber ** 2;

let reversedOriginal = 0;
let reversedSquare = 0;
let isAutomorphic = true;

while (originalNumber > 0) {
  const lastDigitOfOriginal = originalNumber % 10;
  reversedOriginal = reversedOriginal * 10 + lastDigitOfOriginal;

  const lastDigitOfSquare = squaredNumber % 10;
  reversedSquare = reversedSquare * 10 + lastDigitOfSquare;

  if (lastDigitOfOriginal !== lastDigitOfSquare) {
    isAutomorphic = false;
    break;
  }

  originalNumber = Math.floor(originalNumber / 10);
  squaredNumber = Math.floor(squaredNumber / 10);
}

console.log(`Is the number automorphic? ${isAutomorphic}`);
