class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const windowFreq = new Array(26).fill(0);
        const posA = 'A'.charCodeAt(0);
        let maxFreq = 0;
        let left = 0;
        let longestRepeating = 0;
        
        for (let right = 0; right < s.length; right++) {
            const charRight = s[right];
            windowFreq[charRight.charCodeAt(0) - posA]++;

            maxFreq = Math.max(maxFreq, windowFreq[charRight.charCodeAt(0) - posA]);

            if (right - left + 1 - maxFreq > k) {
                windowFreq[s[left].charCodeAt(0) - posA]--;
                left++;
            } else {
                longestRepeating = Math.max(longestRepeating, right - left + 1);
            }
        }

        return longestRepeating;
    }
}
