/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

const titleToNumber = (columnTitle: string): number => {
  return columnTitle.split('').map((i) => i.charCodeAt(0) - 64).reverse().reduce((acc, cur, index) => acc + cur * Math.pow(26, index))
};
// @lc code=end

