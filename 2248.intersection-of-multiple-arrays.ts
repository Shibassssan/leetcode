/*
 * @lc app=leetcode id=2248 lang=typescript
 *
 * [2248] Intersection of Multiple Arrays
 */

// @lc code=start
const intersection = (nums: number[][]): number[] => {
  if (nums.length === 1) return nums[0].sort((a, b) => a - b);
  let temp: number[] = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i]) break;
    temp = temp.filter((x) => nums[i].indexOf(x) !== -1);
  }
  return [...temp].sort((a, b) => a - b);
};
// @lc code=end

