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

        const freqBuckets = Array.from({ length: nums.length }, () => []);

        for (const [num, freq] of freqMap.entries()) {
            const bucket = freqBuckets[freq - 1];
            bucket.push(num);
        }

        const res = [];

        for (let i = freqBuckets.length - 1; i >= 0; i--) {
            while (k > 0 && freqBuckets[i].length > 0) {
                res.push(freqBuckets[i].pop());
                k--;
            }

            if (k === 0) return res;
        }

        return res;
    }
}
