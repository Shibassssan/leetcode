/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
const isIsomorphic = (s: string, t: string): boolean => {
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(t[i]) !== s.indexOf(s[i])) {
      return false;
    }
  }
  return true;
};
// @lc code=end

