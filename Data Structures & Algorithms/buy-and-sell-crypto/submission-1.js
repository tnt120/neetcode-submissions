class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) return 0;
        let bestProfit = 0;
        let minPrice = prices[0];

        for (let i = 1; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            bestProfit = Math.max(bestProfit, prices[i] - minPrice);
        }

        return bestProfit;
    }
}
