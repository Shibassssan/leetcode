/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
const findTheDifference = (s: string, t: string): string => {
  if (s.length === 0) return t;

  const map = new Map<string, number>();

  for (let index = 0; index < s.length; index++) {
    map.set(s[index], (map.get(s[index]) ?? 0) + 1);
  }

  for (let v = 0; v < t.length; v++) {
    if (map.has(t[v])) {
      const value = map.get(t[v]);
      value && value > 1 ? map.set(t[v], value - 1) : map.delete(t[v]);
    } else {
      return t[v]
    }
  }
  return "";
};
// @lc code=end

