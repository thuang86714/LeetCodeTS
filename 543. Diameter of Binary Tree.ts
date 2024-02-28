/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    //DFS, TC O(n), SC O(logn)
    let ans = 0
    function findDepth(node: TreeNode | null): number{
        if(!node){
            return 0
        }
        let leftHeight = findDepth(node.left)
        let rightHeight = findDepth(node.right)
        ans = Math.max(ans, 1 + leftHeight + rightHeight)
        return Math.max(leftHeight, rightHeight) + 1
    }
    findDepth(root)
    return ans - 1
};