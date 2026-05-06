class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const s of strs) {
            encoded += s.length + "#" + s;
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

            j++;
            const strLength = parseInt(str.substring(i, j));
            decoded.push(str.substring(j, j + strLength));
            i = j + strLength;
        }
        
        return decoded;
    }
}
