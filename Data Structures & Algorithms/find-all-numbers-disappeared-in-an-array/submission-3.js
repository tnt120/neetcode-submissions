class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        for (let i = 0; i < nums.length; i++) {
            const idx = Math.abs(nums[i]) - 1;
            if (nums[idx] > 0) {
                nums[idx] = -nums[idx];
            }
        }

        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) res.push(i + 1);
        }

        return res;
    }
}
