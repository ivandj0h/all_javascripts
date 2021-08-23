// SORT ARRAY

// First Method is Bubble Sort
function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

const myArray = [3, 2, 9, 7, 1];
const bs = bubbleSort(myArray);

// console.log(bs);

// The second method is Quick Sort
/*
1. Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
2. Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
3. epeat this process individually for the left and right side of the pivot, until the array is sorted.
*/
