/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

function rotateArray(arr, total) {
  if (!arr.length) return arr;
  let index = -1;
  while (++index < total) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotateArray(arr, k));
