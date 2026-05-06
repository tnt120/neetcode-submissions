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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null) return null;
        if (this.isSameTree(root, subRoot)) return true;

        if (root.left) {
            return this.isSubtree(root.left, subRoot);
        }

        if (root.right) {
            return this.isSubtree(root.right, subRoot)
        }
        
        return false;
    }

    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.val !== q.val) return false;

        let leftSame = this.isSameTree(p.left, q.left);
        let rightSame = this.isSameTree(p.right, q.right);

        return leftSame && rightSame;
    }
}
