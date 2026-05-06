class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const sequenceChars = new Set();
        let longestSequence = 0;
        let startSequenceIdx = 0;

        for (let i = 0; i < s.length; i++) {
            while (sequenceChars.has(s[i])) {
                sequenceChars.delete(s[startSequenceIdx]);
                startSequenceIdx++;
            }

            sequenceChars.add(s[i]);
            longestSequence = Math.max(longestSequence, sequenceChars.size);
        }

        return longestSequence;
    }
}
