class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const frequency = new Map();
        let maxFreq = 0;
        let longestSubstring = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const letterFreq = (frequency.get(s[right]) ?? 0) + 1;
            frequency.set(s[right], letterFreq);

            maxFreq = Math.max(maxFreq, letterFreq);

            if ((right - left + 1) - maxFreq > k) {
                frequency.set(s[left], frequency.get(s[left]) - 1);
                left++;
            } else {
                longestSubstring = Math.max(right - left + 1, longestSubstring);
            }
            
        }

        return longestSubstring;
    }
}