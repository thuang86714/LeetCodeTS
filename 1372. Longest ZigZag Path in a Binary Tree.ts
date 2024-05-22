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

let maxStep: number;

function findMaxLength(root: TreeNode | null, isLeft: boolean, step: number): void{
    if(!root){
        return;
    }

    maxStep = Math.max(maxStep, step);

    if(isLeft){
        findMaxLength(root.left, false, step + 1);// keep going from root to left
        findMaxLength(root.right, true, 1);// restart going from root to right
    }else{
        findMaxLength(root.right, true, step + 1);// keep going from root to left
        findMaxLength(root.left, false, 1);// restart going from root to right
    }
}

function longestZigZag(root: TreeNode | null): number {
    maxStep = 0;
    findMaxLength(root, true, 0);
    findMaxLength(root, false, 0);
    return maxStep;
};