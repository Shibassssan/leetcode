/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
const threeSumClosest = (nums: number[], target: number): number => {
  let res = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) left++;
      else right--;
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }

  return res;
};
// @lc code=end

