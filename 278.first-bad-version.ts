/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = (isBadVersion: any) => {
  return (n: number): number => {
    let low = 1;
    let high = n;
    let firstBad = 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (isBadVersion(mid)) {
        high = mid - 1;
        firstBad = mid;
      } else {
        low = mid + 1;
      }
    }
    return firstBad;
  };
};
// @lc code=end

