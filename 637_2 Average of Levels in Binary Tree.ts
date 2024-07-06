function averageOfLevels(root: TreeNode | null): number[] {
    const toVisitArray: TreeNode[] = [root];
    const ansArray: number[] = [];
    while (toVisitArray.length != 0) {
        let curSum = 0, curCount = toVisitArray.length, curSize = curCount;
        while (curCount) {
            let curNode = toVisitArray.shift();
            curSum += curNode.val;
            if (curNode.left) {
                toVisitArray.push(curNode.left);
            }
            if (curNode.right) {
                toVisitArray.push(curNode.right);
            }
            curCount--;
        }
        ansArray.push(curSum / curSize);
    }
    return ansArray;
};