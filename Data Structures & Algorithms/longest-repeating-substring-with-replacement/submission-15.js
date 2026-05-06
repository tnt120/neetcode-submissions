class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqMap = new Map();
        let left = 0;
        let maxFreq = 0;
        let longestSubstring = 0;

        for (let right = 0; right < s.length; right++) {
            freqMap.set(s[right], (freqMap.get(s[right]) ?? 0) + 1);

            maxFreq = Math.max(maxFreq, freqMap.get(s[right]));

            const windowSize = right - left + 1;

            if (windowSize - maxFreq > k) {
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            } else {
                longestSubstring = Math.max(longestSubstring, windowSize);
            }
        }

        return longestSubstring;
    }
}
