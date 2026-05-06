class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: board.length}, () => new Set() );
        const cols = Array.from({ length: board.length}, () => new Set() );
        const squares = Array.from({ length: board.length}, () => new Set() );

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                const element = board[i][j];
                if (element === '.') continue;
                if (rows[i].has(element)) return false;
                if (cols[j].has(element)) return false;
                const squareIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (squares[squareIdx].has(element)) return false;

                rows[i].add(element);
                cols[j].add(element);
                squares[squareIdx].add(element);
            }
        }

        return true;
    }
}
