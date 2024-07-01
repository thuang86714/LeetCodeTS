function isEqual(curR: TreeNode | null, curL: TreeNode | null): boolean{
    if(!curR && !curL){
        return true;
    }
    if(!curR || !curL){
        return false;
    }
    if(curR.val != curL.val){
        return false;
    }
    return isEqual(curR.right, curL.left) && isEqual(curR.left, curL.right);
}
function isSymmetric(root: TreeNode | null): boolean {
    return isEqual(root!.right, root!.left);
};