/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
const maxSubArray = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];
  let maxSum = nums[0];
  let currentSum = 0;
  nums.map((currentNumber) => {
    currentSum = Math.max(currentSum + currentNumber, currentNumber);
    maxSum = Math.max(maxSum, currentSum);
  })
  return maxSum;
};
// @lc code=end

