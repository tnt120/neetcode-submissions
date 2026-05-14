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

        const buckets = Array.from({ length: nums.length }, () => []);

        for (const [val, freq] of freqArray) {
            const bucket = buckets[freq - 1];
            bucket.push(val)
        }

        const res = [];

        for (let i = nums.length - 1; i >= 0; i--) {
            console.log(buckets[i])
            while (res.length < k && buckets[i].length > 0) {
                res.push(buckets[i].pop());
            }
        }

        return res;
    }
}
