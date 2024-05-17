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

function findLeaves(node: TreeNode | null, target: number): TreeNode | null{
    if(!node){
        return null;
    }

    node.left = findLeaves(node.left, target);
    node.right = findLeaves(node.right, target);

    //meaning this is the target leaf node
    if(!node.left && !node.right && node.val === target){
        return null;
    }
    return node;
}
function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    //TC O(n), SC O(height of tree)
    return findLeaves(root, target);
};