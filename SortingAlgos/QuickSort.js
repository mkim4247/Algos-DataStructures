function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}

function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIndex = start;

  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < pivot) {
      swapIndex++;
      swap(array, i, swapIndex);
    }
  }

  swap(array, start, swapIndex);
  return swapIndex;
}

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
