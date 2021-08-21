/*
 * You're given of two sorted arrays
 * input arrOne = [1, 3]
 * input arrTwo = [2]
 *
 * find the Median?
 * what is the best time complexity
 *
 * Test cases :
 * n1 = [1, 3, 50, 100], n2 = []
 * n1 = [], n2 = []
 *
 */

function findMedianOfSortedArrays(nums1 = [], nums2 = []) {
  let i1 = 0;
  let i2 = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;

  if (len === 0) return null;

  const merged = [];
  while (i1 < len1 && i2 < len2) {
    if (nums1[i1] <= nums2[i2]) {
      merged.push(nums1[i1++]);
    } else {
      merged.push(nums2[i2++]);
    }
  }

  while (i1 < len1) {
    merged.push(nums1[i1++]);
  }

  while (i2 < len2) {
    merged.push(nums2[i2++]);
  }

  const isOdd = len % 2;
  if (isOdd) {
    return merged[(len - 1) / 2];
  } else {
    return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2;
  }
}

// Start Execution
const nums1 = [1, 3, 4, 3];
const nums2 = [2, 3, 8, 9, 12];

console.log(findMedianOfSortedArrays(nums1, nums2));
