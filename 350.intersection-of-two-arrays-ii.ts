/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
const intersect = (nums1: number[], nums2: number[]): number[] => {
  const intersectionMap = {};
  nums1.forEach((num) => {
    intersectionMap[num] = intersectionMap[num] ? intersectionMap[num] + 1 : 1;
  })
  return nums2.filter((num) => {
    if (intersectionMap[num]) {
      intersectionMap[num]--;
      return true;
    }
    return false;
  })
};
// @lc code=end

