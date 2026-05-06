class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            const length = parseInt(str.substring(i, j));
            
            i = j + 1;

            const word = str.substring(i, i + length);
            decoded.push(word);

            i = i + length;
        }

        return decoded;
    }
}
