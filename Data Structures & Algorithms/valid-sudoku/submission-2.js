class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const visited = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const val = board[i][j];

                if (val === ".") continue;

                const boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (visited.has(`row-${i}-${val}`)) return false;
                if (visited.has(`col-${j}-${val}`)) return false;
                if (visited.has(`box-${boxId}-${val}`)) return false;

                visited.add(`row-${i}-${val}`);
                visited.add(`col-${j}-${val}`);
                visited.add(`box-${boxId}-${val}`);
            }
        }

        return true;
    }
}
