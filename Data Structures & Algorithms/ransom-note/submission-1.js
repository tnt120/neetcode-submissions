class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const ransomFreq = new Array(26).fill(0);
        const posA = 'a'.charCodeAt(0);

        for (const char of ransomNote) {
            ransomFreq[char.charCodeAt(0) - posA]++;
        }

        for (const char of magazine) {
            ransomFreq[char.charCodeAt(0) - posA]--;
        }

        for (const count of ransomFreq) {
            if (count > 0) return false;
        }

        return true;
    }
}
