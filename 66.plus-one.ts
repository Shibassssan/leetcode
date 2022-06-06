/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
const plusOne = (digits: number[]): number[] => {
  const digitsPlusOne = BigInt(digits.join('')) + 1n;
  return String(digitsPlusOne).split('').map(Number);
};
// @lc code=end

