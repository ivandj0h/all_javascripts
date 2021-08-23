// FIND MISSING ARRAY
// here is if you alerady know the missing element in array but you wanna print the whole array

// ------------
// Below is print the missing array

// ES6 Syntax
var arr = [3, 5, 6, 7, 9];

var [min, max] = [Math.min(...arr), Math.max(...arr)];
var out = Array.from(Array(max - min), (v, i) => i + min).filter(
  (i) => !arr.includes(i)
);

console.log(out);
