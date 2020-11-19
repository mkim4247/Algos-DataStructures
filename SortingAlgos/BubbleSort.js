function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (arr[j] < arr[j - 1]) {
        // let temp = arr[j - 1];
        // arr[j - 1] = arr[j];
        // arr[j] = temp

        swap(array, j, j - 1);
      }
    }
  }
  return array;
}

function bubbleSort2(array) {
  let noSwaps;

  for (let i = array.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(array, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
  return array;
}

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
