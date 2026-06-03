class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSubstring = 0;
        const numsSet = new Set(nums);

        for (const num of nums) {
            if (numsSet.has(num - 1)) continue;
            let currLongest = 1;
            let currNum = num;

            while (numsSet.has(currNum + 1)) {
                currLongest++;
                currNum++;
            }

            longestSubstring = Math.max(longestSubstring, currLongest);
        }

        return longestSubstring;
    }
}
