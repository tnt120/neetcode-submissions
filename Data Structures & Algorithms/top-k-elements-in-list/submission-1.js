class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1)
        }

        const bucket = Array.from({ length: nums.length }, () => []);

        for (const [num, freq] of freqMap) {
            bucket[freq - 1].push(num);
        }

        const res = [];
        console.log(bucket)

        for (let i = nums.length - 1; i >= 0; i--) {
            while (bucket[i].length > 0) {
                res.push(bucket[i].pop());
                if (res.length === k) return res;
            }
        }

        return res;
    }
}
