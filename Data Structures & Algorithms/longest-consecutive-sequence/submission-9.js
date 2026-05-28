class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequence = 0;
        const numsSet = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            if (numsSet.has(nums[i] - 1)) continue;
            let currSeq = 1;
            let currNum = nums[i]

            while (numsSet.has(currNum + 1)) {
                currNum++;
                currSeq++;
            }

            longestSequence = Math.max(longestSequence, currSeq);
        }

        return longestSequence;
    }
}
