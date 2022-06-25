/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
const singleNumber = (nums: number[]): number => {
  const set = new Set();

  nums.map((target) => {
    if (set.has(target)) {
      set.delete(target);
    } else {
      set.add(target);
    }
  })
  return set.values().next().value;
};
// @lc code=end

