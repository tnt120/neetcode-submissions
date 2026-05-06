class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // 2 20 4 10 3 4 5
        const numsSet = new Set(nums);
        let longestSequence = 0;

        for (const num of nums) {
                if (numsSet.has(num - 1)) continue;
                let currSequence = 1;
                let local = num;

                while (numsSet.has(local + 1)) {
                        currSequence++;
                        local++;
                }

                longestSequence = Math.max(longestSequence, currSequence);
        }

        return longestSequence;
    }
}
