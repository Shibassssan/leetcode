/*
 * @lc app=leetcode id=2287 lang=typescript
 *
 * [2287] Rearrange Characters to Make Target String
 */

// @lc code=start
const rearrangeCharacters = (s: string, target: string): number => {
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
  }
  for (let i = 0; i < target.length; i++) {
    tMap.set(target[i], (tMap.get(target[i]) || 0) + 1);
  }

  let min = 100;

  for (const tempEntry of tMap) {
    min = Math.min(min, (sMap.get(tempEntry[0]) || 0) / tempEntry[1]);
  }

  return Math.floor(min)
};
// @lc code=end

