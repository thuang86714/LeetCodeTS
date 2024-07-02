function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    //TC O(n), SC O(height of tree)
    if (!root) {
        return false;
    }
    targetSum -= root.val;
    if (targetSum == 0 && !root.right && !root.left) {
        return true;
    }
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};