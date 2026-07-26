// // // let n = 6;
// // // for (i = n; i >= 1; i--) {
// // //   let row = "";

// // //   for (k = 1; k <= i; k++) {
// // //     row += "*";
// // //   }

// // //   console.log(row);
// // // }

// // // let n = 6;
// // // for (i = 1; i <= n; i++) {
// // //   let row = "";

// // //   for (k = 1; k <= n; k++) {
// // //     if (k <= n - i) {
// // //       row += " ";
// // //     } else {
// // //       row += "*";
// // //     }
// // //   }

// // //   console.log(row);
// // // }

// // let n = 5;

// // for (i = 1; i <= n; i++) {
// //   star = "";
// //   for (j = 1; j <= n; j++) {
// //     if (i == 1 || i == n || j == 1 || j == n) {
// //       star += "*";
// //     } else {
// //       star += " ";
// //     }
// //   }

// //   console.log(star);
// // }

// let temps = [72, 85, 170, 170, 170, 170];
// fmax = 0;
// smax = 0;
// for (i = 0; i < temps.length; i++) {
//   if (fmax < temps[i]) {
//     smax = fmax;
//     fmax = temps[i];
//   } else if (smax < temps[i] && fmax != temps[i]) {
//     smax = temps[i];
//   }
// }

// console.log(smax);

let temps = [72, 85, 170, 170, 170, 170];

let reverse = [];

for (let i = temps.length - 1; i >= 0; i--) {
  reverse.push(temps[i]);
}
console.log(reverse);
