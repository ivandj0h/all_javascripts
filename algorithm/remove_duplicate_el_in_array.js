// remove duplicate element in array

var myArray = [1, 2, 2, 3, 3, 4, 6, 7];

// First Way
var newObject = {};

for (let x of myArray) {
  newObject[x] = true;
}

var finalResult = Object.keys(newObject);
console.log(finalResult);

// Second Way
const finalResults = new Set(myArray);
console.log([...finalResults]);
