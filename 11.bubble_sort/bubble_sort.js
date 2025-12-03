
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
     let swaped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
        swaped = true;
      }
    }

    if (!swaped) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([5,4,2,3,1]));

// node bubble_sort.js