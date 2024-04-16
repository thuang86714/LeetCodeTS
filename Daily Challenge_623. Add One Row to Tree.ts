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
function addNewNode(node: TreeNode | null, val: number, depth: number, curDepth: number){
    if(!node){
        return;
    }
    if(curDepth < depth - 1){
        addNewNode(node.left, val, depth, curDepth + 1);
        addNewNode(node.right, val, depth, curDepth + 1);
        return;
    }

    const oldLeftPtr = node.left, oldRightPtr = node.right;
    const newLeftPtr = new TreeNode(val), newRightPtr = new TreeNode(val);
    newLeftPtr.left = oldLeftPtr;
    newRightPtr.right = oldRightPtr;
    node.left = newLeftPtr;
    node.right = newRightPtr;
    return;
}

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    if(depth == 1){
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    addNewNode(root, val, depth, 1);
    return root;
};