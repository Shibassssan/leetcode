/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
// const twoSum = (nums: number[], target: number): number[] => {
//   let result: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let v = i+1; v < nums.length; v++) {
//       const difference = target - (nums[i] + nums[v]);
//       if (difference === 0) {
//         result.push(i, v);
//         return result;
//       }
//     }
//   }
//   return result;
// };

const twoSum = (nums: number[], target: number): number[] => {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    const j = indexByValue.get(need);
    if (j !== undefined) {
      return [j, i];
    }
    indexByValue.set(nums[i], i);
  }

  return [];
};
// @lc code=end

