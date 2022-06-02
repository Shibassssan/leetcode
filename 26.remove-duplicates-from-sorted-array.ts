/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
const removeDuplicates = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
// @lc code=end
