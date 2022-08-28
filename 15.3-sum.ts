/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  if (nums[nums.length - 1] < 0) return res;

  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let [lo, hi, sum] = [i + 1, nums.length - 1, 0 - nums[i]];
      while (lo < hi) {
        if (nums[lo] + nums[hi] === sum) {
          res.push([nums[i], nums[lo], nums[hi]]);

          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
          lo++;
          hi--;
        }
        else if (nums[lo] + nums[hi] < sum) lo++;
        else hi--;
      }
    }
  }

  return res;
};
// @lc code=end

