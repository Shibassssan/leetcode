/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
const isPowerOfTwo = (n: number): boolean => {
  const int = Math.log(n) / Math.log(2);
  return 1 << int === n;
};
// @lc code=end

