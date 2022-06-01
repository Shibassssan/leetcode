/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  if (nums.indexOf(target) >= 0) {
    return nums.indexOf(target);
  }
  const newArray = [...nums, target];

  newArray.sort((a, b) => a - b);

  return newArray.indexOf(target);
};
// @lc code=end

