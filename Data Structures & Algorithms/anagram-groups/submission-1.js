class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const freqArray = new Array(26);
        const res = new Map();
        const posA = 'a'.charCodeAt(0);

        for (const str of strs) {
            freqArray.fill(0);

            for (const char of str) {
                freqArray[char.charCodeAt(0) - posA]++;
            }

            const keyHash = freqArray.join('#');

            const currGroup = res.get(keyHash) || [];
            currGroup.push(str);

            res.set(keyHash, currGroup);
        }

        return Array.from(res.values());
    }
}
