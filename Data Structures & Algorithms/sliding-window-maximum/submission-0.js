class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        const maxQueue = [];
        const queue = [];
        let left = 0;

        for (let right = k - 1; right < nums.length; right++) {
            let max = nums[left];
            for (let i = left; i <= right; i++) {
                max = Math.max(max, nums[i]);
            }

            res.push(max);
            left++;
        }

        return res;
    }
}