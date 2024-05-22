let moves: number;
function countMoves(node: TreeNode | null): number {
    //DFS, TC O(n), SC O(height of tree)
    if(!node){
        return 0;
    }
    let leftCount = countMoves(node.left);
    let rightCount = countMoves(node.right);
    moves += Math.abs(leftCount) + Math.abs(rightCount);
    return node.val + leftCount + rightCount - 1;
}
function distributeCoins(root: TreeNode | null): number {
    moves = 0;
    countMoves(root);
    return moves;
};