class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let largestArea = 0;
        const stack = [];

        const h = [...heights, 0];

        for (let i = 0; i < h.length; i++) {
            while (stack.length > 0 && h[i] < h[stack[stack.length - 1]]) {
                const height = h[stack.pop()];
                const weight = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

                largestArea = Math.max(largestArea, height * weight);
            }

            stack.push(i);
        }

        return largestArea;
    }
}
