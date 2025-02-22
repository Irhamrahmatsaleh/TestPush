function bubbleSortRecursive(arr, n) {
  // Base case
  if (n == 1) {
    return;
  }

  // One pass of bubble sort. After this pass, the largest element is moved to end.
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swap arr[i] and arr[i + 1]
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  // Largest element is fixed, recur for remaining array
  bubbleSortRecursive(arr, n - 1);
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSortRecursive(arr, arr.length);
console.log('Sorted array:', arr);
