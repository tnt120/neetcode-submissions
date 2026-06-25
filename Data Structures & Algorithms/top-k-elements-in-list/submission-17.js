class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = new Map();

        for (const num of nums) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length }, () => []);

        for (const [val, freq] of freqs) {
            buckets[freq - 1].push(val);
        }

        const res = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            while (k >= 0 && buckets[i].length) {
                res.push(buckets[i].pop());
                k--;
            }

            if (k === 0) return res;
        }

        return res;
    }
}
