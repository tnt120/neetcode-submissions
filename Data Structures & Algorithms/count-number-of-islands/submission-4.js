class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const queue = [];
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let islandsCounter = 0;
        
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '1') {
                    islandsCounter += 1;
                    grid[i][j] = '0';
                    queue.push([i, j]);

                    while (queue.length > 0) {
                        const [x, y] = queue.shift();

                        for (let k = 0; k < 4; k++) {
                            const [dirX, dirY] = directions[k];
                            const newX = x + dirX;
                            const newY = y + dirY;
                            if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length) {
                                continue;
                            }

                            if (grid[newX][newY] === '1') {
                                grid[newX][newY] = '0';
                                queue.push([newX, newY]);
                            }
                        }
                    }
                }
            }
        }

        return islandsCounter;
    }
}
