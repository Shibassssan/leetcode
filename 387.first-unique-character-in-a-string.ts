/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
const firstUniqChar = (s: string): number => {
  const charCounter = new Map<string, number>();
  for (let target of s) {
    charCounter.set(target, (charCounter.get(target) || 0) + 1);
  }
  for (let [k, v] of charCounter.entries()) {
    if (v === 1) return s.indexOf(k);
  }
  return -1;
};
// @lc code=end

