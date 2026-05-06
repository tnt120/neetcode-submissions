/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();

        function dfs(node) {
            if (node === null) return null;
            if (oldToNew.has(node)) return oldToNew.get(node);

            const newNode = new Node(node.val);
            oldToNew.set(node, newNode);

            for (let i = 0; i < node.neighbors.length; i++) {
                newNode.neighbors.push(dfs(node.neighbors[i]));
            }

            return newNode;
        }

        return dfs(node);
    }
}
