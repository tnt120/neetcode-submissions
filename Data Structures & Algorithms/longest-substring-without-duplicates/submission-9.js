class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const currCharsWindow = new Set();
        let longestSubstring = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            if (currCharsWindow.has(s[right])) {

                while (currCharsWindow.has(s[right])) {
                    currCharsWindow.delete(s[left]);
                    left++;
                }
            }

            longestSubstring = Math.max(longestSubstring, right - left + 1);
            currCharsWindow.add(s[right]);
        }

        return longestSubstring;
    }
}
