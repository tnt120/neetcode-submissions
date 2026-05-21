class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const visitedMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const expected = target - nums[i];

            if (visitedMap.has(expected)) {
                return [visitedMap.get(expected), i];
            }

            visitedMap.set(nums[i], i);
        } 

        return [];
    }
}
