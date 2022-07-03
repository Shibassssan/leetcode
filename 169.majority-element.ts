/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
const majorityElement = (nums: number[]): number => {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length/2)]
};
// @lc code=end

