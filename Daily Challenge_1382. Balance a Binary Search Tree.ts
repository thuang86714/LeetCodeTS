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
let treeNodeArray: TreeNode[];
function collectAllNodes(node: TreeNode | null) {
    if (!node) {
        return;
    }

    collectAllNodes(node.left);
    treeNodeArray.push(node);
    collectAllNodes(node.right);
}
function buildTree(start: number, end: number): TreeNode | null {
    if (start > end) {
        return null;
    }
    let mid = Math.floor((end - start) / 2) + start;
    let curNode = treeNodeArray[mid];
    curNode.left = buildTree(start, mid - 1);
    curNode.right = buildTree(mid + 1, end);
    return curNode;
}
function balanceBST(root: TreeNode | null): TreeNode | null {
    //TC O(n), SC O(n)
    treeNodeArray = new Array<TreeNode>;
    collectAllNodes(root);
    let totalNodeCount = treeNodeArray.length;
    return buildTree(0, totalNodeCount - 1);
};