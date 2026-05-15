class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const visited = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                if (val === ".") continue;

                const regIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                
                const rowKey = `row-${r}-${val}`;
                const colKey = `col-${c}-${val}`;
                const regKey = `reg-${regIdx}-${val}`;

                if (visited.has(rowKey) || visited.has(colKey) || visited.has(regKey)) return false;

                visited.add(rowKey);
                visited.add(colKey);
                visited.add(regKey);
            }
        }

        return true;
    }
}
