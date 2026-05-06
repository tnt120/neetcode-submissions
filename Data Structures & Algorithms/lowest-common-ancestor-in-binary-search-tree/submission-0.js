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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        while (root) {
            if (root.val < p.val && root.val < q.val) {
                root = root.right;
                continue;
            }

            if (root.val > p.val && root.val > q.val) {
                root = root.left;
                continue;
            }

            return root;
        }

        return null;
    }
}
