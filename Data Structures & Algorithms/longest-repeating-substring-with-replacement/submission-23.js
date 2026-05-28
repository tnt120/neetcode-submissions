class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqArray = new Array(26).fill(0);
        const posA = 'A'.charCodeAt(0);
        let maxFreq = 0;
        let longestSubstring = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            freqArray[s[right].charCodeAt(0) - posA]++;
            maxFreq = Math.max(maxFreq, freqArray[s[right].charCodeAt(0) - posA]);

            const windowSize = right - left + 1;

            if (windowSize - maxFreq <= k) {
                longestSubstring = Math.max(longestSubstring, windowSize);
            } else {
                freqArray[s[left].charCodeAt(0) - posA]--;
                left++;
            }
        }

        return longestSubstring;
    }
}
