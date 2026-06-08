class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set();

        for (const num of nums) {
            if (numsSet.has(num)) return true;
            numsSet.add(num);
        }

        return false;
    }
}
