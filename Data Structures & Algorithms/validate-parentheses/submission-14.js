class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parenthesesMap = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
        const stack = [];

        for (const char of s) {
            if (parenthesesMap.has(char)) {
                stack.push(char);
                continue;
            }

            if (stack.length === 0 || parenthesesMap.get(stack.pop()) !== char) return false;
        }

        return stack.length === 0;
    }
}
