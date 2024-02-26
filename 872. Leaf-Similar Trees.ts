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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    //credit to Abu_Suraj, dfs, TC O(n), SC O(logn)
    const traverseAllLeaves = (root: TreeNode | null): number[] =>{
        if(root == null){
            return [];
        }
        const leaves = traverseAllLeaves(root.left).concat(traverseAllLeaves(root.right))
        return leaves.length > 0? leaves:[root.val];
    };
    return JSON.stringify(traverseAllLeaves(root1)) === JSON.stringify(traverseAllLeaves(root2))
};