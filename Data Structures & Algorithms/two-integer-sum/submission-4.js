class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const viewed = new Map();

        for (let i = 0; i < nums.length; i++) {
            const b = target - nums[i];

            if (viewed.has(b)) return [viewed.get(b), i];

            viewed.set(nums[i], i);
        }

        return [];
    }
}
