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

        const buckets = Array.from({ length: nums.length }, () => []);

        for (const [num, freq] of freqMap.entries()) {
            buckets[freq - 1].push(num);
        }

        const res = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            while (k > 0 && buckets[i].length > 0) {
                res.push(buckets[i].pop());
                k--;
            }
        }

        return res;
    }
}
