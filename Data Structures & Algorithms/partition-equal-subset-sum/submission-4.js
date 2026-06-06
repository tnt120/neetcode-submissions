class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const sum = nums.reduce((acc, curr) => acc + curr, 0);

        if (sum % 2 !== 0) return false;

        const target = sum / 2;
        
        let possibleSubSums = new Set([0]);

        for (const num of nums) {
            const nextSums = new Set(possibleSubSums);

            for (const subSum of possibleSubSums) {
                const currSum = num + subSum;
                if (target === currSum) return true;
                else if (target > currSum) nextSums.add(currSum);
            }

            possibleSubSums = nextSums;
        }

        return false;
    }
}
