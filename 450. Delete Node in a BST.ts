function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) {
        return null;
    }
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (root.left === null && root.right === null) {
            return null;
        }
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }

        let temp: TreeNode = root.left;
        while (temp.right !== null) {
            temp = temp.right;
        }
        root.val = temp.val;
        root.left = deleteNode(root.left, temp.val);
    }
    return root;
}