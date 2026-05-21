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
                longestSubstring = Math.max(longestSubstring, right - left);

                while (currCharsWindow.has(s[right])) {
                    currCharsWindow.delete(s[left]);
                    left++;
                }
            }

            currCharsWindow.add(s[right]);
        }

        return Math.max(longestSubstring, currCharsWindow.size);
    }
}
