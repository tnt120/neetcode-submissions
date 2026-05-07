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

        let res = [-1, -1];
        let minWindowSize = Infinity;
        let left = 0;
        const window = {};
        
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (window[char] === tFreq[char]) {
                valid++;
            }

            while (valid === need) {
                if (right - left + 1 < minWindowSize) {
                    minWindowSize = right - left + 1;
                    res = [left, right];
                }

                window[s[left]]--;

                if (tFreq[s[left]] && window[s[left]] < tFreq[s[left]]) {
                    valid--;
                }
                left++;
            }
        }

        return minWindowSize === Infinity ? "" : s.substring(res[0], res[1] + 1);
    }
}
