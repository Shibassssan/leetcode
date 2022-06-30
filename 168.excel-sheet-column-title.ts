/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
const convertToTitle = (columnNumber: number): string => {
  let c = columnNumber -1;
  if (c >= 0 && c < 26) {
    return String.fromCharCode(65 + c);
  }
  return convertToTitle(parseInt(`${c / 26}`)) + convertToTitle((c % 26) + 1);
};
// @lc code=end

