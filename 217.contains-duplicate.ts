/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
const containsDuplicate = (nums: number[]): boolean => {
  const sortNums = nums.sort((a, b) => a - b);
  let isDuplicate = false;
  const firstNumber = sortNums[0];
  sortNums.map((num, i) => {
    if (num === sortNums[i - 1]) {
      isDuplicate = true;
    }
  })
  return isDuplicate;
};
// @lc code=end

