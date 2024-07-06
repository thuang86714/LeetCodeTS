function countNodes(root: TreeNode | null): number {
    //TC O(logn)
    let curL = root, curR = root;
    let leftHeight = 0, rightHeight = 0;
    while (curL) {
        curL = curL.left;
        leftHeight++;
    }
    while (curR) {
        curR = curR.right;
        rightHeight++;
    }

    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1;
    }
    return 1 + countNodes(root!.left) + countNodes(root!.right);
};