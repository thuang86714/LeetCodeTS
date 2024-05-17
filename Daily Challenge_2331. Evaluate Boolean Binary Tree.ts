function evaluateTree(root: TreeNode | null): boolean {
    //TC O(n), SC O(height of tree)
    if(!root){
        return false;
    }

    if(root.val > 1){
        if(root.val === 2){
            return evaluateTree(root.left) || evaluateTree(root.right);
        }
        return evaluateTree(root.left) && evaluateTree(root.right);
    }
    return root.val > 0;
};