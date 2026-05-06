class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {

            while (stack.length > 0 & temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const popedIdx = stack.pop();
                res[popedIdx] = i - popedIdx;
            }

            stack.push(i);
        }

        return res;
    }
}
