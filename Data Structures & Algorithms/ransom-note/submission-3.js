class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        if (ransomNote.length > magazine.length) return false;

        const freqArray = new Array(26).fill(0);
        const posA = 'a'.charCodeAt(0);

        for (const char of magazine) {
            freqArray[char.charCodeAt(0) - posA]++;
        }

        for (const char of ransomNote) {
            freqArray[char.charCodeAt(0) - posA]--;

            if (freqArray[char.charCodeAt(0) - posA] < 0) return false;
        }

        return true;
    }
}
