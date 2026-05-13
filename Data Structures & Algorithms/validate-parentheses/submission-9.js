class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const parenthesisMap = new Map([['(', ')'], ['{' , '}'], ['[' , ']']]);

        const stack = [];

        for (const bracket of s) {
            if (parenthesisMap.has(bracket)) {
                stack.push(bracket);
                continue;
            }

            if (bracket !== parenthesisMap.get(stack.pop())) return false;
        }

        return stack.length === 0;
    }
}
