class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        let left;
        let right;

        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i - 1] === nums[i]) continue;

            left =  i + 1;
            right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return res;
    }
}
