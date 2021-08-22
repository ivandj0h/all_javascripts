/*
 * The Factorrial Number
 * is the product of all the numbers from 1 to that number
 *
 * factorial of 5 => 1 * 2 * 3 * 4 * 5 = 20
 *
 * test case :
 * Make a function to find the factorial of a number!
 */

function factorial(x) {
  // first check if number is 0
  if (x === 0) {
    return 1;
  } else if (x < 0) {
    return `please enter number above 0`;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(-5));
