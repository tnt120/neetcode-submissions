class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        const nonRepeating = new Set(nums);
        let longest = 0;

        for (const num of nonRepeating) {
            if (nonRepeating.has(num - 1)) continue;
            let currNum = num;
            let currStreak = 1;

            while (nonRepeating.has(currNum + 1)) {
                currNum++;
                currStreak++;
            }

            longest = Math.max(longest, currStreak);
        }

        return longest;
    }
}
