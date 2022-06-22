/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
const getRow = (rowIndex: number): number[] => {
  if (rowIndex === 0) return [1];
  const pascals = [[1]];
  for (let i = 0; i < rowIndex; i++) {
    const preRow = pascals[pascals.length - 1];
    const preRowLeft = [0, ...preRow];
    const preRowRight = [...preRow, 0];
    const currentRow = preRowLeft.map((v, index) => v + preRowRight[index]);
    pascals.push(currentRow);
  }
  return pascals[rowIndex];
};
// @lc code=end

