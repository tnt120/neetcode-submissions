class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFreq = {};

        for (const char of t) {
            tFreq[char] = (tFreq[char] || 0) + 1;
        }

        const need = Object.keys(tFreq).length;
        let valid = 0;

        let left = 0;
        let res = [-1, -1];
        let minimumWindowLength = Infinity;
        let window = {};

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (tFreq[char] && window[char] === tFreq[char]) {
                valid++;
            }

            while (valid === need) {
                if (right - left + 1 < minimumWindowLength) {
                    minimumWindowLength = right - left + 1;
                    res = [left, right];
                }

                const leftChar = s[left];
                window[leftChar] = window[leftChar] - 1;

                if (tFreq[leftChar] && window[leftChar] < tFreq[leftChar]) {
                    valid--;
                }
                left++;
            }
        }

        return res[0] !== -1 ? s.substring(res[0], res[1] + 1) : '';
    }
}
