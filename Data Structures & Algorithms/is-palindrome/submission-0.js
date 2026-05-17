class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const lowerLeft = s[left].toLowerCase();
            const lowerRight = s[right].toLowerCase();
            const leftCharCode = lowerLeft.charCodeAt(0);
            const rightCharCode = lowerRight.charCodeAt(0);

            if (!(leftCharCode >= 97 && leftCharCode <= 122) && !(leftCharCode >= 48 && leftCharCode <= 57)) {
                left++;
                continue;
            }

            if (!(rightCharCode >= 97 && rightCharCode <= 122) && !(rightCharCode >= 48 && rightCharCode <= 57)) {
                right--;
                continue;
            }
            
            if (lowerLeft === lowerRight) {
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true;
    }
}
