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
            let currSeq = 1;
            let currNum = num;

            while (numsSet.has(currNum + 1)) {
                currNum++;
                currSeq++;
            }

            longestSequence = Math.max(longestSequence, currSeq);
        }

        return longestSequence;
    }
}
