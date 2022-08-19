/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
const countBits = (n: number): number[] => {
  const bit = new Uint8Array(n + 1);
  for (let i = 0; i < bit.length; i++) {
    bit[i] = bit[i >> 1] + (i & 1);
  }
  return [...bit];
};
// @lc code=end

