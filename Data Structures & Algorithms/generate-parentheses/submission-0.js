class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        // 1. currString === 2 * n -> append to res and finish the function
        // 2. open < n
        // 3. close < open

        const res = [];
        
        function backtrack(currString, open, close) {
            if (currString.length === 2 * n) {
                res.push(currString);
                return;
            }

            if (open < n) {
                backtrack(currString + '(', open + 1, close)
            }

            if (close < open) {
                backtrack(currString + ')', open, close + 1);
            }
        }

        backtrack('',0 ,0);
        return res;
    }
}
