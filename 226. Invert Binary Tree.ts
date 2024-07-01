function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root){
        return null;
    }

    let newL = invertTree(root.right);
    let newR = invertTree(root.left);

    root.left = newL;
    root.right = newR;

    return root;
};