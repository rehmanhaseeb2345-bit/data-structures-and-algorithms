// // let arr = [10, 20, 30, 40, 50];
// // let sum = 0;

// // for (i = 0; i < arr.length; i++) {
// //   sum += arr[i];
// // }
// // console.log(sum);

// // let arr = [10, 2, 78, 100, 4];
// // let max = arr[0];

// // for (i = 0; i < arr.length; i++) {
// //   if (max < arr[i]) {
// //     max = arr[i];
// //   }
// // }
// // console.log(max);

// let arr = [10, 40, 40, 20, 40];
// let max = 0;
// let secondmax = 0;

// for (i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     secondmax = max;
//     max = arr[i];
//   } else if (secondmax < arr[i] && arr[i] != max) {
//     secondmax = arr[i];
//   }
// }
// console.log(secondmax);

// let arr = [10, 20, 30, 40, 50];
// let left = 0;
// let right = arr.length - 1;
// while (left < right) {
//   temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;

//   left++;
//   right--;
// }
// console.log(arr);

let arr = [0, 1, 0, 1, 1, 0];
let left = 0;
let right = arr.length - 1;

while (left < right) {
  if (arr[left] == 0) {
    left++;
  } else if (arr[right] == 1) {
    right--;
  } else {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
console.log(arr);
