class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const visitedSet = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                if (val === '.') continue;

                const boxId = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                const rowKey = `row-${r}-${val}`;
                const colKey = `col-${c}-${val}`;
                const boxKey = `box-${boxId}-${val}`;

                if (visitedSet.has(rowKey) || visitedSet.has(colKey) || visitedSet.has(boxKey)) return false;

                visitedSet.add(rowKey);
                visitedSet.add(colKey);
                visitedSet.add(boxKey);
            }
        }

        return true;
    }
}
