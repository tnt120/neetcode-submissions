class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const windowChars = new Set();
        let left = 0;
        let longestSubstringSize = 0;

        for (let right = 0; right < s.length; right++) {
            while (windowChars.has(s[right])) {
                windowChars.delete(s[left]);
                left++;
            }
            
            windowChars.add(s[right]);
            longestSubstringSize = Math.max(longestSubstringSize, right - left + 1);
        }

        return longestSubstringSize;
    }
}
