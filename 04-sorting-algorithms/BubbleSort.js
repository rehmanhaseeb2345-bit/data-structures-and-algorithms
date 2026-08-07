// function bubbleSort(arr) {
//   let n = arr.length;
//   let swapped;

//   for (i = 0; i < n; i++) {
//     swapped = false;
//     for (j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }

//     if (!swapped) {
//       break;
//     }
//   }
//   return arr;
// }

// let arr = [7, 3, 6, 1];
// console.log("Original:", arr);
// console.log("Sorted:", bubbleSort(arr));

function BubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (i = n - 1; i >= 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}

let arr = [50, 22, 45, 11, 34, 9];
console.log(BubbleSort(arr));
