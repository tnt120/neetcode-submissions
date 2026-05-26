class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const visitedMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const b = target - nums[i];

            if (visitedMap.has(b)) return [visitedMap.get(b), i];

            visitedMap.set(nums[i], i);
        }

        return [];
    }
}
