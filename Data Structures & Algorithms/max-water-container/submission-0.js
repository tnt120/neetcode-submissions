class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            let lowerHeight = Math.min(heights[left], heights[right]);

            max = Math.max(max, lowerHeight * (right - left));

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
