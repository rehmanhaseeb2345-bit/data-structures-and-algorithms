let arr = [8, 4, 9, 2, 7];
function SelectionSort(arr) {
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    let minindex = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[minindex]) {
        minindex = j;
      }
    }
    if (minindex !== i) {
      [arr[i], arr[minindex]] = [arr[minindex], arr[i]];
    }
  }
  return arr;
}

console.log("Original:", arr);
console.log("Sorted:", SelectionSort(arr));
