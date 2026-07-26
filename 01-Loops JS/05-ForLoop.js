// function isStrongNumber(n) {
//   num = n;
//   digit = [];
//   sum = 0;

//   while (num > 0) {
//     extrnum = num % 10;

//     let result = 1;

//     for (i = 2; i <= extrnum; i++) {
//       result *= i;
//     }
//     sum += result;
//     num = Math.floor(num / 10);
//   }

//   if (sum === n) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }

// isStrongNumber(145);

// function checkabandantnum(n) {
//   sum = 0;
//   num = n;
//   tempnum = n - 1;
//   for (i = 1; i < n; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }

//   if (sum > n) {
//     console.log("Abandant Num");
//   } else {
//     console.log("Not Abandant Num");
//   }
// }

// checkabandantnum(154249);
