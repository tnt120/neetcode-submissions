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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.isValid(root, null, null);
    }

    isValid(root, min, max) {
        if (root === null) return true;
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;

        return this.isValid(root.left, min, root.val) && this.isValid(root.right, root.val, max);
    }
}
