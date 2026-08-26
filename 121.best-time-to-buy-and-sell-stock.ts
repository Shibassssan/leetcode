/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
// const maxProfit =(prices: number[]): number => {
//   let minValue = prices[0];
//   let maxProf = 0;
//   prices.map((price, index) => {
//     if (price < minValue) {
//       minValue = price;
//     }
//
//     if (price - minValue > maxProf) {
//       maxProf = price - minValue;
//     }
//   })
//
//   return maxProf;
// };

const maxProfit = (prices: number[]): number => {
  let minPrice = prices[0];
  let maxProfitSoFar = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfitSoFar) {
      maxProfitSoFar = price - minPrice;
    }
  }

  return maxProfitSoFar;
};
// @lc code=end

