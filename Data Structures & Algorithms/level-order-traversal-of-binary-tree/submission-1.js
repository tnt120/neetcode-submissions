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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) return [];
        let queue = [root];
        let res = [];

        while (queue.length > 0) {
            const queueSize = queue.length;
            const currNodes = [];

            for (let i = 0; i < queueSize; i++) {
                const node = queue.shift();

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }

                currNodes.push(node.val);
            }

            res.push(currNodes);
        }

        return res;
    }
}
