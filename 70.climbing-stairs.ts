/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
const climbStairs = (n: number): number => {
  if (n <= 3) return n;
  // 初期値
  let stair1 = 2;
  let stair2 = 3;

  for (let i = 4; i <= n; i++) {
    let temporaryStairs = stair1 + stair2;

    // 直前と二つ前のstairの数字を更新
    stair1 = stair2;
    stair2 = temporaryStairs;
  }

  return stair2;
};
// @lc code=end

