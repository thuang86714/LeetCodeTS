
function smallestFromLeaf(root: TreeNode | null): string {
    function findSmallestString(node: TreeNode | null, curString: string): string | null{
        if (!node) {
            return null;
        }

        curString = String.fromCharCode(node.val + 97) + curString;
        if (!node.left && !node.right) {
            return curString;
        }
        const leftSmallest = findSmallestString(node.left, curString);
        const rightSmallest = findSmallestString(node.right, curString);

        if (leftSmallest && rightSmallest) {
            return leftSmallest < rightSmallest ? leftSmallest : rightSmallest;
        } else {
            return leftSmallest || rightSmallest;
        }
    }
    return findSmallestString(root, "") || "";
};