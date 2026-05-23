class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = [];
        let minutes = 0;
        let freshFruits = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const val = grid[i][j]
                if (val === 1) freshFruits++;
                else if (val === 2) queue.push([i, j]);
            }
        }

        if (freshFruits === 0) return 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        while (queue.length > 0 && freshFruits > 0) {
            const queueSize = queue.length;

            for (let k = 0; k < queueSize; k++) {
                const [i, j] = queue.shift();
                
                for (const [dirX, dirY] of directions) {
                    const newI = i + dirX;
                    const newJ = j + dirY;

                    if (
                        newI >= 0 && 
                        newI < grid.length && 
                        newJ >= 0 && 
                        newJ < grid[0].length &&
                        grid[newI][newJ] === 1
                    ) {
                        grid[newI][newJ] = 2;
                        freshFruits--;
                        queue.push([newI, newJ]);
                    }
                }
            }

            minutes++;
        }

        return freshFruits > 0 ? -1 : minutes;
    }
}
