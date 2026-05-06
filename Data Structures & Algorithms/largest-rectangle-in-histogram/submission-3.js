class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const newH = [...heights, 0];
        const stack = [];

        for (let i = 0; i < newH.length; i++) {
            
            while (stack.length > 0 && newH[stack[stack.length - 1]] > newH[i]) {
                const h = newH[stack.pop()];
                const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, h * w);
            }

            stack.push(i);
        }

        return maxArea;
    }
}
