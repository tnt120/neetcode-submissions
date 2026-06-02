class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const visited = new Map();

        for (let i = 0; i < nums.length; i++) {
            const a = target - nums[i];

            if (visited.has(a)) return [visited.get(a), i];

            visited.set(nums[i], i)
        };

        return [];
    }
}
