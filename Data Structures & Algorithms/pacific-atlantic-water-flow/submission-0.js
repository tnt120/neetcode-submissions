class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        if (heights.length === 0 || heights[0].length === 0) return [];

        const res = [];

        const rows = heights.length;
        const cols = heights[0].length;

        const canReachPacific = Array.from({ length: rows }, () => Array(cols).fill(false));
        const canReachAtlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

        function dfs(r, c, visited, prevHeight) {
            if (r < 0 || c < 0 || r >= rows || c >= cols) return;
            if (visited[r][c]) return;
            if (heights[r][c] < prevHeight) return;

            visited[r][c] = true;

            dfs(r + 1, c, visited, heights[r][c]);
            dfs(r - 1, c, visited, heights[r][c]);
            dfs(r, c + 1, visited, heights[r][c]);
            dfs(r, c - 1, visited, heights[r][c]);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, canReachPacific, heights[r][0]);
            dfs(r, cols - 1, canReachAtlantic, heights[r][cols - 1]);
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c, canReachPacific, heights[0][c]);
            dfs(rows - 1, c, canReachAtlantic, heights[rows - 1][c]);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (canReachPacific[r][c] && canReachAtlantic[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
