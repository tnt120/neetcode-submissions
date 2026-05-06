class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if (grid.length === 0 || grid[0].length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;
        let freshCounter = 0;
        const queue = [];
        let minutes = 0;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    freshCounter++
                } else if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
            }
        }

        if (freshCounter === 0) return 0;

        while (queue.length && freshCounter) {
            minutes++;
            const queueSize = queue.length;

            for (let i = 0; i < queueSize; i++) {
                const [r, c] = queue.shift();

                for (const [dirR, dirC] of directions) {
                    const newR = r + dirR;
                    const newC = c + dirC;

                    if (newR < 0 || newC < 0 || newR >= rows || newC >= cols) continue;

                    if (grid[newR][newC] === 1) {
                        grid[newR][newC] = 2;
                        freshCounter--;
                        queue.push([newR, newC]);
                    }
                }

            }
        }

        if (freshCounter > 0) return -1;
        return minutes;
    }
}
