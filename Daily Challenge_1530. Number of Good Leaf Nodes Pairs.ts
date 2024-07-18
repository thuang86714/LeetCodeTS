function countPairs(root: TreeNode | null, distance: number): number {
    let ans = 0;

    function findPathDFS(root: TreeNode | null): number[] {
        if (!root) {
            return [];
        }
        if (!root.left && !root.right) {
            return [1];
        }

        const leftArray = findPathDFS(root.left);
        const rightArray = findPathDFS(root.right);

        for (let left of leftArray) {
            for (let right of rightArray) {
                if (left + right <= distance) {
                    ans++;
                }
            }
        }

        const result: number[] = [];
        for (let path of [...leftArray, ...rightArray]) {
            if (path < distance) {
                result.push(path + 1);
            }
        }
        return result;
    }

    findPathDFS(root);
    return ans;
}