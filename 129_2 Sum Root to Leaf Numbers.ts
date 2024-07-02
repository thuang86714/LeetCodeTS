function findSum(node: TreeNode | null, sum: number): number {
    sum = sum * 10 + node!.val;
    let ans = 0;
    if (!node!.left && !node!.right) {
        return sum
    }
    if (node!.left) {
        ans += findSum(node!.left, sum);
    }
    if (node!.right) {
        ans += findSum(node!.right, sum);
    }
    return ans;
}
function sumNumbers(root: TreeNode | null): number {
    return findSum(root, 0);
};