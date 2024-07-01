function maxDepth(root: TreeNode | null): number {
    //TC O(n), SC O(height of tree)
    if(!root){
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};