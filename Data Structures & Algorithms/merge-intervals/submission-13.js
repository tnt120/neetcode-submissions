class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const res = [];
        intervals.sort((a, b) => a[0] - b[0]);

        for (const interval of intervals) {
            if (res.length > 0 && res[res.length - 1][1] >= interval[0]) {
                res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
            } else {
                res.push(interval);
            }
        }

        return res;
    }
}
