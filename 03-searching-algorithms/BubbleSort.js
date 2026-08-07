function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (i = 0; i < n; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
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

let arr = [7, 3, 6, 1];
console.log("Original:", arr);
console.log("Sorted:", bubbleSort(arr));
