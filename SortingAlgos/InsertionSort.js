function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let j = i - 1;

    while (j >= 0 && currentVal < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentVal;
  }
  return array;
}
