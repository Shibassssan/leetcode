/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
const generate = (numRows: number): number[][] => {
  if (numRows === 0) return [[]];
  if (numRows === 1) return [[1]];
  const pascals = [[1]];
  for (let i = 1; i < numRows; i++) {
    const preRow = pascals[pascals.length - 1];
    const preRowLeft = [0, ...preRow];
    const preRowRight = [...preRow, 0];
    const currentRow = preRowLeft.map((v, index) => v + preRowRight[index]);
    pascals.push(currentRow);
  }
  return pascals;
};
// @lc code=end

