/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const lastIndexMap = new Map<number, number>();
  let isDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = lastIndexMap.get(nums[i]);
    const calcResult = currentNumber
      ? i - currentNumber <= k
      : i <= k;
    if (calcResult) {
      isDuplicate = true;
      break;
    }
    lastIndexMap.set(nums[i], i);
  }
  return isDuplicate;
};
// @lc code=end

