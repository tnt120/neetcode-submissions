class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestPrice = prices[0];
        let highestProfit = -Infinity;

        for (let i = 1; i < prices.length; i++) {
            highestProfit = Math.max(highestProfit, prices[i] - lowestPrice);

            lowestPrice = Math.min(prices[i], lowestPrice);
        }

        return Math.max(0, highestProfit)
    }
}
