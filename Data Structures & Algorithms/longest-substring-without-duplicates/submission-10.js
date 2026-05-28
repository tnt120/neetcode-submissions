class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const windowChars = new Set();
        let longestSubstring = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            while (windowChars.has(s[right])) {
                windowChars.delete(s[left]);
                left++;
            }

            windowChars.add(s[right]);

            longestSubstring = Math.max(longestSubstring, right - left + 1);
        }

        return longestSubstring;
    }
}
