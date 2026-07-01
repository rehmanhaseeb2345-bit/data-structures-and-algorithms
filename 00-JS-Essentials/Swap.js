let a = "1B";
let b = 2;

console.log(a, b);

swap = a;
a = b;
b = swap;

console.log(a, b);

// 2nd Way Destruction Array

let a = 200;
let b = 400;

[a, b] = [b, a];

console.log(a, b);
