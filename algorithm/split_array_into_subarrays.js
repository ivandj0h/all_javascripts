// Example array.
let randomArray = [3, 5, 1, 5, 7, 3];
// Create an empty array.
let arrayOfArrays = [];

function splitArray(array) {
  while (array.length > 0) {
    let arrayElement = array.splice(0, 1);
    arrayOfArrays.push(arrayElement);
  }
  return arrayOfArrays;
}

// Call the function while passing in an array of your choice.
console.log(splitArray(randomArray));
// => [ [ 3 ], [ 5 ], [ 1 ], [ 5 ], [ 7 ] ]
