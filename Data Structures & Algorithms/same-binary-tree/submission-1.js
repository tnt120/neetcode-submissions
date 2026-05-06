/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p === null && p === q) return true;
        if (p === null || q === null || p.val !== q.val) return false;

        let isLeftSame = this.isSameTree(p.left, q.left);
        let isRightSame = this.isSameTree(p.right, q.right);

        return isLeftSame && isRightSame;
    }
}
