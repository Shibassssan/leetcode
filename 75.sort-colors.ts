/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums: number[]): void => {
  for (let i = 0; i < nums.length; i++) {
    for (let v = i + 1; v < nums.length; v++){
      if (nums[i] > nums[v]) {
        let temp = nums[i];
        nums[i] = nums[v];
        nums[v] = temp;
      }
    }
  }
};
// @lc code=end

