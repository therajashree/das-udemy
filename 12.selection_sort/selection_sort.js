function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j])  minIndex = j;
        }
        if (i !== minIndex) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

console.log(selectionSort([5,4,2,3,1]));

// node selection_sort.js