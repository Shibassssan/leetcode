/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
const maxArea = (height: number[]): number => {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left));
    height[right] > height[left] ? left++ : right--;
  }
  return ans;
};
// @lc code=end

