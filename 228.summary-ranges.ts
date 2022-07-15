/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
const summaryRanges = (nums: number[]): string[] => {
  const result = [] as string[];
  for (let start = 0, end = 0; end < nums.length; end++, start = end){
    while (nums[end] === nums[end + 1] - 1) {
      end++;
    }

    if (start === end) {
      result.push(nums[end].toString());
    } else {
      result.push(nums[start] + '->' + nums[end]);
    }
  }
  return result;
};
// @lc code=end

