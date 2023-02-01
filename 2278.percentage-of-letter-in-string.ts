/*
 * @lc app=leetcode id=2278 lang=typescript
 *
 * [2278] Percentage of Letter in String
 */

// @lc code=start
const percentageLetter = (s: string, letter: string): number => {
  const appearTimes = s.match(new RegExp(letter, 'g'))?.length || 0;

  return Math.floor(appearTimes / s.length * 100);
};
// @lc code=end

