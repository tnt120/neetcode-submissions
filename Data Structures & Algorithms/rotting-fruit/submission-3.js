class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = [];
        let freshFruits = 0;
        let minutes = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    freshFruits++;
                } else if (grid[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }

        if (freshFruits === 0) return 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while (queue.length > 0 && freshFruits > 0) {
            const queueSize = queue.length;

            for (let k = 0; k < queueSize; k++) {
                const [i, j] = queue.shift();

                for (const [dirI, dirJ] of directions) {
                    const newI = i + dirI;
                    const newJ = j + dirJ;

                    if (newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid[0].length && grid[newI][newJ] === 1) {
                        freshFruits--;
                        grid[newI][newJ] = 2;
                        queue.push([newI, newJ]);
                    }
                }
            }

            minutes++;
        }

        return freshFruits > 0 ? -1 : minutes;
    }
}
