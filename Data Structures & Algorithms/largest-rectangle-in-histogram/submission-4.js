class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        const h = [...heights, 0];

        for (let i = 0; i < h.length; i++) {
            while (stack.length > 0 && h[stack[stack.length - 1]] > h[i]) {
                const height = h[stack.pop()];
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, height * width);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
