class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        const freq = new Array(26);
        const posA = 'a'.charCodeAt(0);

        for (const str of strs) {
            freq.fill(0);

            for (const char of str) {
                freq[char.charCodeAt(0) - posA]++;
            }

            const key = freq.join('#');

            const group = groups.get(key) ?? [];
            group.push(str);
            groups.set(key, group);
        }

        return Array.from(groups.values())
    }
}
