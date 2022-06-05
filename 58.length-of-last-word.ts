/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
const lengthOfLastWord = (s: string): number => {
  const strings = s.split(' ').filter(n => n);
  const lastWorld = strings.pop();
  return lastWorld.length;
};
// @lc code=end

