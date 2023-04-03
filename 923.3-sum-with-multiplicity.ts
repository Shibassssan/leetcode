/*
 * @lc app=leetcode id=923 lang=typescript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
const threeSumMulti = (arr: number[], target: number): number => {
  const map = new Map<number, number>();
  const wight = 1000000007;

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = (res + (map.get(target - arr[i]) || 0)) % wight;
    for (let v = 0; v < arr.length; v++) {
      let temp = arr[i] + arr[v];
      map.set(temp, (map.get(temp) || 0) + 1)
    }
  }
  return res;
};
// @lc code=end

