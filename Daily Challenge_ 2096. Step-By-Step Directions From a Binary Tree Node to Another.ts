function findPathStr(node: TreeNode | null, value: number, curPath: string[]): boolean {
    if (!node) {
        return false;
    }

    if (node.val === value) {
        return true;
    }

    if (node.left && findPathStr(node.left, value, curPath)) {
        curPath.push('L');
    } else if (node.right && findPathStr(node.right, value, curPath)) {
        curPath.push('R');
    }

    return curPath.length > 0;
}

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
    const destPath: string[] = [];
    const startPath: string[] = [];

    findPathStr(root, destValue, destPath);
    findPathStr(root, startValue, startPath);

    while (destPath.length !== 0 && startPath.length !== 0 && destPath[destPath.length - 1] === startPath[startPath.length - 1]) {
        destPath.pop();
        startPath.pop();
    }

    const resultPath: string[] = new Array(startPath.length).fill('U');
    resultPath.push(...destPath.reverse());

    return resultPath.join('');
}