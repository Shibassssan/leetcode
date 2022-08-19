/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
const isPowerOfFour = (n: number): boolean => {
  if (n <= 0) return false;
  if (n === 1) return true;
  return (Math.log(n) / Math.log(4)) % 1 === 0;
};
// @lc code=end

