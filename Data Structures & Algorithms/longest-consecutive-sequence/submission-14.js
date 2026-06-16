class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequence = 0;
        const numsSet = new Set(nums);

        for (const num of nums) {
            if (numsSet.has(num - 1)) continue;
            let currSequence = 1;
            let currNum = num;

            while (numsSet.has(currNum + 1)) {
                currSequence++;
                currNum++;
            }

            longestSequence = Math.max(longestSequence, currSequence);
        }

        return longestSequence;
    }
}
