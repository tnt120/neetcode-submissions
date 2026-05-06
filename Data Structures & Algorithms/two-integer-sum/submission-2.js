class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const b = target - nums[i];

            if (numMap.has(b)) return [numMap.get(b), i];

            numMap.set(nums[i], i);
        }

        return [];
    }
}
