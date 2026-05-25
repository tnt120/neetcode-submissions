class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        let currString = "";
        let currNumber = 0;

        for (const char of s) {
            if (char >= '0' && char <= '9') {
                currNumber = currNumber * 10 + parseInt(char);
            } else if (char === "[") {
                stack.push([currString, currNumber]);
                currString = "";
                currNumber = 0;
            } else if (char === "]") {
                const [prevString, numberRepeat] = stack.pop();
                currString = prevString + currString.repeat(numberRepeat);
            } else {
                currString += char;
            }
        }

        return currString;
    }
}
