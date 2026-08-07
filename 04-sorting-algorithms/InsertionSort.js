// let arr = [5, 9, 3, 6];
// for (let i = 1; i < arr.length; i++) {
//   let current = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] > current) {
//     arr[j + 1] = arr[j];
//     j--;
//   }

//   arr[j + 1] = current;
// }
// console.log(arr);

// function InsertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }
//   return arr;
// }

// console.log(InsertionSort(arr));

let arr = [1, 2, 3, 4, 5, 0];

function InsertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] < current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(InsertionSort(arr));
