// // let arr = [1, 2, 3, 4, 5];
// // let slow = arr[0];
// // let fast = arr.length - 1;

// // while (slow < fast) {
// //   [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
// //   slow++;
// //   fast--;
// // }
// // console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let slow = 0;
// let fast = slow + 1;

// while (fast < arr.length) {
//   [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
//   slow++;
//   fast++;
// }
// console.log(arr);

// let arr = [1, 1, 2, 3, 3];
// let slow = 0;
// let fast = 1;

// while (fast < arr.length) {
//   if (arr[slow] == arr[fast]) {
//     fast++;
//   } else {
//     slow++;
//     arr[slow] = arr[fast];
//     fast++;
//   }
// }

// console.log(arr);
// console.log(slow + 1);

// let first = arr[0];
// let second = arr[1];

// for (let i = 0; i < arr.length - 2; i++) {
//   arr[i] = arr[i + 2];
// }

// arr[arr.length - 2] = first;
// arr[arr.length - 1] = second;

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let left = 0;
// let right = 2;
// while (right < arr.length) {
//   [arr[left], arr[right]] = [arr[right], arr[left]];
//   left++;
//   right++;
// }

// console.log(arr);
