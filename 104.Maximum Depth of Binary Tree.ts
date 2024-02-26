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


function maxDepth(root: TreeNode | null): number {
    //recursion, TC O(n), SC O(logn)
    if(root == undefined){
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};