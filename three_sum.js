// Three Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const sumMap = {};
  const results = [];
  let i = 0,
    j = 1,
    k = nums.length - 1;

  while (j < k && i < sortedNums.length - 2) {
    const sum = nums[i] + nums[j] + nums[k];
    if (sum == 0 && (i != j, i != k && j != k)) {
      const sumKey = `${nums[i]},${nums[j]},${nums[k]}`;
      if (!sumMap[sumKey]) {
        sumMap[sumKey] = [nums[i], nums[j], nums[k]];
        results.push(sumMap[sumKey]);
      }
    }

    if (j == k - 1) {
      i++;
      j = i + 1;
      k = nums.length - 1;
    } else if (sum < 0) {
      j++;
    } else {
      k--;
    }
  }

  return results;
};

// Execution
console.log(threeSum([-1, -3, -7, -2, 0, 1, 2, -1, -4]));
