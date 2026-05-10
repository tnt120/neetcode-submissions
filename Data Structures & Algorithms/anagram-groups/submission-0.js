class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        const freq = new Array(26).fill(0);
        const posA = 'a'.charCodeAt(0);

        for (const str of strs) {
            freq.fill(0);

            for (const char of str) {
                freq[char.charCodeAt(0) - posA]++;
            }

            const freqKey = freq.join("#");
            const arr = res.get(freqKey) ?? [];
            arr.push(str);
            res.set(freqKey, arr);
        }

        return Array.from(res.values());
    }
}
