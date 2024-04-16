class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function pathSum(root: TreeNode | null, targetSum: number): number {
    if(!root){
        return 0;
    }

    function findAllValidPath(root: TreeNode | null, curSum: number){
        if(!root){
            return 0;
        }
        let currentPathCount = 0;
        if(root.val === curSum){
            currentPathCount++
        }

        currentPathCount += findAllValidPath(root.right, curSum - root.val);
        currentPathCount += findAllValidPath(root.left, curSum - root.val);
        return currentPathCount;
    }
    let pathCount = findAllValidPath(root, targetSum);
    pathCount += pathSum(root.left, targetSum);
    pathCount += pathSum(root.right, targetSum);
    return pathCount;
};