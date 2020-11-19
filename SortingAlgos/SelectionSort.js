function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }

    if (i !== smallest) {
      swap(array, i, smallest);
    }
  }
}

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
