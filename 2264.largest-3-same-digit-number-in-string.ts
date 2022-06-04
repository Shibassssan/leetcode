/*
 * @lc app=leetcode id=2264 lang=typescript
 *
 * [2264] Largest 3-Same-Digit Number in String
 */

// @lc code=start
const largestGoodInteger = (num: string): string => {
  if (num === '') return '';
  const numArray = num.split('');

  let maxNumber = '';
  for (let i = 2; i < numArray.length; i++) {
    if (numArray[i] === numArray[i - 1] && numArray[i] === numArray[i - 2]) {
      const sameDigit = num[i].repeat(3);
      if (sameDigit > maxNumber) {
        //  update maxNumber
        maxNumber = sameDigit;
      }
    }
  }

  return maxNumber;
};
// @lc code=end
