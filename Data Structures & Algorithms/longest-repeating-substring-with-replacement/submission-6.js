class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = new Array(26).fill(0);
    const charA = 'A'.charCodeAt(0);
    let left = 0;
    let longest = 0;
    let maxFreq = 0;

    for (let right = 0; right < s.length; right++) {
        freq[s[right].charCodeAt(0) - charA]++;

        maxFreq = Math.max(freq[s[right].charCodeAt(0) - charA], maxFreq);

        const windowSize = right - left + 1;

        if (windowSize - maxFreq > k) {
            freq[s[left].charCodeAt(0) - charA]--;
            left++;
        } else {
            longest = Math.max(windowSize, longest);
        }
    }

    return longest;
    }
}