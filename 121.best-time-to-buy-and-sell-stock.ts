/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
const maxProfit =(prices: number[]): number => {
  let minValue = prices[0];
  let maxProf = 0;
  prices.map((price, index) => {
    if (price < minValue) {
      minValue = price;
    }

    if (price - minValue > maxProf) {
      maxProf = price - minValue;
    }
  })

  return maxProf;
};
// @lc code=end

