/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */
  // let c = columnNumber - 1;
  // if (c >= 0 && c < 26) {
  //   return String.fromCharCode(65 + c);
  // }
  // return convertToTitle(parseInt(`${c / 26}`)) + convertToTitle((c % 26) + 1);
// @lc code=start
const titleToNumber = (columnTitle: string): number => {
  return columnTitle.split('').map((i) => i.charCodeAt(0) -64).reverse().reduce((acc, cur, index) => acc + cur * Math.pow(26, index))
};
// @lc code=end

