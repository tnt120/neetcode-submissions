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
     * @return {number}
     */
    maxPathSum(root) {
        let maxiumumPath = -Infinity;

        function recursion(root) {
            if (root === null) return 0;

            let left = Math.max(recursion(root.left), 0);
            let right = Math.max(recursion(root.right), 0);

            const localMaxPath = root.val + left + right;

            maxiumumPath = Math.max(maxiumumPath, localMaxPath);

            return root.val + Math.max(left, right);
        }

        recursion(root);

        return maxiumumPath;
    }
}
