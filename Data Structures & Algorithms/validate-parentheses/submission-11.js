class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const correspondingParanthesis = new Map([['(', ')'], ['[', ']'], ['{', '}']]);

        const stack = [];

        for (const char of s) {
            if (correspondingParanthesis.has(char)) {
                stack.push(char);
                continue;
            }

            if (char === correspondingParanthesis.get(stack[stack.length - 1])) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
