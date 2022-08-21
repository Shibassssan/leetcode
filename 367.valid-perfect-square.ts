/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
const isPerfectSquare = (num: number): boolean => {
  if (num <= 0) return false;
  if (num === 1) return true;

  let i = 1;
  let ans = i * i;
  while (ans < num) {
    i++;
    ans = i * i;
  }
  return ans === num;
};
// @lc code=end

