/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
const isPowerOfThree = (n: number): boolean => {
  let temp = 1;
  while (temp < n) temp *= 3;
  return temp === n;
};
// @lc code=end

