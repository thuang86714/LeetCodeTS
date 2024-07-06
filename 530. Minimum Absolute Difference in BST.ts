let prevNode: TreeNode;
let diff: number;
function findDiff(root: TreeNode | null) {
    if (!root) {
        return;
    }

    findDiff(root.left);

    if (prevNode) {
        diff = Math.min(diff, root.val - prevNode.val);
    }

    prevNode = root;
    findDiff(root.right);
}
function getMinimumDifference(root: TreeNode | null): number {
    prevNode = null;
    diff = 100000;
    findDiff(root);
    return diff;
};