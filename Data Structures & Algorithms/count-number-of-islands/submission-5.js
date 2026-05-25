class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const queue = [];
        let numberOfIslands = 0;

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    queue.push([i, j]);
                    grid[i][j] = "0";
                    numberOfIslands++;

                    while (queue.length > 0) {
                        const queueSize = queue.length;

                        for (let k = 0; k < queueSize; k++) {
                            const [ii, jj] = queue.shift();

                            for (const [dirX, dirY] of directions) {
                                const newX = ii + dirX;
                                const newY = jj + dirY;

                                if (
                                    newX >= 0 && newY >= 0 &&
                                    newX < grid.length && newY < grid[0].length &&
                                    grid[newX][newY] === "1"
                                ) {
                                    grid[newX][newY] = "0";
                                    queue.push([newX, newY]);
                                }
                            }
                        }
                    }
                }
            }
        }

        return numberOfIslands;
    }
}
