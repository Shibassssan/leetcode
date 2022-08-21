/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
const intersection = (nums1: number[], nums2: number[]): number[] => {
  const commons = nums1.filter(x => nums2.indexOf(x) !== -1);
  return [...new Set(commons)];
};
// @lc code=end

