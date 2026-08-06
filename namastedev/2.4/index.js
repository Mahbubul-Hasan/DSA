/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) maxProfit = profit;
    }
  }
  console.log("🚀 ~ minPrice:", minPrice);
  console.log("🚀 ~ maxProfit:", maxProfit);
  return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
