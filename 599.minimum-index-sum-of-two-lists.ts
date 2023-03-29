/*
 * @lc app=leetcode id=599 lang=typescript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
const findRestaurant = (list1: string[], list2: string[]): string[] => {
  if (list1.length === 0 || list2.length === 0) return [""];
  let map = new Map<string,number>();
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  let minIndex = Number.MAX_SAFE_INTEGER;
  let result: string[] = [];

  for (let v = 0; v < list2.length; v++) {
    if (map.has(list2[v])) {
      const currentIndexSum = (map.get(list2[v]) || 0) + v;
      if (minIndex > currentIndexSum) {
        result = [list2[v]];
        minIndex = currentIndexSum;
      } else if (minIndex === currentIndexSum) {
        result.push(list2[v])
      }
    }
  }

  return result;
};
// @lc code=end

