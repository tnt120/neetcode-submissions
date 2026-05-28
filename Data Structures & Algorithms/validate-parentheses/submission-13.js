class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const paranthesesMap = new Map([['(', ')'], ['[', ']'], ['{', '}']]);
        const stack = [];

        for (const char of s) {
            if (paranthesesMap.has(char)) {
                stack.push(char);
                continue;
            }

            if (char !== paranthesesMap.get(stack.pop())) return false;
        }

        return stack.length === 0;
    }
}
