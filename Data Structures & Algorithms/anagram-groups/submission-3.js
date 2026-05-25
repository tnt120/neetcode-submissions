class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map();
        const freq = new Array(26);
        const posA = 'a'.charCodeAt(0);


        for (const str of strs) {
            freq.fill(0);

            for (const char of str) {
                freq[char.charCodeAt(0) - posA]++;
            }

            const anagramKey = freq.join('#');

            const group = anagrams.get(anagramKey) || [];
            group.push(str);
            anagrams.set(anagramKey, group);
        }

        return [...anagrams.values()]
    }
}
