class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();
        const freqArray = new Array(26);
        const posA = 'a'.charCodeAt(0);

        for (const str of strs) {
            freqArray.fill(0);

            for (const char of str) {
                freqArray[char.charCodeAt(0) - posA]++;
            }

            const key = freqArray.join('#');

            const group = groups.get(key) || [];
            group.push(str);
            groups.set(key, group);
        }

        return Array.from(groups.values());
    }
}
