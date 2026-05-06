class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0; // previousBest
        let rob2 = 0; // currentBest

        for (const num of nums) {
            const currBest = Math.max(rob2, rob1 + num);

            rob1 = rob2;
            rob2 = currBest;
        }

        return rob2;
    }
}
