/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
const longestCommonPrefix = (strings: string[]): string => {
  if (strings.length === 0) return '';
  if (strings.length === 1) return strings[0];

  const prefix = (() => {
    let initPrefix = '';
    while (strings.every((str) => str.startsWith(initPrefix))) {
      const newPrefix = strings[0].substr(0, initPrefix.length + 1);

      if (newPrefix.length > initPrefix.length) {
        initPrefix = newPrefix;
      } else if (newPrefix.length === initPrefix.length) {
        return initPrefix;
      } else { break; }
    }
    return initPrefix.slice(0, -1)
  })();

  return prefix;
};
// @lc code=end

