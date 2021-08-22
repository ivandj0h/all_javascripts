// Two Sum

function getTwoSum(nums, target) {
  const comp = new Map();
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
  return [];
}

// Execution
const nums = [2, 8, 13, 22, 10];
const target = 35;

console.log(getTwoSum(nums, target));
