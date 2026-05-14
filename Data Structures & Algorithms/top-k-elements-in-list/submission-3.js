class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const freqArray = Array.from(freqMap.entries());

        freqArray.sort((a, b) => b[1] - a[1]);

        const res = [];

        for (let i = 0; i < k; i++) {
            res.push(freqArray[i][0]);
        }

        return res;
    }
}
