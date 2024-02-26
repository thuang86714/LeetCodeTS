class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    //DFS, TC O(n), SC O(logn)
    if(!root){
        return false
    }
    if(targetSum - root.val == 0 && !root.left && !root.right){
        return true
    }
    targetSum -= root.val
    return hasPathSum(root.right, targetSum) || hasPathSum(root.left, targetSum)
};