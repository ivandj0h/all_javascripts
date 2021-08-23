// the total of array isn't instantiate yet
// so you've to find it
// the missing number/element in array alerady been given

// [1, 2, 4, 6, 7, 8, 9, 10]

var missingElement = [5, 3],
  /* here we can input whatever element we want*/ count = 10;
var holeCompletedArrayWithoutMissing = new Array();

for (var i = 1; i <= count; i++) {
  if (missingElement.indexOf(i) == -1) {
    holeCompletedArrayWithoutMissing.push(i);
  }
}

console.log(holeCompletedArrayWithoutMissing);
