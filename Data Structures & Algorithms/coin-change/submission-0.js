class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(amount + 1);
        dp[0] = 0;

        const sortedCoins = coins.sort((a, b) => a - b);

        for (let i = 1; i <= amount; i++) {
            for (const coin of sortedCoins) {
                if (coin > i) break;
                dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    } 
}
