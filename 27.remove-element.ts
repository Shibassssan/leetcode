/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
const removeElement = (nums: number[], val: number): number => {
  if (nums.length === 0) return 0;

  const copiedNums = nums;
  for (let i = 0; i < copiedNums.length; i++) {
    if (copiedNums[i] == val) {
      copiedNums.splice(i, 1);
      i--;
    }
  }
  return copiedNums.length;
};
// @lc code=end

