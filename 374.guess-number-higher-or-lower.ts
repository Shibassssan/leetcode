/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


const guessNumber = (n: number): number => {
  if (n === 1) return n;
  let start = 1;
  let end = n;
  let res: number;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let result = guess(mid);
    if (result === 1) {
      start = mid + 1;
    }
    if (result === -1) {
      end = mid - 1;
    }
    if (result === 0) {
      return mid;
    }
  }
};
// @lc code=end

