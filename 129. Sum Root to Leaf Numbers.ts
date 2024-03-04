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
function findSum(node: TreeNode | null, sum: number): number{
    //DFS, TC O(n), SC O(logn)
    let ans = 0;
    sum = sum*10 + node.val;
    if(!node.left && !node.right){
        return sum;
    }
    if(node.left){
        ans += findSum(node.left, sum);
    }
    if(node.right){
        ans += findSum(node.right, sum);
    }
    return ans;
};
function sumNumbers(root: TreeNode | null): number {
    return findSum(root, 0);
};