/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
const isAnagram = (s: string, t: string): boolean => {
  const beforeString = s.split('').sort().join();
  const afterString = t.split('').sort().join();
  return beforeString === afterString;
};
// @lc code=end

