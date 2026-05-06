class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let nonRepeating = new Set();
        let longestSubstring = 0;
        let startIdx = 0;

        for (let i = 0; i < s.length; i++) {
            while (nonRepeating.has(s[i])) {
                nonRepeating.delete(s[startIdx]);
                startIdx++;
            }

            nonRepeating.add(s[i]);
            longestSubstring = Math.max(longestSubstring, nonRepeating.size);
        }

        return longestSubstring;
    }
}

