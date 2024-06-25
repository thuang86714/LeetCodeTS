 //TC O(n), SC O(height of tree)

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

 function collectSum(node: TreeNode | null, cur: number): number {
    if (!node) {
        return cur;
    }
    node.val += collectSum(node.right, cur);
    return collectSum(node.left, node.val);
}
function bstToGst(root: TreeNode | null): TreeNode | null {
    collectSum(root, 0);
    return root;
};