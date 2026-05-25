class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dqueue = [];
        const res = [];

        for (let right = 0; right < nums.length; right++) {

            while (dqueue.length > 0 && nums[dqueue[dqueue.length - 1]] < nums[right]) {
                dqueue.pop();
            }

            dqueue.push(right);

            if (dqueue[0] < right - k + 1) {
                dqueue.shift();
            }

            if (right >= k - 1) {
                res.push(nums[dqueue[0]]);
            }
        }

        return res;
    }
}
