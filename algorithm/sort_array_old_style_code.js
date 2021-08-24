// SORT ARRAY

// First Method is Bubble Sort
// function bubbleSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// const myArray = [3, 2, 9, 7, 1];
// const bs = bubbleSort(myArray);

// console.log(bs);

// The second method is Quick Sort
/*
1. Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
2. Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
3. epeat this process individually for the left and right side of the pivot, until the array is sorted.
*/
function partition(arr, startIndex, endIndex) {
  const pivotVal = arr[endIndex]; // the pivot element
  let index = startIndex;
  // begin iterate and swap
  for (let i = index; i < endIndex; i++) {
    if (arr[i] < pivotVal) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index += 1;
    }
  }

  // move `pivotVal` to the middle index and return middle index
  [arr[index], arr[endIndex]] = [arr[endIndex], arr[index]];
  return index;
}

function quickSort(arr, startIndex, endIndex) {
  // Base case or terminating case
  if (startIndex >= endIndex) {
    return;
  }

  // Returns midIndex / pivot index
  let midIndex = partition(arr, startIndex, endIndex);

  // Recursively apply the same logic to the left and right subarrays
  quickSort(arr, startIndex, midIndex - 1);
  quickSort(arr, midIndex + 1, endIndex);
}

let arr = [-2, 4, 6, 3, 7, 2];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // [-2, 2, 3, 4, 6, 7]
