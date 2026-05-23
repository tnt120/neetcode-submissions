class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        let currentString = "";
        let currentNum = 0;

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (char >= "0" && char <= "9") {
                currentNum = currentNum * 10 + parseInt(char);
            } else if (char === "[") {
                stack.push([currentString, currentNum]);
                currentNum = 0;
                currentString = "";
            } else if (char === "]") {
                const [prevString, num] = stack.pop();
                currentString = prevString + currentString.repeat(num);
            } else {
                currentString += char;
            }
        }

        return currentString;
    }
}
