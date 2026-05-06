class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;
        let prevStep = 2;
        let twoPrevStep = 1;

        for (let i = 3; i <= n; i++) {
            const nextStep = prevStep + twoPrevStep;
            twoPrevStep = prevStep;
            prevStep = nextStep;
        }

        return prevStep;
    }
}
