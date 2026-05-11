class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const freq = new Map();

        for (const char of s) {
            freq.set(char, (freq.get(char) || 0) + 1);
        }

        for (const char of t) {
            const count = freq.get(char);

            if (!count) return false;

            freq.set(char, count - 1);
        }

        return true;
    }
}
