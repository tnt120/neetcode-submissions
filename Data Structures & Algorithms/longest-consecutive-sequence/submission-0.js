class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let longestSequence = 0;

        for (const num of nums) {
            if (numsSet.has(num - 1)) continue;
            let length = 0;

            while (numsSet.has(num + length)) {
                length++;
            }

            longestSequence = Math.max(longestSequence, length);
        }

        return longestSequence;
    }
}
