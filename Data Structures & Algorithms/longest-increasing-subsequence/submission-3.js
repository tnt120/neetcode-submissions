class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if (nums.length === 0) return 0;
        const tails = [];

        for (const num of nums) {
            let left = 0;
            let right = tails.length;

            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            if (left === tails.length) {
                tails.push(num);
            } else {
                tails[left] = num;
            }
        }

        return tails.length;
    }
    
}
