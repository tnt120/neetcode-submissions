class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = [];
        const stack = [];

        for (let i = 0; i < position.length; i++) {
            pairs.push([position[i], speed[i]]);
        }

        pairs.sort((a, b) => b[0] - a[0]);

        for (let i = 0; i < pairs.length; i++) {
            stack.push((target - pairs[i][0]) / pairs[i][1]);

            while (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
