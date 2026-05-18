class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freqMap = new Map();

        for (const char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }

        for (const char of t) {
            const charFreq = freqMap.get(char) || 0;

            if (charFreq <= 0) return false;

            freqMap.set(char, charFreq - 1);
        }

        for (const freq of Array.from(freqMap.values())) {
            if (freq !== 0) return false;
        }

        return true;
    }
}
