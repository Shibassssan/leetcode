/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};
// @lc code=end

