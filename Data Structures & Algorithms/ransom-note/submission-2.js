class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const freqArray = new Array(26).fill(0);
        const posA = 'a'.charCodeAt(0);

        for (const char of magazine) {
            freqArray[char.charCodeAt(0) - posA]++;
        }

        for (const char of ransomNote) {
            const charIdx = char.charCodeAt(0) - posA;
            freqArray[charIdx]--;

            if (freqArray[charIdx] < 0) return false;
        }

        return true;
    }
}
