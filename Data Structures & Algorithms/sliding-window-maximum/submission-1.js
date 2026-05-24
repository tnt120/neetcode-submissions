class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        const deque = [];

        for (let right = 0; right < nums.length; right++) {
            
            while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[right]) {
                deque.pop();
            }

            deque.push(right);

            if (deque[0] < right - k + 1) {
                deque.shift();
            }

            if (right >= k - 1) {
                res.push(nums[deque[0]]);
            }
        }

        return res;
    }
}